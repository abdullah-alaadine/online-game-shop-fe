window.onload = function(){
    
    function updateProduct(src, name, pr, description) {
        var img = document.querySelector(".product_container img")
        var title = document.querySelector(".product_container .title h1")
        var price = document.querySelector(".product_container .price h2")
        var desc = document.querySelector(".product_container .desc")
      
        img.src = src
        title.textContent = name
        price.textContent = pr
        desc.textContent = description
    }
    updateProduct("images/ps4-games/fifa.webp", "fifa","500","hello I am fifa")
}