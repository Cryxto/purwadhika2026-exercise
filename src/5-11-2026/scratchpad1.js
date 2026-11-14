
for (let i = 0; i <= 5; i++) {
  let row = []
  for (let j = 0; j < i; j++) {
    row.push(`${j+1}`)
  }
  console.log(row.join(' '))
}
