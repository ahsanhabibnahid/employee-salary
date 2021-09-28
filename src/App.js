import { useState,useEffect } from 'react';
import './App.css';
import Employee from './components/Employee/Employee'
import employeeData from './fakeData/generated.json'
import Salary from './components/Salary/Salary';

function App() {
  const [loadEmployee, setLoadEmployee] = useState([])
  const [employee, setEmployee] = useState([])

  useEffect(() => {
    setLoadEmployee(employeeData)
  }, [])

  const handleEmployees = (passEmployee) => {
    const newEmployee = [...employee, passEmployee]
    setEmployee(newEmployee)
  }

  return (
    <div>
      <div className="text-center my-5">
        <h3>Employee Loaded : {loadEmployee.length}</h3>
        <p>Employee added : {employee.length}</p>
        <Salary employee={employee}></Salary>
      </div>
      <div className='row'>
        {
          employeeData.map(loadEmployee => <Employee handleEmployees={handleEmployees} loadEmployee={loadEmployee}></Employee>)
        }
      </div>
    </div>
  );
}

export default App;
