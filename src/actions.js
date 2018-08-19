const addList = () => {
  return {
    type: 'ADD_LIST',
    tasks: [],
    isHidden: false
  };
}

const deleteList = (i) => {
  return {
    type: 'DELETE_LIST',
    i: i
  };
}

const addTask = (i, task) => {
  return {
    type: 'ADD_TASK',
    i: i,
    msg: task
  };
}

const deleteTask = (i, index) => {
  return {
    type: 'DELETE_TASK',
    i: i,
    index: index
  };
}

const toggleHidden = (i) => {
  return {
    type: 'TOGGLE_HIDDEN',
    i: i
  }
}

export { addList, deleteList, addTask, deleteTask, toggleHidden }