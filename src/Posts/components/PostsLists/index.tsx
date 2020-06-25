import React,{Component} from 'react'
import {PostModel} from '../../stores/Models' 
import { observer } from 'mobx-react'
import {PostsApp} from '../PostsApp'

type postsProps={
    postsList:Array<PostModel>
}

@observer
class PostsLists extends Component<postsProps>{
    post!:PostModel
    render(){
        const{postsList}=this.props
        return(
            <div>
                {
                    postsList.map(post=>{return <PostsApp post={post}/>})
                }

            </div>
        )
    }
}

export {PostsLists}