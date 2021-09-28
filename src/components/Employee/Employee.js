import React from 'react'
import './Employee.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Employee = (props) => {
    const { name, email, image, salary } = props.loadEmployee
    const handleEmployees = props.handleEmployees
    return (
        <div className="col-md-4 my-3">
            <div className="card" style={{ width: '18rem' }}>
                <img src={image} className='card-img-top' alt="" />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                    <p className="card-text">Salary : {salary}</p>
                    <button onClick={() => {handleEmployees(props.loadEmployee)}} className="btn btn-primary"><FontAwesomeIcon icon={faUserPlus} /> Add Employee</button>
                </div>
            </div>
        </div>
    );
};

export default Employee;