function getOrFail<T = unknown>(params: T) {
  if (!!params) {
    return params!;
  }
  throw new Error("Not Exist!");
}
//1. Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 2’, email : ‘student2@mail.com’  }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]
// Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 2’, email : ‘student2@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]

type Student = {
  name: string;
  email: string;
};

function mergeStudentsArray(...students: Student[][]) {
  const flatten = students.flat();
  const grouped = Object.groupBy(flatten, (s) => s.name);
  const deduped = Object.entries(grouped).map(([_, el]) => getOrFail(getOrFail(el)[0]));
  return deduped;
}
console.log(
  mergeStudentsArray(
    [
      { email: "student1@mail.com", name: "Student 1" },
      { email: "student2@mail.com", name: "Student 2" },
    ],
    [
      { email: "student1@mail.com", name: "Student 1" },
      { email: "student2@mail.com", name: "Student 2" },
      { email: "student3@mail.com", name: "Student 3" },
    ],
  ),
);

//2. Create a function that can accept input as an array of objects and switch all values into property and property into value
// Example :
// Input : [{ name: ‘David’, age: 20 }]
// Output : [{ David: ‘name’, 20: ‘age’}]

function swapKV(arrayOfRecords: Array<Record<any, unknown>>) {
  return arrayOfRecords.map((el) =>
    Object.fromEntries(Array.from(Object.entries(el)).map(([k, v]) => [v, k])),
  );
}
console.log(swapKV([{ name: "David", age: 20 }]));

//3. Create a function to find a factorial number using recursion
// Example
// Input :  5
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
