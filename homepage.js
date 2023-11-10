(window.onload = () =>
  fetch("https://striveschool-api.herokuapp.com/api/product/")),
  {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTllMDI1NGU4ODAwMTgzZjE4NzIiLCJpYXQiOjE2OTk2MDQ5NjAsImV4cCI6MTcwMDgxNDU2MH0.W4Gy5PsOw5rxCyvJ8c-ziCPJP6EOIF3UjrPLembKdEA",
    }
      .then((response) => response.json())
      .then((product) => {
        product.forEach((data) => {
          if (data.img) {
            const row = document.getElementById("product");
            const col = document.createElement("div");
            col.className = "col-12";

            const img = document.createElement("img");
            img.className = "w-100";
            img.src = data.imageUrl;

            const title = document.createElement("h2");
            title.className = "mt-5";
            title.innerText = data.className;

            const price = document.createElement("h5");
            price.className = "mt-5";
            price.innerText = data.price;

            const brand = document.createElement("h3");
            brand.className = "mt-5";
            brand.innerText = data.brand;

            const description = document.createElement("h4");
            description.className = "mt-5";
            description.innerText = data.description;

            col.appendChild(img);
            col.appendChild(title);
            col.appendChild(price);
            col.appendChild(brand);
            col.appendChild(description);
            row.appendChild(col);
          }
        });
      }),
  };

//   {
//     method: "DELETE",
//     headers: {
//       Authorization: bearerToken(
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTllMDI1NGU4ODAwMTgzZjE4NzIiLCJpYXQiOjE2OTk2MDQ5NjAsImV4cCI6MTcwMDgxNDU2MH0.W4Gy5PsOw5rxCyvJ8c-ziCPJP6EOIF3UjrPLembKdEA"
//       ),
//     },
//   }

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       "https://striveschool-api.herokuapp.com/api/products"
//     );
//     const products = await response.json();
//     renderProducts(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }

// function renderProducts(products) {
//   const productList = document.getElementById("productList");
//   productList.innerHTML = "";
//   products.forEach((product) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//     <td> ${product.name}</td>
//     <td>${product.price}</td>
//     <td>
//     <button class="btn btn-primary" onclick="modifyProduct(${product._id})">Modify</button>
//     <td>
//     `;
//     productList.appendChild(row);
//   });
// }

// function modifyProduct(productId) {
//   alert(`Modify Product eith ID ${productId}`);
// }

// fetchProducts();
