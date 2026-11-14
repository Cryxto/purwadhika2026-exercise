import { faker } from "@faker-js/faker";
// Exercise 1

export type StudentContract = {
  name: string;
  email: string;
  age: number;
  score: number;
};

type StudentStats = {
  Highest: number;
  Lowest: number;
  Average: number;
};

type StudentsDataStats = {
  Score: StudentStats;
  Age: StudentStats;
};

function seedStudents(count = 10): StudentContract[] {
  return Array.from({ length: count }, () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      name: `${firstName} ${lastName}`,
      email: faker.internet.email({ firstName, lastName }).toLowerCase(),
      age: faker.number.int({ min: 17, max: 30 }),
      score: faker.number.int({ min: 0, max: 100 }),
    };
  });
}

function studentStats(students: Array<StudentContract>): StudentsDataStats {
  const byScore = students.sort((a, b) => a.score - b.score);
  const byAge = students.sort((a, b) => a.age - b.age);
  return {
    Age: {
      Highest: byAge[byAge.length - 1]?.age!,
      Lowest: byAge[0]?.age!,
      Average:
        byAge.map((s) => s.age).reduce((prev, curr) => prev + curr, 0) / byAge.length,
    },
    Score: {
      Highest: byScore[byScore.length - 1]?.score!,
      Lowest: byScore[0]?.score!,
      Average:
        byScore.map((s) => s.score).reduce((prev, curr) => prev + curr, 0) /
        byScore.length,
    },
  };
}

const students = seedStudents();
console.log("Exercise 1");
console.log(studentStats(students));
console.log("\n");
// Exercise 2

const idr = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

class Product {
  constructor(
    public Name: string,
    public Price: number,
  ) {}
}

type CartItem = { Product: Product; Qty: number };

class Transaction {
  public Total: number = 0;
  public Product: { Products: Array<Product>; Qty: number } = {
    Products: [],
    Qty: 0,
  };

  private Cart: Array<CartItem> = [];
  private checkedOut = false;

  private dedupCartItems(items: Array<CartItem>) {
    const grouped = Object.groupBy(items, (item) => item.Product.Name.toLowerCase());
    const merged = Array.from(Object.entries(grouped))
      .filter(([_, z]) => z !== undefined)
      .map(([_, items]) => {
        return {
          Product: items![0]!.Product,
          Qty: items?.map((e) => e.Qty).reduce((prev, curr) => prev + curr, 0),
        } as CartItem;
      });
    return merged;
  }

  public total() {
    return this.Cart.reduce((prev, curr) => prev + curr.Product.Price * curr.Qty, 0);
  }

  private sync() {
    this.Total = this.total();
    this.Product = {
      Products: this.Cart.map((item) => item.Product),
      Qty: this.Cart.reduce((prev, curr) => prev + curr.Qty, 0),
    };
  }

  public addToCart(items: Array<CartItem>) {
    if (this.checkedOut) throw new Error("Transaction already checked out");
    this.Cart.push(...items);
    this.Cart = this.dedupCartItems(this.Cart);
    this.sync();
  }

  public showBill() {
    const rows = this.Cart.map(({ Product, Qty }, i) => ({
      No: i + 1,
      Name: Product.Name,
      Price: idr.format(Product.Price),
      Qty,
      Subtotal: idr.format(Product.Price * Qty),
    }));
    console.table([
      ...rows,
      {
        Name: "TOTAL",
        Qty: this.Product.Qty,
        Subtotal: idr.format(this.Total),
      },
    ]);
  }

  public checkout() {
    if (this.checkedOut) throw new Error("Transaction already checked out");
    if (this.Cart.length === 0) throw new Error("Cart is empty");
    this.checkedOut = true;
    const data = {
      Date: new Date(),
      Total: this.Total,
      Product: this.Product,
      Items: this.Cart.map((item) => ({ ...item })),
    };
    this.printReceipt(data);
    return data;
  }

  private printReceipt(data: {
    Date: Date;
    Total: number;
    Product: { Qty: number };
    Items: Array<CartItem>;
  }) {
    const width = 62;
    const line = "=".repeat(width);
    const center = (text: string) => text.padStart(Math.floor((width + text.length) / 2));
    console.log(line);
    console.log(center("RECEIPT"));
    console.log(
      center(
        data.Date.toLocaleString("id-ID", { dateStyle: "long", timeStyle: "short" }),
      ),
    );
    console.log(line);
    this.showBill();
    console.log(`Items : ${data.Items.length} (${data.Product.Qty} pcs)`);
    console.log(`Total : ${idr.format(data.Total)}`);
    console.log(line);
    console.log(center("Thank you for shopping with us!"));
  }
}

const keyboard = new Product("Keyboard", 250_000);
const mouse = new Product("Mouse", 100_000);

const transaction = new Transaction();

transaction.addToCart([
  { Product: keyboard, Qty: 1 },
  { Product: mouse, Qty: 2 },
]);

transaction.addToCart([{ Product: mouse, Qty: 1 }]);
transaction.addToCart([{ Product: keyboard, Qty: 3 }]);

console.log("Exercise 2");

transaction.checkout();
console.log("\n");
