const btnAddToDo = document.getElementById("addToDo");
const listToAddTo = document.getElementsByTagName("UL")[0];

btnAddToDo.addEventListener("click", () => {
    const inputValue = document.getElementById("todoInput");
    if (inputValue !== "") {
        let newLi = document.createElement("LI");
        let newSpan = document.createElement("SPAN");
        let newIcon = document.createElement("I");
        let newText = document.createTextNode(inputValue.value);
        newIcon.className = "fa fa-trash";
        newSpan.appendChild(newIcon);
        newLi.appendChild(newSpan);
        newLi.appendChild(newText);
        listToAddTo.appendChild(newLi);
    }
});


listToAddTo.addEventListener("click", (e)=>{
    let clickedItem = e.target
    if(clickedItem.tagName==="SPAN" && clickedItem.children[0].className==="fa fa-trash"){
        clickedItem.parentNode.parentNode.removeChild(clickedItem.parentNode);
    }else if(clickedItem.className==="fa fa-trash"){
        clickedItem.parentNode.parentNode.parentNode.removeChild(clickedItem.parentNode.parentNode);
    }
})
