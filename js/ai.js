function aiWrite(){

let role=document.getElementById("role").value

if(role===""){
alert("Enter job role first")
return
}

let aiText="Experienced "+role+" with strong communication skills, problem solving ability and proven record of delivering successful results."

document.getElementById("experience").value=aiText

}
