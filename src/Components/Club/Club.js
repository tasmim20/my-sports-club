import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Sport from '../Sport/Sport';
import './Club.css';

const Club = () => {
    const [sports, setSports] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSports(data))
    },[]);


const handleAddToList = (sport) =>{
    const newList = [...list, sport];
    setList(newList);
}

    return (

      <div className='header-css'>
        
        <div className='icon'>
        <h1 className='icon2'><FontAwesomeIcon icon={faBasketball}></FontAwesomeIcon></h1>
        <h1>My Sports Club</h1>
        </div>
        <h2>Select today's exercise</h2>

     <div className='club-container'>
    <div className="sports-container">
      {
        sports.map(sport => <Sport
             key={sport.id}
             sport = {sport}
             handleAddToList = {handleAddToList}
             ></Sport>)
      }
    </div>
    <div className="sport-summary">
     <List list={list}></List>
    </div>
    </div>
</div>

    );
};

export default Club;