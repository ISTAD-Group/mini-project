// show progress bar
// document.getElementById("progress").style.display = "block";

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
               <tr>
               <td><strong>${item.id}</strong></td>
               <td>
               <img src="${
                 item.image
               }" alt="Avatar" style="width:50px; height:50px;">
               </td>
               <td>${item.title.slice(0, 20)}</td>
               <td>$${item.price}</td>
               <td>
                  <div class="dropdown">
                     <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                     <i class="bx bx-dots-vertical-rounded"></i>
                     </button>
                     <div class="dropdown-menu">
                     <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                     <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a>
                     </div>
                  </div>
               </td>
               </tr>
           `;
    });
    document.getElementById("tbody").innerHTML = products;
  })
  .catch((error) => {
    // hide progress bar
    document.getElementById("progress").style.display = "none";
    // show error message
    alert("An error occurred while loading the product data.");
  });

{
  /* <div class="col">
          <include
            src="./components/card-product.html"
            locals='{
                      "title": "Samsung Galaxy S20 5G (8GB | 128GB)",
                      "percen": "56%",
                      "price": "$343.00",
                      "pDiscount": "$400.00",
                      "saving": "Save - $57.00",
                      "image": "./assets/products/p1.png",
                      "link": "product-detail.html"
                  }'
          ></include>
        </div> */
}
