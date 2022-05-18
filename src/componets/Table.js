import React from 'react'
import {useEffect,useState} from "react"
import {ImBin} from "react-icons/im"
import "./Table.scss"



function Table({data,deleteItem}) {


  return (
    <div className='container'> 
        <table>
            <tbody>
                <tr>
                    <th>Layout</th>
                    <th>Name</th>
                    <th>Capacity</th>
                    <th>Status</th>
                    <th></th>
                </tr>

                {
                    (data)?
                    data.map((table,index)=>{
                        return(
                            <tr key ={index}>
                                <td>{table.layout}</td>
                                <td>{table.name}</td>
                                <td>{table.capacity}</td>
                                <td>{String(table.status)}</td>
                                <td><ImBin onClick={()=>deleteItem(table.index)}/></td>
                         </tr>
                        )
                     })

                     :
                     <h1>No data Found Please Add</h1>
                } 
            </tbody>
           
            
        </table>
    </div>
  )
}

export default Table