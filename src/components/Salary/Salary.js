import React from 'react';

const Salary = (props) => {
    const employee = props.employee;
    const totalSalary = employee.reduce((sum, employee) => sum + Number(employee.salary), 0)
    const totalSalary2 = totalSalary.toFixed(2) 
    return (
        <div>
            <h3>Total Salary : {totalSalary2}</h3>
        </div>
    );
};

export default Salary;