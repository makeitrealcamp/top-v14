const input = document.getElementById('todoInput');
const button = document.getElementById('addToDo');
const list = document.querySelector('#container > ul');

const createToDo = () => {
  const todo = input.value;
  return `
    <li>
      <span><i class="fa fa-trash"></i></span>' 
      ${ todo } 
    </li>
  `
}

const addTask = () => {
  if( input.value ) {
    list.innerHTML = createToDo() + list.innerHTML;
    input.value = '';
  }
}

button.addEventListener('click', () => { addTask() })

list.addEventListener('click', (e) => {
  if( e.target.classList.contains('fa-trash') ) {
    e.target.parentNode.parentNode.remove();
  }
})