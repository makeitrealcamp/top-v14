// const input = document.getElementById('todoInput');
// const createTaskButton = document.getElementById('addToDo');
// const icon = `	<span><i class="fa fa-trash"></i></span>`
// const createTaskElement = () => {
//   const task = document.createElement('li');
//   task.innerHTML = icon;
//   task.appendChild(document.createTextNode(input.value));
//   createTaskButton.nextElementSibling.appendChild(task);
// };
// createTaskButton.addEventListener('click', createTaskElement);

// import createElement from "./createElement.js";
// import { renderElement } from './renderElement.js'


// const h1 = createElement('h1',{ id: 'title' },['hello'])
const h1= React.createElement('h1',{},'Hello world from React');

// const span = createElement('button', {style: 'color: red'}, ['this is an button'])

// const div = createElement('div', {}, [h1, span])

// renderElement(div, 'root')
// jsx => sintax 'HTML'

const element = <h2 id='test'>this is jsx from react</h2> 

ReactDOM.render(element,document.getElementById('root'))





/**
1. function

funcionElemento(tag,{},[children])


lafunccionParaMostrar(elemento a renderizar, dondeSe renderiza)


elemeto = funcionelemento(h1,{},[hello])


fnPms(elemrto , document.getElementbyId('container))

*/