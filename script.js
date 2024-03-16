//your JS code here. If required.
function LevelOfElement() {
  let node = document.getElementById('level'); // Fix variable name 'ChildNode' to 'node'
  let count = -1;
  while (node != null) { // Fix variable name 'ChildNode' to 'node' and add condition for loop termination
    count += 1; // Increment count inside the loop
    //console.log(count, node);
    node = node.parentNode; // Update 'ChildNode.parentNode' to 'node.parentNode' and assign the result to 'node'
  }
  window.alert(`The level of the element is: ${count}`);
}
console.log(LevelOfElement());
