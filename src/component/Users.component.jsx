import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';

// const defaultUser = [
//     {
//         id: 1,
//         name: "Tausif Sheikh",
//         email: "xyz@gmail.com",
//         phone: 99787557,
//         salary: 54200,
//         age: 28,
//     }
// ]
const Users = () => {
  const [users, setUsers] = useState([]);
  const API_URL = 'https://4pzkgjswy2.execute-api.us-east-1.amazonaws.com/Beta';
  useEffect(()=> {
    const getData = async () => {
        const {data} = await axios.get(API_URL);
        setUsers(JSON.parse(data.body))
        // console.log(JSON.parse(data.body), "data");
        // setUsers(defaultUser)
    }
    getData();
  },[])
  // console.log(users?.Items, "users");

  return (
        <div className="card m-5">
                <h5 className="card-header">Users</h5>
                <div className="card-body">
                  <div className="table-responsive text-nowrap">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Salary</th>
                          <th>Age</th>
                          <th>Remove Entry</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                        {users?.Items.map((user)=> (
                            <Fragment key={user.id}>
                            <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{user.id}</strong>
                          </td>
                          <td><strong>{user.name}</strong></td>
                          <td className='ps-2'>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="" data-bs-original-title={user.email}>
                                {user.email}
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-primary me-1">{user.phone}</span></td>
                          <td>
                            <span  className="bg-label-success me-1 fw-bold p-1 rounded-2">
                            {user.salary}
                            </span>
                          </td>
                          <td>
                            <strong>{user.age}</strong>
                          </td>
                          <td className='text-center'>
                            <button className='btn btn-danger'>Remove</button>
                          </td>
                          </Fragment>
                        ))}    
                        </tr>                       
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
  )
}

export default Users