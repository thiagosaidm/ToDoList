

const form = document.querySelector('#form');///captura do form
const formInput = document.querySelector('input');///captura do input
const listaTodo = document.querySelector('.listaTodo');///captura das tarefas
const finish = document.querySelector('.finish');///captura do botão finalizar
const remover = document.querySelector('.remove');///captura do botão cancelar


const salvarTarefa = (text) => {
    
    ///criando a div com as tarefas com classe tarefas
    const todo = document.createElement("div");
    todo.classList.add("tarefas");
    ///criando elemento h3 com nome da tarefa
    const nomeTarefa = document.createElement("h3");
    nomeTarefa.innerText = text;
    todo.appendChild(nomeTarefa);

    
    ///criando botão finalizar tarefa com js
    const finishBtn = document.createElement("button");
    finishBtn.classList.add("finish");
    ///criando icone com js
    finishBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    ///colocando o botão na div tarefas
    todo.appendChild(finishBtn);
    
    ///botão cancelar tarefa
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    ///criando icone com js
    removeBtn.innerHTML = '<i class="fa-solid fa-ban"></i>';
    ///colocando o botão na div tarefas
    todo.appendChild(removeBtn);

    listaTodo.appendChild(todo);
    

    ///apagar texto que ficou no input
    formInput.value = "";
    //volta o foco do usuário na criação de tarefas
    formInput.focus();
}


form.addEventListener("submit", (e) =>{

e.preventDefault()

const todo = formInput.value

if(todo){
    salvarTarefa(todo)
}

})


document.addEventListener("click", (e) =>{

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("finish")) {
        //add class done, para que a tarefa sendo finalizada receba a estilização do css
        parentEl.classList.toggle("done") // toggle -> se tem a classe ele tira ou coloca se não tem

    }

    if (targetEl.classList.contains("remove")) {
        parentEl.remove();
    }

})

