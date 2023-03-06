window.onload = function(){
    const addToCartBtn = document.getElementById("addToCartBtn");
    addToCartBtn.addEventListener("click", () => {
        axios.post("http://localhost:8000/api/orders", {
            user_id: JSON.parse(localStorage.getItem("user_id")),
            product_id: id
        }).ther();
    })
    const info = localStorage.getItem("product");
    const product = JSON.parse(info);
    updateProduct(product.url, product.name, product.price, product.description);
    localStorage.removeItem("product");
    function updateProduct(src, name, pr, description) {
        let img = document.querySelector(".product_container img")
        let title = document.querySelector(".product_container .title h1")
        var price = document.querySelector(".product_container .price h2")
        var desc = document.querySelector(".product_container .desc")
        img.src = src
        title.textContent = name
        price.textContent = pr
        desc.textContent = description
    }
}