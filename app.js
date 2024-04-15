// In app.js
import { LinkedList } from "./LinkedList.js";

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.print(); // Expected Output: 40 -> 30 -> 20 -> 10 -> null
ll.removeAtIndex(2);
ll.print(); // Expected New Output after removal: 40 -> 30 -> 10 -> null
