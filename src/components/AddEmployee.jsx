import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { storeEmployee } from '../utils/employeeSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const AddEmployee = () => {
    const [employeeId, setemployeeId] =useState();
    const [certificationName, setcertificationName] =useState();  
    const [issuedDate, setIssuedDate] =useState();
    const [expiryDate, setExpiryDate] =useState();
    const [status, setstatus] =useState();
    const navigate=useNavigate();

    const dispatch= useDispatch();
     const [error, setError]= useState("");

    const handleSubmit = async ()=>{
     
        try {
           const res = await axios.post(BASE_URL,{
             employeeId, certificationName, issuedDate, expiryDate, status
           })
           dispatch(storeEmployee(res?.data));
           return navigate("/");
        } catch (err) {
            setError(err.message);
                   
        }
    }
  return (
    <div className='flex justify-center my-9'>
    <div className="card w-96 bg-base-100 card-lg shadow-sm">
  <div className="card-body ">
    <h2 className="card-title">Create Certification</h2>

    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Employee Id</span>
  </div>
  <input type="text" value={employeeId} className="input input-bordered w-full max-w-xs"
    onChange={(e)=>setemployeeId(e.target.value)}
  />
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Certification Name</span>
  </div>
  <input type="text" value={certificationName}  className="input input-bordered w-full max-w-xs" 
    onChange={(e)=>setcertificationName(e.target.value)}
  />
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Issued Date</span>
  </div>
  <input type="date" value={issuedDate} id="date" name="date" 
         class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            onChange={(e)=>setIssuedDate(e.target.value)}
         />
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Expiry Date</span>
  </div>
 <input type="date" value={expiryDate} id="date" name="date" 
         class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            onChange={(e)=>setExpiryDate(e.target.value)}
         />
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Certification Status</span>
  </div>
   <select value={status} className="select select-bordered"  onChange={(e)=>setstatus(e.target.value)}>
    <option disabled selected>Pick one</option>
    <option>ACTIVE</option>
    <option>EXPIRED</option>
    <option>REVOKED</option>
  </select>
</label>
<p className='text-red-500'>{error}</p>
    <div className="justify-center card-actions">
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  </div>
</div>
</div>
  )
}

export default AddEmployee
