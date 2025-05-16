class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

let products = [
  new Product("TV", 350, '60" Smart televizor'),
  new Product("Toster", 30, "smart toster high class"),
];

function createProductRows() {
  let table = document.querySelector("#products-body");
  table.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let name = document.createElement("td");
    let price = document.createElement("td");

    id.textContent = i + 1;
    name.textContent = products[i].name;
    price.textContent = products[i].price;

    tr.addEventListener("click", function () {
      productDetails(products[i]);
    });

    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(price);
    table.appendChild(tr);
  }
}

function productDetails(product) {
  let detailsP = document.createElement("p");
  detailsP.innerHTML =
    "Naziv: " +
    product.name +
    "<br>" +
    "Cena: " +
    product.price +
    "<br>" +
    "Opis: " +
    product.description;

  let detailsDiv = document.querySelector(".product-details");
  if (detailsDiv.firstChild) {
    detailsDiv.firstChild.remove();
  }

  detailsDiv.appendChild(detailsP);
}

function handleForm() {
  let button = document.querySelector("button");
  button.addEventListener("click", function () {
    const form = document.querySelector("#product-add");
    const formData = new FormData(form);

    const inputName = formData.get("productName");
    const inputPrice = formData.get("productPrice");
    const inputDesc = formData.get("productDescription");

    if (inputName && inputPrice && inputDesc) {
      const newProduct = new Product(inputName, inputPrice, inputDesc);
      products.push(newProduct);

      createProductRows();
    } else {
      return alert("Polja u formi ne mogu biti prazna.");
    }
  });
}

document.addEventListener(
  "DOMContentLoaded",
  (createProductRows(), handleForm())
);
