let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];



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



saveTasks();


input.value="";


renderTasks();


}




function saveTasks(){

localStorage.setItem(

"tasks",

JSON.stringify(tasks)

);

}




function renderTasks(){


let container =
document.getElementById("taskContainer");


container.innerHTML="";



tasks.forEach((task,index)=>{


let div=document.createElement("div");


div.className="card";



div.innerHTML=`


<h3 class="${task.completed ? 'done' : ''}">

${task.text}

</h3>



<button onclick="completeTask(${index})">

Completar

</button>



<button onclick="deleteTask(${index})">

Eliminar

</button>



`;



container.appendChild(div);



});



document.getElementById("counter").innerHTML =
tasks.length;



}




function completeTask(index){


tasks[index].completed =
!tasks[index].completed;



saveTasks();


renderTasks();


}





function deleteTask(index){


tasks.splice(index,1);


saveTasks();


renderTasks();


}




renderTasks();