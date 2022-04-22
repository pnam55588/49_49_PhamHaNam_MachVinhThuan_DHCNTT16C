$(document).ready(function(){
    $("#nfo").hide()

    function checkName(){
        var re = /^[A-Z][a-z]{0,}(\s[A-Z][a-z]{0,}){0,}$/
        if($("#name").val()== ""){
            $("#tbName").html("*bắt buộc nhập")
            return false
        }
        if(!re.test($("#name").val())){
            $("#tbName").html("*Bắt đầu bằng chữ hoa và không dùng số")
            return false
        }
        $("#tbName").html("*")
        return true
    }
    $("#name").blur(checkName)

    function checkEmail(){
        var re = /^\S+@\S+.com$/
        if($("#email").val()== ""){
            $("#tbEmail").html("*bắt buộc nhập")
            return false
        }
        if(!re.test($("#email").val())){
            $("#tbEmail").html("*phải đúng định dạng ***@***.com")
            return false
        }
        $("#tbEmail").html("*")
        return true
    }
    $("#email").blur(checkEmail)

    function checkPassword(){
        var re = /^[A-Za-z0-9]{6,}$/
        if($("#password").val()== ""){
            $("#tbPassword").html("*bắt buộc nhập")
            return false
        }
        if(!re.test($("#password").val())){
            $("#tbPassword").html("*ít nhất 6 kí tự, không dùng kí tự đặt biệt")
            return false
        }
        $("#tbPassword").html("*")
        return true
    }
    $("#password").blur(checkPassword)
    
    function checkRePassword(){
        pass = $("#password").val()
        rePass = $("#rePassword").val()
        if(rePass != pass){
            $("#tbRePassword").html("*phải giống password")
            return false
        }
        $("#tbPassword").html("*")
        return true
    }
    $("#rePassword").blur(checkRePassword)

    function checkPhone(){
        re = /^0\d{9}$/
        if($("#phone").val()== ""){
            $("#tbPhone").html("*bắt buộc nhập")
            return false
        }
        if(!re.test($("#phone").val())){
            $("#tbPhone").html("*phải vừa đủ 10 số, bắt đầu bằng số 0")
            return false
        }
        $("#tbPhone").html("*")
        return true
    }
    $("#phone").blur(checkPhone)

    $("#register").click(function(){
        if(!checkName() || !checkEmail() || !checkPassword() || !checkRePassword() || !checkPhone()){
            $("#tbRegister").html("*vui lòng nhập đúng thông tin")
            return false
        }
        let name = $("#name").val()
        let email = $("#email").val()
        let password = $("#password").val()
        let phone = $("#phone").val()

        const account = {
            name ,
            email ,
            password ,
            phone 
        }
        $("table tbody").append(`
            <tr>
                <th>${name}</th>
                <th>${email}</th>
                <th>${password}</th>
                <th>${phone}</th>
            </tr>
        `)

        let accounts = JSON.parse(localStorage.getItem("accounts"))
        if(accounts){
            accounts.push(account)
            localStorage.setItem("accounts", JSON.stringify(accounts))
        }else{
            localStorage.setItem("accounts", JSON.stringify([account]))
        }
        $("#form-register").hide()
        $("#info").removeClass("d-none")
    })

})