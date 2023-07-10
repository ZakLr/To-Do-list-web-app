const inputBox = document.getElementById("inp")
const listContainer= document.getElementById("list")

function Addtask(){
    if(inputBox === ''){
        alert('Please enter a task')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML= inputBox.value
        listContainer.appendChild(li)
        let span =document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)
    }
    inputBox.value =''
    save()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("check");
        save()
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove()
        save()
    }
}, false);

function save(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function display(){
    listContainer.innerHTML=localStorage.getItem("data")
}
display()