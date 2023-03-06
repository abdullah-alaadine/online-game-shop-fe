window.onload = function() {
    submit = document.getElementById('register_btn')

    submit.addEventListener('click', check)

    function check(){
        email = document.getElementById('e_mail').value
        password = document.getElementById('password').value
        console.log(email, password)
    }
}