import React,{Component} from 'react'
import {PostModel} from '../../stores/Models' 

type postsProps={
    post:PostModel
}

class PostsApp extends Component<postsProps>{

    render(){
        const{post}=this.props
        return(
            <div>
                <div>{post.userId}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>
        )
    }
}

export {PostsApp}