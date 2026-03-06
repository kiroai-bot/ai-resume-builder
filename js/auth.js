function login(){

let email=document.getElementById("email").value

if(email===""){
alert("Enter email")
return
}

localStorage.setItem("user",email)

window.location="dashboard.html"

}
