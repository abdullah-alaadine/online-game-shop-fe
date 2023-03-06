window.onload = function() {
    submit = document.getElementById('register_btn')

    submit.addEventListener('click', check)

    function check(){
        email = document.getElementById('e_mail').value
        password = document.getElementById('password').value
        console.log(email, password)

        data = new FormData()
        data.append('email', email)
        data.append('password', password)

        let url = ""
        axios.post(url, data).then( function(res){
            
        })
    }

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
}