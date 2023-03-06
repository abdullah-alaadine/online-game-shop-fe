window.onload = function() {
    submit = document.getElementById('register_btn')

    submit.addEventListener('click', check)

    function check(){
        full_name = document.getElementById('f_name').value
        email = document.getElementById('e_mail').value
        password = document.getElementById('pass_code').value
        conf_password = document.getElementById('conf_pass_code').value

        console.log(email, password)

        data = new FormData()
        data.append('email', email)
        data.append('password', password)
        data.append('full_name', full_name)
        data.append('conf_password', conf_password)

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