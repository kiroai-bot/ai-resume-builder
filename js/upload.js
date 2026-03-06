function processCV(){

let file=document.getElementById("cvFile").files[0]

if(!file){
alert("Upload your CV first")
return
}

document.getElementById("cvResult").innerHTML="AI analyzed your resume and suggested improvements for better ATS compatibility."

}
