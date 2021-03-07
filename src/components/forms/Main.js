import React from 'react'
import Header from './Header'
import { PostsIndex } from './posts/PostsIndex'

export default function Main() {
    return (
       
            <div className="container">
            <Header/> <br/>
            <PostsIndex/>
            </div>
           
       
    )
}
