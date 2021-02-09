const promise = new Promise((resolve, reject) => {
  let n = Math.floor(Math.random() * 11) // 0 to 10
  if (n > 5) {
    resolve(n)
  } else {
    reject(n)
  }
})

promise
  .then((data) => {
    console.log('Promise resolved for ', data)
    return data
  })
  .then((data2) => {
    console.log('This will always be run after first then', data2)
  })
  .catch((err) => {
    console.log('Promise rejected for ', err)
  })
