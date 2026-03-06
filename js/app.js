function aiWrite(){

let role=document.getElementById("role").value

if(role===""){
alert("Enter job role first")
return
}

let aiText="Experienced "+role+" with strong problem solving skills, teamwork ability and experience delivering high quality results."

document.getElementById("experience").value=aiText

}



function generateResume(){

let name=document.getElementById("name").value
let role=document.getElementById("role").value
let skills=document.getElementById("skills").value
let exp=document.getElementById("experience").value

let resume=`

<h1>${name}</h1>

<h3>${role}</h3>

<h3>Skills</h3>

<p>${skills}</p>

<h3>Experience</h3>

<p>${exp}</p>

`

document.getElementById("resumeOutput").innerHTML=resume

}



function downloadPDF(){

let element=document.getElementById("resumeOutput")

html2pdf().from(element).save("resume.pdf")

}
