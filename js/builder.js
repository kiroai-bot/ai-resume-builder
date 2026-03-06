function generateResume(){

let name=document.getElementById("name").value
let role=document.getElementById("role").value
let skills=document.getElementById("skills").value
let exp=document.getElementById("experience").value
let template=document.getElementById("template").value

let html=""

if(template=="modern"){

html=`

<h1>${name}</h1>
<h3>${role}</h3>

<h3>Skills</h3>
<p>${skills}</p>

<h3>Experience</h3>
<p>${exp}</p>

`

}

if(template=="professional"){

html=`

<h2>${name}</h2>
<p><b>${role}</b></p>

<h4>Skills</h4>
<p>${skills}</p>

<h4>Experience</h4>
<p>${exp}</p>

`

}

document.getElementById("resumePreview").innerHTML=html

}
