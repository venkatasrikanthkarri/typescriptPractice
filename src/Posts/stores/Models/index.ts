import { observable, action } from 'mobx'
import { PostsObject } from '../types'

export class PostModel {
    @observable id:number|null
    @observable userId:number|null
    @observable title:string|null
    @observable body:string|null
    key:number

    constructor(posts:PostsObject){
        this.key=Math.random()
        this.id=posts.id
        this.userId=posts.userId
        this.title=posts.title
        this.body=posts.body
    }
}