import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import {addFeed} from '../utils/feedSlice'
import { useDispatch, useSelector } from 'react-redux';
import EmployeeTable from './EmployeeTable';


const ListFeed = () => {
    const list= useSelector((store)=>store.feed)
    // const navigate=useNavigate();
    const dispatch= useDispatch();    


    const getFeed=async()=>{
        if(list) return;
        try {
             const res = await axios.get(`${BASE_URL}?status=ACTIVE`);
             console.log(res.data)
              dispatch(addFeed(res?.data));
        } catch (error) {
            error;
        }           
    };

    useEffect(()=>{
        getFeed();
    },[])
   return list && (
        <EmployeeTable employees={list} />

    );
}

export default ListFeed
