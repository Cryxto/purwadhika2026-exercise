


class SafeBigInt {
  constructor(value) {
    this.value = BigInt(value);
  }

  toJSON() {
    return this.value.toString();
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return this.value.toString();
  }

  static make (input){
    return new SafeBigInt(input)
  }

  static isValid(input ){
    return typeof input === 'bigint'
  }

  // isValid(){
  //   return 
  // }
}

console.log(SafeBigInt.make(10129912))