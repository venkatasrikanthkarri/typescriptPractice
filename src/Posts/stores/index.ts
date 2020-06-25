import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

import { PostsService } from './../services/index'

import { PostsObject } from './types'

import { PostModel } from './Models'

class PostsStore {
  postsService!: PostsService
  @observable getPostsAPIStatus!: number
  @observable getPostsAPIError!: string | null
  @observable postsList!: Array<PostModel>
  constructor(postsService: PostsService) {
    this.init()
    this.postsService = postsService
  }

  @action.bound
  init() {
    this.getPostsAPIStatus = API_INITIAL
    this.getPostsAPIError = null
    this.postsList = []
  }

  @action.bound
  getPostsList() {
    const getPostsPromise = this.postsService.getPostsAPI()
    return bindPromiseWithOnSuccess(getPostsPromise)
      .to(this.setGetPostsAPIStatus, this.setPostsAPIResponse)
      .catch(this.setGetPostsAPIError)
  }

  @action.bound
  setGetPostsAPIStatus(status: number) {
    this.getPostsAPIStatus = status
  }

  @action.bound
  setPostsAPIResponse(response: Array<PostsObject> | null) {
    if (response) {
      this.postsList = response.map(posts => {
        return new PostModel(posts)
      })
    }
  }

  @action.bound
  setGetPostsAPIError(error: null | string) {
    this.getPostsAPIError = error
  }
}

export { PostsStore }
