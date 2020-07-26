var taskList=document.getElementById("taskList");
var task=document.getElementById("task");
var updateTaskInput=document.getElementById("updateTask");
var addbtn=document.getElementById("addBtn");
var delbtn=document.getElementById("deleteBtn");
var node=undefined;

function addTask(){
    var li=document.createElement("li");
    var liText=document.createTextNode(task.value);
    var editButton=document.createElement("button");
    var deleteButton=document.createElement("button");
    var editButtonText=document.createTextNode("Edit");
    var deleteButtonText=document.createTextNode("Delete");
    deleteButton.setAttribute("class","btn");
    deleteButton.setAttribute("onclick","deleteTask(this)");
    editButton.setAttribute("class","btn");
    editButton.setAttribute("onclick","editTask(this)");
    editButton.appendChild(editButtonText);
    deleteButton.appendChild(deleteButtonText);
    li.appendChild(liText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    delbtn.disabled=false;
    task.value="";
    addbtn.disabled=true;
}

function deleteAll(){
    taskList.innerHTML="";
    delbtn.disabled=true;
    addbtn.disabled=true;
}

function deleteTask(e){
    e.parentNode.remove();
    if(taskList.childNodes.length==1){
        delbtn.disabled=true;
    }
}

function editTask(e){
    on();
    updateTaskInput.value=e.parentNode.firstChild.nodeValue;
    node=e;
}

function on() {
    document.getElementById("overlay").style.display = "block";
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
}

function update(){
    node.parentNode.firstChild.nodeValue=updateTaskInput.value;
    off();
}

function cancel(){
    off();
}

function enablebtn(){
    if(task.value.length>0){
        addbtn.disabled=false;
    }
    else{
        addbtn.disabled=true;
    }
}