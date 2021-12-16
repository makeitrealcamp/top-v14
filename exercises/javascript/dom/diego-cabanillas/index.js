const input = document.getElementById('todoInput');
const button = document.getElementById('addToDo');
const list = document.querySelector('#container > ul');

const createToDoNode = ( todo ) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const i = document.createElement('i');
  i.classList.add('fa','fa-trash');
  const textTodo = document.createTextNode( ' ' + todo );
  span.appendChild(i);
  li.appendChild(span);
  li.appendChild(textTodo);
  return li;
}

const addTask = () => {
  const todo = input.value;
  if( todo ) {
    list.prepend( createToDoNode( todo ) );
    input.value = '';
  }
}

button.addEventListener('click', () => { addTask() })

list.addEventListener('click', (e) => {
  if( e.target.classList.contains('fa-trash') ) {
    e.target.parentNode.parentNode.remove();
  } else if( e.target.tagName.toLowerCase().trim() === 'span' ) {
    e.target.parentNode.remove();
  }
})