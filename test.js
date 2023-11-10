const url = "https://striveschool-api.herokuapp.com/api/product";
let response = await fetch(url, {
  method: "POST",
  body: JSON.stringify({}),
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTllMDI1NGU4ODAwMTgzZjE4NzIiLCJpYXQiOjE2OTk2MDQ5NjAsImV4cCI6MTcwMDgxNDU2MH0.W4Gy5PsOw5rxCyvJ8c-ziCPJP6EOIF3UjrPLembKdEA",
  },
});

//let editingMode = false;

// let productId;
// const bearerToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTllMDI1NGU4ODAwMTgzZjE4NzIiLCJpYXQiOjE2OTk2MDQ5NjAsImV4cCI6MTcwMDgxNDU2MH0.W4Gy5PsOw5rxCyvJ8c-ziCPJP6EOIF3UjrPLembKdEA";

// function submitForm() {
//   const productName = document.getElementById("productName").value;
//   const productPrice = document.getElementById("productPrice").value;
//   const optionalParameter = document.getElementById("optionalParameter").value;

//   if (!productName || !productPrice) {
//     alert("Please fill in all required fields");
//     return;
//   }
//   const payload = {
//     name: productName,
//     price: productPrice,
//     optionalParameter: optionalParameter || null,
//   };

//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: bearerToken(
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTllMDI1NGU4ODAwMTgzZjE4NzIiLCJpYXQiOjE2OTk2MDQ5NjAsImV4cCI6MTcwMDgxNDU2MH0.W4Gy5PsOw5rxCyvJ8c-ziCPJP6EOIF3UjrPLembKdEA"
//     ),
//   };

//   if (editingMode) {
//     fetch("https://striveschool-api.herokuapp.com/api/products", {
//       method: "PUT",
//       headers: headers,
//       body: JSON.stringify(payload),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Product updated:", data);
//         resetForm();
//       })
//       .catch((error) => console.error("Error updating product:", error));
//   } else {
//     fetch("/product", {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(payload),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Product created:", data);
//         resetForm();
//       })
//       .catch((error) => console.error("Error creating product:", error));
//   }
// }

// function editProduct() {
//   fetch("https://striveschool-api.herokuapp.com/api/products", {
//     headers: {
//       Authorization: bearerToken(
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTllMDI1NGU4ODAwMTgzZjE4NzIiLCJpYXQiOjE2OTk2MDQ5NjAsImV4cCI6MTcwMDgxNDU2MH0.W4Gy5PsOw5rxCyvJ8c-ziCPJP6EOIF3UjrPLembKdEA"
//       ),
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       document.getElementById("productName").value = data.name;
//       document.getElementById("productPrice").value = data.price;
//       document.getElementById("optionalParameter").value =
//         data.optionalParameter || "";
//       editingMode = true;
//       showButtons();
//     })
//     .catch((error) => console.error("Error fetching product data:", error));
// }

// function deleteProduct() {
//   fetch("https://striveschool-api.herokuapp.com/api/products", {
//     method: "DELETE",
//     headers: {
//       Authorization: bearerToken(
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTllMDI1NGU4ODAwMTgzZjE4NzIiLCJpYXQiOjE2OTk2MDQ5NjAsImV4cCI6MTcwMDgxNDU2MH0.W4Gy5PsOw5rxCyvJ8c-ziCPJP6EOIF3UjrPLembKdEA"
//       ),
//     },
//   })
//     .then(() => {
//       console.log("Product deleted");
//       resetForm();
//     })
//     .catch((error) => console.error("Error deleting product:", error));
// }

// function resetForm() {
//   document.getElementById("productForm").reset();
//   editingMode = false;
//   productId = undefined;
//   hideButtons();
// }

// function showButtons() {
//   document.getElementById("editBtn").classList.remove("hidden");
//   document.getElementById("deleteBtn").classList.remove("hidden");
// }
// function hideButtons() {
//   document.getElementById("editBtn").classList.add("hidden");
//   document.getElementById("deleteBtn").classList.add("hidden");
// }
