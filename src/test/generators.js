function* gen() {
  console.log(1)
  console.log(2)
  console.log(3)
  yield 'HI'
  console.log(4)
  console.log(5)
  yield
  console.log(6)
  console.log(7)
  console.log(8)
}

let obj = gen()
let r1 = obj.next()
console.log('----', r1)
let r2 = obj.next()
console.log('----', r2)
let r3 = obj.next()
console.log('----', r3)
