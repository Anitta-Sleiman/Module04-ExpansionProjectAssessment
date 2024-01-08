// //Exercise 1
// function bubbleSort(array) {
//   const n = array.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       //j < last index - i
//       if (array[j] > array[j + 1]) {
//         //if the number at index j is greater than that of index j + 1; we swap
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// // bubbleSort([4, 1, 3, 9, 7]);
// console.log(bubbleSort([4, 1, 3, 9, 7]));

// //Exercise 2


// //Exercise 3
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   add(data) {
//     // if there is no head
//     const node = new Node(data);
//     if (this.head == null) {
//       this.size++;
//       return (this.head = node);
//       // If there is a head
//     } else {
//       let current = this.head;
//       while (current.next !== null) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.size++;
//   }

//   remove(data) {
//     // if there is a node; return null if empty
//     if (!this.head) {
//       return;
//     }

//     // if the data to remove is equal to the first node; remove the first node
//     if (this.head.data === data) {
//       this.head = this.head.next;
//       this.size--;
//       return;
//     }

//     // search list to find the node
//     let current = this.head;
//     // While loop checks if the current has a next node
//     // and checks if the data of the next node is equal to the data we want
//     while (current.next !== null && current.next.data !== data) {
//       current = current.next;
//       // Remove the node if found
//     }

//     if (current.next) {
//       current.next = current.next.next;
//       this.size--;
//     }
//   }

//   print() {
//     //start with the head
//     let current = this.head;
//     //while loop if there is node then it will print the node and move to the next one
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// let ll = new LinkedList();
// ll.add(3);
// ll.add(4);
// ll.add(5);
// ll.print();
// console.log("\n after");
// ll.remove(6);
// ll.print();
