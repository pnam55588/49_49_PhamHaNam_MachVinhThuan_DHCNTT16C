let email = ""
let password = ""

function setEmail(event){
    email = event.target.value
}

function setPassword(event){
    password = event.target.value
}


function validateAccount(){
    if(JSON.parse(localStorage.getItem("accounts")).filter(item => item.email == email && item.password == password).length == 0){
        id = document.getElementById("tbLogin")
        id.innerHTML = "thông tin đăng nhập sai, hãy đăng kí nếu chưa có tài khoản"
        return false
    }else{
        localStorage.setItem('account', JSON.stringify({email, password}))
        renderLogin()
        $('#modal-login').modal("hide")
        return true
    }
}

function renderLogin(){
    let dropdown = ""
    let id = ""
    if(localStorage.getItem("account")){
        id = JSON.parse(localStorage.getItem("account")).email
        dropdown =`<a class="dropdown-item" href="#" onclick="logout()">Đăng xuất</a>`
    }else{
        id = "Account"
        dropdown = `
            <a class="dropdown-item" href="#" id="open-login">Log in</a>
            <a class="dropdown-item" href="./pages/Register/register.html">Sign up</a>
        `
        
    }
    document.getElementById("dropdownId").innerHTML = id
    document.getElementById("dropdown").innerHTML = dropdown
}

function logout() {
    localStorage.removeItem("account")
    window.location.reload()
    
}

$(document).ready(function(){
    renderLogin()
    $("#open-login").click(function(){
        $("#modal-login").modal()
    })
    $("#close-login").click(function(){
        $("#modal-login").modal('hide')
    })

    $("#open-search").click(function(){
        $("#modal-search").modal()
    })
    $("#close-search").click(function(){
        $("#modal-search").modal('hide')
    })

    
})
