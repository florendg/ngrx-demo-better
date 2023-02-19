import {
  initialState,
  TodoItem,
  TodoItemStatus,
  todoListFeature,
} from './todo-list.reducer'
import { addTodoItemAction } from './todo-list.actions'

describe('todoListReducer', () => {
  const item: TodoItem = {
    category: 'test',
    description: 'test-action',
    status: TodoItemStatus.NEW,
  }

  it('ignore unknown action', () => {
    const todoFeature = todoListFeature
    const action = {
      type: 'dummyAction',
    }
    const state = todoFeature.reducer(initialState, action)
    expect(state).toBe(initialState)
  })
  it('should add TodoItem on addTodoItemAction', () => {

    const action = addTodoItemAction({ item })
    const state = todoListFeature.reducer(initialState, action)
    expect(state).toEqual({ items: [item] })
  })
  it('should append when state is not empty', () => {
    const action = addTodoItemAction({ item })
    const intermediate = todoListFeature.reducer(initialState, action)
    const state = todoListFeature.reducer(intermediate, action)
    expect(state).toEqual({ items: [item, item] })
  })
})
