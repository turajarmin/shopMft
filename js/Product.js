const Product = async () => {
  try {
    let data = await fetch("https://turajarmin.github.io/jsonMft/db.json");
    let res = await data.json();
    let product = res.products.map((elem) => {
      return `<div class="product">
            <h1 class="title">${elem.title.substr(0,40)}</h1>
            <p class="description">
                ${elem.description.substr(0,100)}
            </p>
            <img src=${elem.image} class="img-fluid d-block mx-auto mb-5" alt="">
            <div class="d-flex justify-content-between mb-3">
              <button class="btn btn-success text-capitalize">price:${elem.price}</button>
              <button class="btn btn-primary text-capitalize">category:${elem.category}</button>
            </div>
            <div class="d-flex justify-content-between rate">
              <span>rate:${elem.rating.rate}</span>
              <span>count:${elem.rating.count}</span>
            </div>
          </div>`;
    });
    document.querySelector(".products").innerHTML=product.join("")
  } catch (error) {
    console.log(error.message);
  }
};
export default Product;
