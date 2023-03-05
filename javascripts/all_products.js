window.onload = function() {
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
}