const reducer = (state, action) => {
  switch (action.type) {
    case 'create':
      return [...state, action.payload]
    case 'delete':
      return state.filter(task => task.id !== action.payload)
    case 'edit':
      return state.map(task => {
        const { id, title, description } = action.payload
        if (task.id === id) {
          return { ...task, title, description }
        } else {
          return task
        }
      })
    case 'status':
      return state.map(task => {
        const id = action.payload
        if (task.id === id) {
          return { ...task, status: !task.status }
        } else {
          return task
        }
      })
    default:
      return state
  }
}

export default reducer;