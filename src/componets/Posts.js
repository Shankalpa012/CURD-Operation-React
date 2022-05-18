import React from 'react'
import axios from 'axios'
import {useState,useEffect} from "react"
import {ImBin} from "react-icons/im"
import "./Posts.scss"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Posts() {

    const [posts,setPosts] =useState([])


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            setPosts(res.data)
        })
    },[])


    const deletePost= ((i)=>{

        const filterData = posts.filter((post)=>{
            let index = i 
            return post.id !== index
        })    
        
        toast.error("Post Deleted Successfully")
        setPosts(filterData)
    })

  return (
    <div className='post-container'>
        {
            posts.map((post)=>{
                return( 
                    <div className="post">
                        <div className="data">
                            <h2>{post.title}</h2>
                            <ImBin className = "bin" onClick={()=>deletePost(post.id)}/>
                        </div>
                        <p>{post.body}</p>
                    </div>
                )   
            })
        }

        <ToastContainer
            autoClose={2000}
        />
    </div>
  )
}

export default Posts