import React from 'react';
import './Card.css';
import Share from '../Share/Share.js';

const Card = ({post}) => {

/* Numbers set by Wordpress */
    const alertRed = 39;
    const alertGreen = 40;

    const alertColor = (alertTagsArray) =>{
        if(alertTagsArray.includes(alertRed)){
            return "content alert-red";
        }
        else if (alertTagsArray.includes(alertGreen)){
            return "content alert-green";
        }
        else {
            return "content no-alert";
        }
    }

    const shareContent = {
        url: "maqay.org",
        content: post.content.rendered.substring(0,80)
    }
    return (
        /* container proposals es "container-proposal" ahora container-card */
        <div className="container-proposal">
            {/* content sera container header */}
            <div className={alertColor(post.tags)}>
                <div className="container-proposal-title">{post.title.rendered}</div>
                
                <div className="container-proposal-content">{`${post.content.rendered}`}</div>
        
                <div className="container-proposal-footer">  
                    <span className="text-small">Propuestas de: {post.politicalParties} </span>
                    {/* <!-- <img className="partie-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_juntos_por_el_Peru.svg/150px-Logo_juntos_por_el_Peru.svg.png" alt=""> --> */}
                    {Share(shareContent)}
                </div> 
            </div>
        </div>
    );
};

export default Card;