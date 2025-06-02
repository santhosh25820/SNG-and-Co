const products = [
  {
    id: 1,
    name: "Centering Sheets",
    category: "Centering Sheets",
    price: 1200,
    image: "images/Centering Sheets.jpg"
  },
  {
    id: 2,
    name: "Savukku Tree",
    category: "Savukku Tree",
    price: 300,
    image: "images/Savukku Tree.jpg"
  },
  {
    id: 3,
    name: "Colunm Box",
    category: "Colunm Box",
    price: 150,
    image: "images/Colunm Box.jpeg"
  },
  {
    id: 4,
    name: "Colunm Shoe",
    category: "Colunm Shoe",
    price: 950,
    image: "images/Colunm Shoe.jpeg"
  },
  {
    id: 5,
    name: "Cutting Machine",
    category: "Cutting Machine",
    price: 100,
    image: "images/Cutting Machine.jpeg"
  }
];

function displayProducts(filtered = products) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  filtered.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>₹${p.price} / day</p>
        <button onclick="alert('Rented: ${p.name}')">Rent Now</button>
      </div>
    `;
  });
}

function filterProducts() {
  const selected = document.getElementById("categoryFilter").value;
  const filtered = selected === "all" ? products : products.filter(p => p.category === selected);
  displayProducts(filtered);
}

window.onload = () => {
  displayProducts();
};
