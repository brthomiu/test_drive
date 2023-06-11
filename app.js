const linkedList = require('./linkedList')

const LL = new linkedList.fromValues(10, 20, 30, 40)

LL.print()

console.log(`Head: ${LL.getByIndex(0).value}`)