import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Posts } from './Posts';
import { Pagination } from './Pagination';

export const PostsIndex=()=> {
   const [posts,setPosts] = useState([]);
   const [loading,setLoading] = useState(false);
   const [currentPage,setCurrentPage] = useState(1);
   const [postsPerPage,setPostsPerPage] = useState(5);

   useEffect(()=>{
        const fetchPosts = async ()=>{
          setLoading(true);
          const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
          setPosts(res.data);
          setLoading(false);
        }
        fetchPosts();
   }, []);

    //getcurrentpage
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <div>
            <Posts posts={currentPosts} loading={loading}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}/>
        </div>
    )
}

