import axios from 'axios';
import React from 'react';

const Todolists = ({todolist,removeTask,taskToupdate,showPOpup}) => {

    const removeHandler = (id)=>{
        axios.delete(`http://localhost:8000/api/todos/${id}`)
        .then((res)=>{
            removeTask(res.data)
        }).catch(err=>console.log(err))
    }
  return (<>
    {todolist.length>0?<div className='container'>
    <div className='row'>
        <div className='col-8 m-auto'>
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>NUMBER</th>
                            <th>SUBJECT</th>
                            <th>MESSAGE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todolist.map((data,index)=>{
                                const {name,email,number,subject,message} = data;
                                return(<tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{number}</td>
                                    <td>{subject}</td>
                                    <td>{message}</td>
                                    <td>
                                        <i className="bi bi-pencil-square text-success me-2" style={{cursor:'pointer'}}
                                        onClick={()=>{
                                            taskToupdate(data)
                                            showPOpup()
                                            }}></i>
                                        <i className="bi bi-trash text-danger" style={{cursor:'pointer'}}
                                        onClick={()=>{removeHandler(data._id)}}></i>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>:null}
  </>)
}

export default Todolists;