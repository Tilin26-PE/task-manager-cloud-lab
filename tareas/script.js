let tasks=[];



function addTask(){


let input =
document.getElementById("taskInput");



if(input.value.trim()==""){

alert("Ingrese una tarea");

return;

}



tasks.push({

text:input.value,

completed:false

});



input.value="";


renderTasks();


}





function renderTasks(){


let container =
document.getElementById("taskContainer");


container.innerHTML="";



tasks.forEach((task,index)=>{


let div=document.createElement("div");


div.className="card";



div.innerHTML=`

<h3>${task.text}</h3>


<button onclick="completeTask(${index})">

Completar

</button>


<button onclick="deleteTask(${index})">

Eliminar

</button>


`;



container.appendChild(div);



});


}





function completeTask(index){


tasks[index].completed =
!tasks[index].completed;



renderTasks();


}





function deleteTask(index){


tasks.splice(index,1);


renderTasks();


}