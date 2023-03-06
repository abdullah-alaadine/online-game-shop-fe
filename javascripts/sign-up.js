window.onload = function() {
    submit = document.getElementById('register_btn')

    submit.addEventListener('click', check)

    function check(){
        const name = document.getElementById('f_name').value
        const email = document.getElementById('e_mail').value
        const password = document.getElementById('pass_code').value
        const password_confirmation = document.getElementById('conf_pass_code').value

        const data = {
            email,
            password,
            name,
            password_confirmation
        }
        console.log(password, password_confirmation)
        console.log(password === password_confirmation)


        let url = "http://localhost:8000/api/signup"
        axios.post(url, data).then( function(res){
            location.replace("./index.html");
            localStorage.setItem("user_id", res.data.user.id);
        }).catch(err => {
            alert(err.response.data.message);
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