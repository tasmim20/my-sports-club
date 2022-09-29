import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './List.css';

const List = (props) => {
   
    const {list} = props;

  let time = 0;
  for(const sport of list){
   time = time + sport.time;
  }

  const [breakTime, setBreakTime] = useState([]);
  const addBreakTime = (time) =>{
    // console.log(breakTime);
    setBreakTime(time);
  }
  const addToast = () =>{
    toast.success("Successfully completed..!!!",{
      position:"top-center"
    });
}  
  



    return (
        <div className='list'>
            <div className='sportsman'>
              <div>
                <img src="" alt="" />
              </div>
              <div>
               <h3>Mostafizur Rahman</h3>
               <p><small>Dhaka, Bangladesh</small></p>
              </div>
            </div>
            <div className='details'>
               <div className='detail'>
                 <p className='unit'>75kg</p>
                 <p><small>Weight</small></p>
               </div>
               <div className='detail'>
               <p className='unit'>6.5 </p>
               <p><small>Height</small></p>
               </div>
               <div className='detail'>
               <p className='unit'>25yrs</p>
               <p><small>Age</small></p>
               </div>
            </div>
            <h3>Add  A Break</h3>
            <div className='add-break'>
             <button onClick={() => addBreakTime(10)} className='break-btn'>10s</button>
             <button  onClick={() => addBreakTime(20)} className='break-btn'>20s</button>
             <button  onClick={() => addBreakTime(30)} className='break-btn'>30s</button>
             <button  onClick={() => addBreakTime(40)}className='break-btn'>40s</button>
             <button  onClick={() => addBreakTime(50)} className='break-btn'>40s</button>
             
            </div>
            <h3>Exercise Details</h3>
          <h6 className='ex-time'>Exercise time: {time}s</h6>
          <h6 className='ex-time'>Break Time: {breakTime}s </h6>
          <div className='activity-btn'>
            <button onClick={addToast} className='activity'>Activity Completed</button>
         <ToastContainer></ToastContainer>          

          </div>
      </div>
    
    );
};

export default List;