import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Users = () => {
//   const [users, setUsers] = useState([]);
  const API_URL = 'https://6803vmt1db.execute-api.us-east-1.amazonaws.com/Dev';
  useEffect(()=> {
    const getData = async () => {
        const {data} = await axios.get(API_URL);
        console.log(data, "data");
        // setUsers()
    }
    getData();
  },[])

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
                          <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong>
                          </td>
                          <td>Albert Cook</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="" data-bs-original-title="Christina Parker">
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-primary me-1">Active</span></td>
                          <td>
                            <div className="dropdown">
                              <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> Edit</a>
                                <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Delete</a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong>
                          </td>
                          <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong>
                          </td>
                        </tr>                        
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
  )
}

export default Users