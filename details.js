async function fetchProductDetails() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("_id");

    if (!productId) {
      console.error("Product ID not found in the URL");
      return;
    }
    const response = await fetch(`/api/products/${productId}`);
    const product = await response.json();
    renderProductDetails(product);
  } catch (error) {
    console.error("Error fetching product details", error);
  }
}

function renderProductDetails(product) {
  const productDetails = document.getElementById("productDetails");

  const detailsHTML = `<p><strong>Product Name: </strong> ${product.name}</p>
  <p><strong>Product Price:</strong> ${product.price} </p>`;
  productDetails.innerHTML = detailsHTML;
}

fetchProductDetails();
