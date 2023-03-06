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
}