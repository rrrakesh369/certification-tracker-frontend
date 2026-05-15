import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeTable = ({ employees = [] }) => {
    const [statusFilter, setStatusFilter] = useState("All");

    const filteredEmployees =
        statusFilter === "All"
            ? employees
            : employees.filter((emp) => emp.status === statusFilter);

    return (
        <div className="overflow-x-auto">

            <div className="dropdown dropdown-hover flex justify-end mx-2.5">

                <div tabIndex={0} role="button" className="btn m-2.5">
                    {statusFilter}
                </div>

                <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-20 p-2 shadow-sm">

                    <li><a onClick={() => setStatusFilter("All")}>All</a></li>
                    <li><a onClick={() => setStatusFilter("ACTIVE")}>Active</a></li>
                    <li><a onClick={() => setStatusFilter("EXPIRED")}>Expired</a></li>
                    <li><a onClick={() => setStatusFilter("REVOKED")}>Revoked</a></li>

                </ul>
            </div>

            <table className="table table-auto justify-center">

                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Certification Name</th>
                        <th>Issued Date</th>
                        <th>Expiry Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredEmployees.map((emp) => (
                        <tr key={emp.employeeId}>

                            <td>{emp.employeeId}</td>
                            <td>{emp.certificationName}</td>
                            <td>{emp.issuedDate}</td>
                            <td>{emp.expiryDate}</td>
                            <td>{emp.status}</td>

                            <td>
                                <div className="flex flex-col sm:flex-row gap-2">
                                <button className="btn btn-xs"><Link to={"/add"}>Add</Link></button>
                                <button className="btn btn-xs mx-2"><Link to={"/edit"}>Edit</Link></button>
                                <button className="btn btn-xs">Delete</button>
                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default EmployeeTable;