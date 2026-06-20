let tasks=[];



function addTask(){


let input =
document.getElementById("taskInput");



if(input.value.trim()==""){

alert("Ingrese una tarea");

return;

}



tasks.push(input.value);



input.value="";



renderTasks();


}




function renderTasks(){


let container =
document.getElementById("taskContainer");



container.innerHTML="";



tasks.forEach((task)=>{


let div=document.createElement("div");


div.className="card";


div.innerHTML=`

<h3>${task}</h3>

`;


container.appendChild(div);


});


}