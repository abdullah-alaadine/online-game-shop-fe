window.onload = function() {

    axios.get("http://localhost:8000/api/products")
    .then((res) => {
        const item_buttons = document.querySelectorAll('.add-to-cart-btn');
        const item_product = document.querySelectorAll('.item_product')
        item_product.forEach(prod => {
            prod.addEventListener('click', () => {
                get_id(prod)
                axios.get(`http://localhost:8000/api/products/${get_id(prod)}`)
                    .then((res)=> {
                        localStorage.setItem("product", JSON.stringify(res.data))
                        console.log(res.data)
                        location.replace("./product.html");
                    })
                    .catch(err=> console.log(err));
            })
        })
        item_buttons.forEach(button => {
            button.addEventListener('click', () => {
                get_id(button);
            })
        })

    }).catch(err => {
        console.log(err)
    })
const images = ['images/top-bg/ps-background.webp', 'images/top-bg/playstation-games-bg.png', 'images/top-bg/gow-bg.jpg']
const slide = document.querySelector('.slide img')
const prev_btn = document.querySelector('.prev')
const next_btn = document.querySelector('.next')
let current_image_index = 0
let timer

function show_image(index) {
  slide.src = images[index]
}

function prev_image() {
    clearInterval(timer)
    current_image_index--
    if (current_image_index < 0) {
        current_image_index = images.length - 1
    }
    show_image(current_image_index)
    timer = setInterval(next_image, 3000)
}

function next_image() {
    clearInterval(timer)
    current_image_index++
    if (current_image_index >= images.length) {
        current_image_index = 0
    }
    show_image(current_image_index)
    timer = setInterval(next_image, 3000)
}

prev_btn.addEventListener('click', prev_image)
next_btn.addEventListener('click', next_image)
timer = setInterval(next_image, 3000)

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