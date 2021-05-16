import React from 'react';
import cross from './cross.png';
import star from './star.png';

export default function Movie(props) {
    let con = props.item.grade;
    const stars = [];

    for (let i = 0; i < con; i++) {
        stars.push(<img src={star} alt="Star"></img>)
    }
    
    return (
        
            <li className="list-group-item" data-grade={props.item.grade} data-title={props.item.title}>
                <a>{props.item.title}</a> 
                <img src={cross} alt="Delete movie" className="delete-movie" onClick={() => {props.removeMovie(props.item.id)}}></img>                
                {stars}
            </li>
        
    )
}