import { types } from 'mobx-state-tree';

export const Todo = types
  .model("Todo", {
    id: types.optional(types.number, () => Math.random()),
    title: types.string,
    finished: false
  })
  .actions(self => ({
    toggle() {
      self.finished = !self.finished;
    }
  }));



export const todoStore = types
  .model("TodoStore", {
    active: types.safeReference(Todo),
    todos: types.array(Todo)
  })
  .views(self => ({
    get unfinishedTodoCount() {
      return self.todos.filter(todo => !todo.finished).length;
    },

    get totaltodos(){
        return self.todos.length
    }
  }))
  .actions(self => ({
    addTodo(title:any) {
      self.todos.push({ title });
    },
    deletetodos(id:any){
        const todo:any = self.todos.find(todo => todo.id === id);
		self.todos.splice(self.todos.indexOf(todo), 1)
    }
  }));

export const TodoStoreInitialState = {
    todos: [
 

    ]
}