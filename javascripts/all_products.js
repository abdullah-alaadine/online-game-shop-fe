window.onload = function() {

axios.get("http://localhost:8000/api/products")
    .then((res) => {
        res.data.forEach(elem => {
            create_item(elem.id, elem.url, elem.name, elem.price);
        })
    }).catch(err => {
        console.log(err)
    })

const search_icon = document.getElementById('search_icon')
const search_bar = document.querySelector('.search-bar')
let search_input = document.getElementById('search-input')
search_icon.addEventListener('click', toggle_search_bar)

function toggle_search_bar() {
    search_bar.classList.toggle('hidden')
    search_input.addEventListener('input', search)

    function search() {
        
        console.log(`Searching for: ${search_input.value}`)
    }
}

const item_buttons = document.querySelectorAll('.add-to-cart-btn')
const item_product = document.querySelectorAll('.item_product')

item_buttons.forEach(button => {
    button.addEventListener('click', () => {
        get_id(button)
    })
})

item_product.forEach(prod => {
    prod.addEventListener('click', () => {
        get_id(prod)
    })
})

function get_id(element){
    const parentDiv = element.parentNode;
    const parentId = parentDiv.id;
    console.log(parentId);
    return parentId
}

function create_item(id, url, name, price){
    var items_div = document.getElementsByClassName("items")[0]
    console.log(items_div)
    var item_div = document.createElement("div")
    item_div.setAttribute("class", "item")
    item_div.setAttribute("id", id)

    var img = document.createElement("img")

    img.setAttribute("src", url, name)
    img.setAttribute("class", "item_product")

    var p = document.createElement("p")
    p.textContent = name

    var h3 = document.createElement("h3")
    h3.textContent = price

    var button = document.createElement("button")

    button.textContent = "Add To cart"
    button.setAttribute("class", "add-to-cart-btn")

    item_div.appendChild(img)
    item_div.appendChild(p)
    item_div.appendChild(h3)
    item_div.appendChild(button)

    items_div.appendChild(item_div)
}

}