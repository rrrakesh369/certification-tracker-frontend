import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { removeEmpFromFeed } from '../utils/updateSlice';
const DeleteEmp = () => {
     const location= useLocation();
     const eId= location.state?.employee;

        const [certificationName, setcertificationName] =useState(eId?.certificationName || "");  
        const [issuedDate, setIssuedDate] = useState(eId?.issuedDate?.split("T")[0] || "");
        const [expiryDate, setExpiryDate] = useState(eId?.expiryDate?.split("T")[0] || "");
        const [status, setstatus] =useState(eId?.status || "");
        const [error, setError]= useState("");

        // const dispatch= useDispatch();  
        const navigate=useNavigate();

    const handleDelete= async () =>{
      try {

        const res=await axios.delete(`${BASE_URL}/${eId.employeeId}`);
        console.log(res.data)
        // dispatch(removeEmpFromFeed(eId.employeeId))
        return navigate("/")
      } catch (error) {
        console.log(error);
      }
      
    }
  return (
     <div className='flex justify-center my-9'>
    <div className="card w-96 bg-base-100 card-lg shadow-sm">
  <div className="card-body ">
    <h2 className="card-title">Delete Certification</h2>
    {/* <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Employee Id</span>
  </div>
  <input type="text" value={employeeId} className="input input-bordered w-full max-w-xs"
    onChange={(e)=>setemployeeId(e.target.value)}
  />
</label> */}

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Certification Name</span>
  </div>
  <input type="text" readOnly value={certificationName}  className="input input-bordered w-full max-w-xs" 
    onChange={(e)=>setcertificationName(e.target.value)}
  />
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Issued Date</span>
  </div>
  <input type="date" readOnly value={issuedDate} id="date" name="date" 
         class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            onChange={(e)=>setIssuedDate(e.target.value)}
         />
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Expiry Date</span>
  </div>
 <input type="date" readOnly value={expiryDate} id="date" name="date" 
         class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            onChange={(e)=>setExpiryDate(e.target.value)}
         />
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Certification Status</span>
  </div>
   <select value={status} disabled className="select select-bordered"  onChange={(e)=>setstatus(e.target.value)}>
    <option disabled selected>Pick one</option>
    <option>ACTIVE</option>
    <option>EXPIRED</option>
    <option>REVOKED</option>
  </select>
</label>
<p className='text-red-500'>{error}</p>
    <div className="justify-center card-actions">
      <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
    </div>
  </div>
</div>
</div>
  )
}

export default DeleteEmp
