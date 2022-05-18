import React from 'react'
import "./Home.scss"
import {Outlet,Link} from "react-router-dom"

function Home() {
  return (

    <>
         <nav>
            <ul>
              <li>
                  <Link className='link' to="/">Home</Link>
              </li>
              <li>
                  <Link className='link' to="/form">Form</Link>
              </li>
              <li>
                  <Link className='link' to="/posts">Posts</Link>
              </li>
            </ul>
         </nav>

      <div className="contain">
        <h1>Internship Task</h1>
      </div>

   <Outlet />
    </>
   
  )
}

export default Home