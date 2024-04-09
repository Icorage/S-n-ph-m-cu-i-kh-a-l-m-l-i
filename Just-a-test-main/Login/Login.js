let email = "bachdominh@gmail.com"
let pwd = "Bach2007!!"


let inputEmail = document.getElementById("email")
console.log(inputEmail.value)

let inputPassword = document.getElementById("password")
console.log(inputPassword.value)


$('#login').click(
    function () {
        if (inputEmail.value == email) {
            window.location.href = "../Home/web.html";
        } else {
            alert("Sai thông tin")
        }
    }
)
