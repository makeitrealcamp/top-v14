
// Aca escribiran su codigo

const input = document.getElementById('todoInput');
const createTaskButton = document.getElementById('addToDo');
const icon = '<span><i class="fa fa-trash"></i></span>'
const items = document.getElementsByTagName('li')

const addTask = () => {
  const task =  document.createElement('li')
  task.innerHTML = icon;
  task.appendChild(document.createTextNode(input.value));
  createTaskButton.nextElementSibling.appendChild(task);
  generarEventoItem()
  cleanInputSearch()
};

createTaskButton.addEventListener('click', addTask);

const deleteTask = (item) => {
  console.log(item);
  item.addEventListener('click', () => {
    console.log('click');
    item.parentNode.removeChild(item);
  })
}

const generarEventoItem = () => {
  for (let index = 0; index < items.length; index++) {
    deleteTask(items[index])
  }
}

const cleanInputSearch = () => {
  input.value = ''
}
