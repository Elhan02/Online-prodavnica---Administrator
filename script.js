class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

let products = [
                    new Product("TV", 350, '60" Smart televizor'),
                    new Product("Toster", 30, 'smart toster high class')
               ];

function createProductRows(){
    let table = document.querySelector("#products-body")

    for (i = 0; i < products.length; i++){
        let tr = document.createElement("tr")
        let id = document.createElement("td")
        let name = document.createElement("td")
        let price = document.createElement("td")

        id.textContent = i+1
        name.textContent = products[i].name
        price.textContent = products[i].price

        tr.appendChild(id)
        tr.appendChild(name)
        tr.appendChild(price)

        table.appendChild(tr)
    }
}

createProductRows()