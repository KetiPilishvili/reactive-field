const addButton = document.getElementById("add_item");
const input = document.getElementById("item_input");
const itemsList = document.getElementById("list");

addButton.addEventListener("click", handleItemsAppend);

function handleItemsAppend() {
	let title = input.value
	createItem(title)
}

function createItem(title) {
	var li = document.createElement("li");
	li.textContent = input.value;
	li.classList.add("list-group-item");

	createDeleteButtonFor(li);

	itemsList.appendChild(li);

}

function createDeleteButtonFor(liElement) {
    var remove = document.createElement("Remove");
    remove.innerHTML = "delete";
    liElement.appendChild(remove);
    remove.classList.add("btn-danger");
    remove.addEventListener("click", handleRemoveItem);
}

function handleRemoveItem() {
	itemsList.removeChild(this.parentNode);
}