class linkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead(data) {
        const newNode = new linkedListNode(data, this.head)
        this.head = newNode
        this.length++
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    insertAtIndex(index, value) {
        if (index === 0) return this.insertAtHead(value)

        const prev = this.getByIndex(index - 1)
        if (prev == null) return null

        prev.next = new linkedListNode(value, prev.next)
        this.length++
    }

    print() {
        let output = ''
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }

}

class linkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

linkedList.fromValues = function (...values) {
    const LL = new linkedList()
    for (let i = values.length - 1; i >= 0; i--) {
        LL.insertAtHead(values[i])
    }
    return LL
}

module.exports = linkedList