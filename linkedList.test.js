const linkedList = require('./linkedList')

describe('#insertAtHead', () => {
    test('it adds the element to the beginning of the list', () => {
        const LL = new linkedList()
        LL.insertAtHead(10)
        const oldHead = LL.head
        LL.insertAtHead(20)

        expect(LL.head.value).toBe(20)
        expect(LL.head.next).toBe(oldHead)
        expect(LL.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index < 0', () => {
        test('it returns null', () => {
            const LL = new linkedList.fromValues(10, 20)

            expect(LL.getByIndex(-1)).toBeNull()
        })
    })

    describe('with index > list length', () => {
        test('it returns null', () => {
            const LL = new linkedList.fromValues(10, 20)

            expect(LL.getByIndex(5)).toBeNull()
        })
    })

    describe('with index 0', () => {
        test('it returns the head', () => {
            const LL = new linkedList.fromValues(10, 20)

            expect(LL.getByIndex(0).value).toBe(10)
        })
    })

    describe('with index in the middle', () => {
        test('it returns the element at that index', () => {
            const LL = new linkedList.fromValues(10, 20, 30, 40)

            expect(LL.getByIndex(2).value).toBe(30)
        })
    })
})

describe('#insertAtIndex', () => {
    describe('with index < 0', () => {
        test('it does not insert anything', () => {
            const LL = linkedList.fromValues(10, 20)
            LL.insertAtIndex(-1, 30)

            expect(LL.length).toBe(2)
        })
    })

    describe('with index > list length', () => {
        test('it does not insert anything', () => {
            const LL = linkedList.fromValues(10, 20)
            LL.insertAtIndex(5, 30)

            expect(LL.length).toBe(2)
        })
    })

    describe('with index = 0', () => {
        test('it inserts at the head', () => {
            const LL = linkedList.fromValues(10, 20)
            LL.insertAtIndex(0, 30)

            expect(LL.head.value).toBe(30)
            expect(LL.head.next.value).toBe(10)
            expect(LL.length).toBe(3)

        })
    })

    describe('with index in the middle', () => {
        test('insert at the given index', () => {
            const LL = linkedList.fromValues(10, 20, 30, 40)
            LL.insertAtIndex(2, 50)
            const node = LL.getByIndex(2)
            expect(node.value).toBe(50)
            expect(node.next.value).toBe(30)
            expect(LL.length).toBe(5)

        })
    })
})

describe('#removeHead', () => {
    test('removes the head', () => {
        const LL = linkedList.fromValues(10, 20, 30)
        LL.removeHead()

        expect(LL.head.value).toBe(20)
        expect(LL.length).toBe(2)
    })
})