function generateResume(){

let name=document.getElementById("name").value
let skills=document.getElementById("skills").value
let exp=document.getElementById("experience").value

let html=`

<h1>${name}</h1>

<h3>Skills</h3>
<p>${skills}</p>

<h3>Experience</h3>
<p>${exp}</p>

`

document.getElementById("resumeOutput").innerHTML=html

}
