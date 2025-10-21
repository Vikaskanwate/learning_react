import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    // console.log(props.companyName);
    
  return (
    <div className="card">
        <div className="top">
        <img src={props.brandLogo} alt="logo" />
        <button>Save<Bookmark size={10}/></button>
        </div>
        <div className="center">
          <h3>{props.companyName} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card