import React, { useEffect } from 'react'
import EmployeeTable from './EmployeeTable'
import EditEmployee from './EditEmployee'
import { useDispatch ,useSelector} from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addFeedId } from '../utils/feedIdSlice'
import { useParams } from 'react-router-dom'

const Feed = () => {
    const eId= useSelector((store)=>store.addFeedId);
    const dispatch = useDispatch();
    const {id} =useParams();

    const getFeedId = async ()=>{
          if(eId) return;
        try {
            const res = await axios.get(`${BASE_URL}/${id}`);
            console.log(res.data)
            dispatch(addFeedId(res.data))
        } catch (error) {
            console.log(error);           
        }
    };

    useEffect(()=>{
        getFeedId();
    }, [])
  return eId && (
    <div>
      <EditEmployee feed={eId} />
    </div>   
  )
}

export default Feed
