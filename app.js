// refactor code
document.addEventListener("DOMContentLoaded", (e) => {
    let container = document.querySelector(".container");

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
      let deleteAll = document.querySelector("#deleteAll");

      if (e.target === addButton) {
        e.preventDefault();
        let entry = document.querySelector("#entry");
        if (!entry.value) return;
        let newItem = new listItem(entry.value);
        if (!cart) {
          cart = document.createElement("ul");
          cart.classList.add("cart");
          container.append(cart);
        }
        newItem.itemName.classList.add("full");
        cart.append(newItem.item);
        entry.value = "";
        if (cart.classList.contains("empty")) {
          cart.classList.remove("empty");
        }
      }

      let closeButtons = document.querySelectorAll(".closeButton");

      if (closeButtons) {
        for (button of closeButtons) {
          if (e.target === button) {
            e.preventDefault();
            let item = e.target.closest("li");
            item.remove();
            if (!deleteAll) {
              deleteAll = document.createElement("a");
              deleteAll.innerHTML = "deleteAll";
              deleteAll.setAttribute("id", "deleteAll");
              container.append(deleteAll);
            }
            let itemCount = cart.childElementCount;
            if (itemCount === 0) {
              cart.classList.add("empty");
            }
            if (itemCount >= 2) {
              deleteAll.hidden = false;
            } else {
              deleteAll.hidden = true;
            }
          }
        }
      }

      if (e.target === deleteAll) {
        e.preventDefault();
        deleteAll.remove();
        cart.remove();
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
