const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const time=document.getElementById("time");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
console.log(time.value);
let string=time.value;
const result =string.slice(0,10)+ " " +string.slice(11,16);
let string2="-------";

        li.innerHTML=`${inputBox.value} ${string2} ${result}`;
        listContainer.appendChild(li);
        let span=document.createElement("span");

        span.innerHTML="\u00d7"

        li.appendChild(span);

        saveData();
    }
    inputBox.value=""
}
listContainer.addEventListener("click",function (e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();
