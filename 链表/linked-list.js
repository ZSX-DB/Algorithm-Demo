/**
 * 链表
 */

// let Node = element => {
//     //节点的值
//     this.element = element;
//     //指向下一个节点的指针
//     this.next = null;
// };

let Node = function (element) {
    this.element = element;
    this.next = null;
};



// class LinkedList {
//     constructor() {
//         this.length = 0;
//         this.head = null;
//     }

//     append(element) {    // 在链表尾部添加节点

//         let node = new Node(element);
//         if (this.head === null) {
//             //如果当前链表为空，则将head指向node
//             this.head = node;
//         } else {
//             //否则，找到链表尾部的元素，然后添加新元素
//             let current = this.getElementAt(this.length - 1);
//             current.next = node;
//         }
//         this.length++;

//     }

//     insert(position, element) {    // 在链表的指定位置插入节点
//         if (position < 0 || position > this.length) return false;

//         let node = new Node(element);

//         if (position === 0) {
//             node.next = this.head;
//             this.head = node;
//         } else {
//             let previous = this.getElementAt(position - 1);
//             node.next = previous.next;
//             previous.next = node;
//         }

//         this.length++;
//         return true;
//     }

//     removeAt(position) {    // 删除链表中指定位置的元素，并返回这个元素的值
//         if (position < 0 || position >= this.length) return null;

//         let current = this.head;
    
//         if (position === 0) this.head = current.next;
//         else {
//             let previous = this.getElementAt(position - 1);
//             current = previous.next;
//             previous.next = current.next;
//         }
    
//         this.length--;
//         return current.element;
//     } 
//     remove(element) {
//     } // 删除链表中对应的元素
//     indexOf(element) {
//     } // 在链表中查找给定元素的索引
//     getElementAt(position) {    // 返回链表中索引所对应的元素

//         if (position < 0 || position >= this.length) {
//             return null;
//         } else {
//             let current = this.head;
//             for (let i = 0; i < position; i++) {
//                 current = current.next;
//             }
//             return current;
//         }

//     }

//     isEmpty() {
//     } // 判断链表是否为空
//     size() {
//     } // 返回链表的长度
//     getHead() {
//     } // 返回链表的头元素
//     clear() {
//     } // 清空链表
//     toString() {
//     } // 辅助方法，按指定格式输出链表中的所有元素，方便测试验证结果

// }

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append (element) {
        let node = new Node(element);

        // 如果当前链表为空，则将head指向node
        if (this.head === null) this.head = node;
        else {
            // 否则，找到链表尾部的元素，然后添加新元素
            let current = this.getElementAt(this.length - 1);
            current.next = node;
        }

        this.length++;
    }

    insert (position, element) {
        // position不能超出边界值
        if (position < 0 || position > this.length) return false;

        let node = new Node(element);

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let previous = this.getElementAt(position - 1);
            node.next = previous.next;
            previous.next = node;
        }

        this.length++;
        return true;
    }

    removeAt (position) {
        // position不能超出边界值
        if (position < 0 || position >= this.length) return null;

        let current = this.head;

        if (position === 0) this.head = current.next;
        else {
            let previous = this.getElementAt(position - 1);
            current = previous.next;
            previous.next = current.next;
        }

        this.length--;
        return current.element;
    }

    remove (element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf (element) {
        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (current.element === element) return i;
            current = current.next;
        }

        return -1;
    }

    getElementAt (position) {
        if (position < 0 || position >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }

    isEmpty () {
        // return this.head === null;
        return this.length === 0;
    }

    size () {
        return this.length;
    }

    getHead () {
        return this.head;
    }

    clear () {
        this.head = null;
        this.length = 0;
    }

    toString () {
        let current = this.head;
        let s = '';

        while (current) {
            let next = current.next;
            next = next ? next.element : 'null';
            s += `[element: ${current.element}, next: ${next}] `;
            current = current.next;
        }

        return s;
    }
}

let linkedList =new LinkedList();

linkedList.append(10);
linkedList.append(12);
linkedList.append(17);
console.log(linkedList.toString());

linkedList.insert(2,22);
linkedList.insert(1,6);
linkedList.insert(4,34);
console.log(linkedList.toString());

linkedList.removeAt(2);
linkedList.removeAt(4);
console.log(linkedList.toString());