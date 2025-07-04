import { node } from "./node.js";

function LinkedList() {
  let head = null;
  let size = 0;

  function getHead() {
    return head;
  }

  function getSize() {
    return size;
  }

  function append(value) {
    const newNode = node(value);
    if (head === null) {
      head = newNode;
    } else {
      let pointer = head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
    }
    size++;
  }

  function prepend(value) {
    const newNode = node(value, head);
    head = newNode;
    size++;
  }

  function getTail() {
    let pointer = head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  }

  function at(index) {
    if (index < 0) {
      return null;
    }

    let pointer = head;
    let num = 0;

    while (num !== index && pointer.next !== null) {
      pointer = pointer.next;
      num++;
    }
    return pointer;
  }

  function pop() {
    if (head === null) {
      return;
    } else if (head.next === null) {
      head = null;
    } else {
      let pointer = head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = null;
    }
    size--;
  }

  function contains(value) {
    let pointer = head;

    while (pointer !== null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.next;
    }

    return false;
  }

  function find(value) {
    let pointer = head;
    let index = 0;
    while (pointer !== null) {
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.next;
      index++;
    }
    return null;
  }

  function toString() {
    let pointer = head;
    let str = "";
    while (pointer !== null) {
      str += `(${pointer.value}) -> `;
      pointer = pointer.next;
    }

    str += "null";
    return str;
  }

  function insertAt(value, index) {
    const newNode = node(value);
    if (index < 0 || index > size) {
      return;
    } else if (index === 0) {
      newNode.next = head;
      head = newNode;
    } else {
      let pointer = head;
      let prevPtr = null;
      let num = 0;
      while (num !== index) {
        prevPtr = pointer;
        pointer = pointer.next;
        num++;
      }
      prevPtr.next = newNode;
      newNode.next = pointer;
    }
    size++;
  }

  function remove(index) {
    if (index < 0 || index >= size) {
      return;
    } else if (index === 0) {
      head = head.next;
    } else {
      let pointer = head;
      let prevPtr = null;
      let num = 0;
      while (num !== index) {
        prevPtr = pointer;
        pointer = pointer.next;
        num++;
      }
      prevPtr.next = pointer.next;
    }
    size--;
  }

  return {
    getHead,
    getSize,
    append,
    prepend,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    remove,
  };
}

export { LinkedList };
