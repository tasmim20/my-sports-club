import React from 'react';
import './Sport.css';

const Sport = (props) => {
    const  {title, description, image, age, time} = props.sport;
    return (
        

  
 
         <div className='sport'>
            <img src={image} alt=""></img> 
            <div className='sport-detail'>
           <h3>{title}</h3>
            <p><small>{description}</small></p>
            <p> <small>For age: {age}</small></p>
            <p><small>Time required: {time}</small></p>
            </div>
            <button onClick={() =>props.handleAddToList(props.sport)} className='btn-list'>
                <p>Add to list</p>
            </button>



        </div>
   
    );
};

export default Sport;