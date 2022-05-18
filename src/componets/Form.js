import React from 'react'
import {useState,useEffect} from "react"
import "./Form.scss"
import Table from './Table'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getFormValue = () => {
  const storeValue = localStorage.getItem("tables")
  if(storeValue){
    return JSON.parse(storeValue)
  }else{
    return [{layout:"layout2",name:"shankalpa",capacity:20,status:true,image:null}]
  }
}




function Form() {


  const [tables,setTables] = useState(getFormValue)

  const [layout ,setLayout] = useState("layout 1")
  const [name, setName] =useState("")
  const [capacity, setCapacity] =useState("")
  const [status, setStatus] =useState(false)
  const [image, setImage] =useState(null)
  

  const manageData =(e) =>{
    e.preventDefault();

    let index = (Math.random() * 1000) + 1

      let table = {
        layout,name,capacity,status,image,index
      }

      toast.success("Table Added Successfully!!")
      setTables([...tables,table])
      clearData()
  }


  useEffect(()=>{
    localStorage.setItem("tables",JSON.stringify(tables ))
  },[tables])

  const clearData = (e) =>{
    setCapacity("")
    setLayout('layout 1')
    setName("")
    setStatus(false)
    setImage(null)

  }


  const deleteItem = (i)=>{
    const filterData = tables.filter((table)=>{
       let x = i
      return table.index !== x
    })
    toast.error("Table Data Deleted Successfully!!")
    setTables(filterData)
  }

  return (
        <div className="container">
        <div className='items'>
            <h1>Add Table</h1>

            <form className='form'>
                <label className='label'>
                  Layout :
                 <select
                  onChange={(e)=>{
                    setLayout(e.target.value)
                  }}
                 
                >
                   <option value="Layout 1">Layout 1</option>
                   <option value="Layout 2">Layout 2</option>
                   <option value="Layout 3">Layout 3</option>
                 </select>
                </label>

                <label className='label'>
                  Name :
                  <input onChange={(e)=>{
                    setName(e.target.value)
                  }} type="text" />
                </label>
                  
                <label className='label'>
                  Capacity :
                  <input onChange={(e)=>{
                    setCapacity(e.target.value)
                  }} type="number" />
                </label>

                <label className='label status'>
                  status :
                  <input onChange={(e)=>{
                    setStatus(!status)
                  }} type="checkbox" />
                </label>

                <label className='label'>
                  Image :
                  <input onChange={(e)=>{
                    setImage(e.target.files[0])
                  }}className='file' type="file" />
                </label>

                  <div className='btn'>
                      <button onClick ={manageData} className='btn1' type='submit'>Submit</button>
                      <button  onClick = {clearData}>Clear</button>
                  </div>
            </form>
            </div>

            <Table className="formData" data ={tables} deleteItem ={deleteItem}/>
            
            <ToastContainer
              autoClose={2000}
            />
        </div>
  )
}

export default Form