import React from 'react';
import './List.css';

const List = (props) => {
   
    const {list} = props;

  let time = 0;
  for(const sport of list){
   time = time + sport.time;
  }
     
    return (
        <div className='list'>
            <h3>Exercise Details</h3>
          <p>Exercise time: {time}</p>
        </div>
    );
};

export default List;