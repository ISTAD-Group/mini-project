// make ajax call to load product data
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    // hide progress bar
    document.getElementById("progress").style.display = "none";

    // loop through product data and display each item
    let products = "";
    data.forEach((item) => {
      products += `
                  <div class="col">
                  <div class="card p-item overflow-hidden">
                  <div class="p-discount bg-primary text-white p-1">
                     <small>20%<br> OFF</small>
                  </div>
                  <a href="product-detail.html" class="text-decoration-none">
                     <div class="product-img p-2">
                        <img src="${
                          item.image
                        }" class="w-100 h-100" alt="product 1">
                     </div>
                     <div class="card-body p-2">
                        <h6 class="card-title text-decoration-underline">${item.title.slice(
                          0,
                          15
                        )}</h6>
                        <p class="card-text">
                              <span class="text-primary fw-bold">$${(
                                item.price -
                                item.price * 0.2
                              ).toFixed(2)}</span> | <del>$${item.price.toFixed(
        2
      )}</del>
                        </p>
                        <hr>
                        <h6 class="fw-bold text-success">Save - $${(
                          item.price * 0.2
                        ).toFixed(2)}</h6>
                     </div>
                  </a>
            </div>
            </div>
           `;
    });
    document.getElementById("product-list").innerHTML = products;
  })
  .catch((error) => {
    // hide progress bar
    document.getElementById("progress").style.display = "none";
    // show error message
    alert("An error occurred while loading the product data.");
  });
