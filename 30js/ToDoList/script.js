const inputbox=document.querySelector("input");
const inputbtn=document.querySelector("button");

const listitem=document.querySelector(".list-container");

function addTask(){
    if(inputbox.value==''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listitem.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    saveData(); 
}

listitem.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove("")
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listitem.innerHTML);
}

function getData(){
    listitem.innerHTML=localStorage.getItem("data");
}

getData();