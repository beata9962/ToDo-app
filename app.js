const buttonAdd = document.querySelector(".add-it");
const input = document.querySelector("input");
const ul = document.querySelector("ul");


const addItem = (e) => {

    e.preventDefault();

    if (input.value === "") return;

    const div = document.createElement("div");
    ul.appendChild(div);
    div.classList.add("list");

    const li = document.createElement("li");
    div.appendChild(li);
    li.innerText = input.value;
    
    const buttonDone = document.createElement("button");
    div.appendChild(buttonDone);
    buttonDone.classList.add("done");
    buttonDone.innerHTML = '<i class="fas fa-check-circle"></i>';

    const buttonDelete = document.createElement("button");
    div.appendChild(buttonDelete);
    buttonDelete.classList.add("delete");
    buttonDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';


    input.value = "";

    buttonDelete.addEventListener("click", () => {

        div.classList.add("deletion");

buttonDelete.addEventListener("transitionend", () =>{
    ul.removeChild(div);
})
        
    })

    buttonDone.addEventListener("click", ()=>{
        div.classList.toggle("checked");
    })
}


buttonAdd.addEventListener("click", addItem);