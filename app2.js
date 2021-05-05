document.addEventListener("DOMContentLoaded", (e) => {
  let container = document.querySelector(".container");

  function entryValue(elementValue) {
    if (!elementValue) return;
    return elementValue;
  }

  class listItem {
    constructor(val) {
      if (!val) {
        this.txt = "";
      } else {
        this.txt = document.createTextNode(val);
      }
      this.item = document.createElement("li");
      this.item.classList.add("listItems");
      this.itemName = document.createElement("a");
      this.itemName.classList.add("itemName");
      this.itemName.setAttribute("href", "");
      this.itemName.append(this.txt);
      this.closeButton = document.createElement("a");
      this.closeButton.classList.add("closeButton");
      this.closeButton.setAttribute("href", "");
      this.item.append(this.itemName);
      this.item.append(this.closeButton);
      return this;
    }
  }

  container.addEventListener("click", (e) => {
    let addButton = document.querySelector(".add");
    let cart = document.querySelector(".cart");

    if (e.target === addButton) {
      e.preventDefault();
      let entry = entryValue(document.querySelector("#entry"));
      if (!entry.value) return;
      let newItem = new listItem(entry.value);
      cart.append(newItem.item);
      entry.value = "";
    }

    let closeButtons = document.querySelectorAll(".closeButton");

    if (closeButtons) {
      for (button of closeButtons) {
        if (e.target === button) {
          e.preventDefault();
          let close = e.target;
          let item = e.target.closest("li");
          if (!item) return;
          item.remove();
          //   work on delete button
        }
      }
    }

    let itemNames = document.querySelectorAll(".itemName");

    if (itemNames) {
      for (item of itemNames) {
        if (e.target === item) {
          e.preventDefault();
          item.classList.toggle("full");
        }
      }
    }
  });
});
