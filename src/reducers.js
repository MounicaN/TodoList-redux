const todoApp = (state =[], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      state.list.push({
        tasks: action.tasks,
        isHidden: action.isHidden
      });
       //console.log(state.list.length);
      return state;

    case 'DELETE_LIST':
      console.log(action.i)
      state.list.splice(action.i, 1);
      return state;

    case 'ADD_TASK':
      state.list[action.i].tasks.push(action.msg);
      return state;

    case 'DELETE_TASK':
      state.list[action.index].tasks.splice(action.i, 1);
      return state;

    case 'TOGGLE_HIDDEN':
      state.list[action.i].isHidden = !(state.list[action.i].isHidden);
      return state;

    default:
      return state;
  }
}

export default todoApp;