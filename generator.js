async function generateResume(){

let name = document.getElementById("name").value
let role = document.getElementById("role").value
let experience = document.getElementById("experience").value
let skills = document.getElementById("skills").value

let response = await fetch("/api/ai",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name,
role,
experience,
skills

})

})

let data = await response.json()

document.getElementById("result").innerText = data.result

}

function downloadPDF(){

let element = document.getElementById("result")

html2pdf().from(element).save("resume.pdf")

}