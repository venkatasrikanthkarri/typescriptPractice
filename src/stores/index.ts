import { PostsService } from './../Posts/services/index'
// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'

import TodoStore from './TodoStore'

import { PostsStore } from '../Posts/stores/index'

import { PostsAppService } from '../Posts/services/index.api'

const todoStore = new TodoStore(new TodoService())

const postsStore = new PostsStore(new PostsAppService())
const stores = {
  todoStore,
  postsStore
}

export default stores
