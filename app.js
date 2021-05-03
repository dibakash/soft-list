//define existing in-use dom elements
let shoppingList = {
  container: document.querySelector(".container"),
  cart: document.querySelector(".cart"),
  itemInput: document.querySelector("#itemName-input"),
  addButton: document.querySelector(".add"),
};
// defining varying elements
let slElements = {
  deleteAllButton: document.querySelector(".deleteAll"),
  itemsWrap: document.querySelector(".items-wrapper"),
  items: document.querySelector(".items"),
  itemName: document.querySelector(".itemName"),
  closeButton: document.querySelector(".close-button"),
};

shoppingList.addButton.addEventListener("click", (e) => {
  e.preventDefault();
  changeItems.listItems();
});

// creating elements
let changeItems = {
  count: 0,
  deleteAllButton() {
    if (
      shoppingList.cart.children.length !== 0 &&
      slElements.itemsWrap.children.length === 1
    ) {
      if (this.count === 1) {
        slElements.deleteAllButton.remove();
        console.log("1 block");
      }
    } else if (shoppingList.cart.children.length !== 0 && this.count === 0) {
      console.log("2 block");
      let deleteAllButton = document.createElement("button");
      let content = document.createTextNode("Delete All");
      deleteAllButton.classList.add("deleteAll");
      deleteAllButton.appendChild(content);
      shoppingList.container.appendChild(deleteAllButton);
      slElements.deleteAllButton = deleteAllButton;
      deleteAllButton.addEventListener("click", () => {
        deleteAllButton.remove();
        slElements.itemsWrap.remove();
        slElements.itemsWrap = null;
        this.count = 0;
      });
      this.count = 1;
    } else if (shoppingList.cart.children.length === 0 && this.count === 0) {
      console.log("3rd block");
    } else if (shoppingList.cart.children.length === 0 && this.count === 1) {
      slElements.deleteAllButton.remove();
      this.count = 0;
      console.log("4th block");
    }
  },

  ItemsWrapper() {
    if (!slElements.itemsWrap) {
      let itemsWrap = document.createElement("ul");
      itemsWrap.classList.add("items-wrapper");
      shoppingList.cart.appendChild(itemsWrap);
      slElements.itemsWrap = itemsWrap;
    } else if (slElements.itemsWrap.children.length < 1) {
      console.log(slElements.itemsWrap.children.length);
      slElements.itemsWrap.remove();
      slElements.itemsWrap = null;
    }
  },
  listItems() {
    let items = document.createElement("li");
    items.classList.add("items");
    let itemName = document.createElement("a");
    itemName.setAttribute("href", "#");
    itemName.classList.add("itemName");
    let content = shoppingList.itemInput.value;
    let text = document.createTextNode(content);
    let closeButton = document.createElement("a");
    closeButton.setAttribute("href", "#");
    closeButton.classList.add("close-button");
    closeButton.classList.add("hide");
    itemName.classList.add("full");
    if (content.length > 0) {
      shoppingList.itemInput.value = "";
      items.appendChild(itemName);
      itemName.appendChild(text);
      items.appendChild(closeButton);
      this.ItemsWrapper();
      slElements.itemsWrap.append(items);
    }
    itemName.addEventListener("click", () => {
      itemName.classList.toggle("full");
      closeButton.classList.toggle("hide");
    });
    closeButton.addEventListener("click", () => {
      items.remove();
      this.ItemsWrapper();
      this.deleteAllButton();
    });
  },
};
