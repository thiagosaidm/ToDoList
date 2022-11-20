

const form = document.querySelector('#form');///captura do form
const formInput = document.querySelector('input');///captura do input
const listaTodo = document.querySelector('.listaTodo');///captura das tarefas
const finish = document.querySelector('.finish');///captura do botão finalizar
const remover = document.querySelector('.remove');///captura do botão cancelar


//deixando salvo no localStorage
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];


const salvarTarefa = (text) => {
    
    
    const todo = document.createElement("div");///criando a div com as tarefas com classe tarefas
    todo.classList.add("tarefas"); // cria-se a classe tarefas
    const nomeTarefa = document.createElement("h3");///criando elemento h3 com nome da tarefa
    nomeTarefa.innerText += text.nome;
    nomeTarefa.dataset.id = nomeTarefa.id
    todo.appendChild(nomeTarefa);

    
    ///criando botão finalizar tarefa com js
    const finishBtn = document.createElement("button");
    finishBtn.classList.add("finish");
    ///criando icone com js
    finishBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    ///colocando o botão na div tarefas
    todo.appendChild(finishBtn);
    
    ///botão remover tarefa
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.dataset.id = text;
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


tarefas.forEach(elemento => {
    salvarTarefa(elemento)
});

form.addEventListener ("submit", (evento) => {
    evento.preventDefault()

    const tarefa = evento.target.elements['nome']
    

    const tarefaAtual = {
        "nome": formInput.value,
    
    }

    salvarTarefa(tarefaAtual)

    tarefas.push(tarefaAtual)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
})



document.addEventListener("click", (e) =>{

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("finish")) { //add class done, para que a tarefa sendo finalizada receba a estilização do css
       
        parentEl.classList.toggle("done") // toggle -> se tem a classe ele tira ou coloca se não tem

    }

    if (targetEl.classList.contains("remove")) {
        parentEl.remove();
        tarefas.splice(tarefas.findIndex,1)
        localStorage.setItem("tarefas",JSON.stringify(tarefas))
    }

})


