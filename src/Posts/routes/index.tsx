import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {action} from 'mobx'

import {PostsStore} from '../stores/index'

import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'

import {PostsLists} from '../components/PostsLists'

interface PostsRouteProps {}

interface InjectedProps extends PostsRouteProps{
    postsStore:PostsStore
}

@inject('postsStore')
@observer
class PostsRoute extends Component<PostsRouteProps>{

    componentDidMount(){
        this.getPosts()
    }

    getInjectedProps = (): InjectedProps => this.props as InjectedProps

    @action.bound
    getPostsStore(){
        return this.getInjectedProps().postsStore
    }
    
    @action.bound
    getPosts(){
        this.getPostsStore().getPostsList()
    }

    

    // @action.bound
    renderSuccessUI=observer(()=>{
        const {postsList}= this.getPostsStore()
        return(
            <PostsLists postsList={postsList}/>
        )

    })

    render(){
        const {getPostsAPIStatus,
            getPostsAPIError,
            postsList}=this.getPostsStore()
        return(
            <LoadingWrapperWithFailure
            apiStatus={getPostsAPIStatus}
        apiError={getPostsAPIError}
        onRetry={this.getPosts}
        renderSuccessUI={this.renderSuccessUI}
            />

        )
    }
}

export {PostsRoute}