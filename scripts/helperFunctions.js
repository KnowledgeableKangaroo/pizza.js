// Define/Redfine methods of predefined objects
console.log = function(statement) {
	const outputEl = document.querySelector("#program");
	outputEl.innerHTML += `${statement} <br>`;
};

Element.prototype.siblings = function() {
	let result = [],
    node = this.parentNode.firstChild;
	while (node) { // While node's parent's children is not the same node
	    result.push(node);
   		node = node.nextSibling;
	}
	result.splice(result.indexOf(this), 1);
	return result;	
};

Node.prototype.childEls = function() {
	const list_items = this.childNodes;
	let li_items = [];
	
	for (let i = 0; i < list_items.length; i++) {

		// Add all the <li> nodes to an array, skip the text nodes
		if (list_items[i].nodeType != 3) {
			li_items.push(list_items[i]);
		}
	}

	return li_items;	
};

const removeUnnecessary = function() {
	
};
