import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className='card'>
        <div className='card-container'>
            <div className='card1'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p>- HTML -</p>
                <p>- CSS -</p>
                <p>- SASS -</p>
                <p>- DOM -</p>
                <p>- BOOTSTRAP -</p>
                <p>- JavaScript -</p>
                <Link to="/contact" className="btn">CONTACT NOW</Link>
            </div>
            <div className='card1'>
                <h3>- Intermidiate -</h3>
                <span className='bar'></span>
                <p>- HTML -</p>
                <p>- CSS -</p>
                <p>- JavaScript -</p>
                <p>- React js -</p>
                <p>- GIT -</p>
                <p>- Responsive Designs -</p>
                <Link to="/contact" className="btn">CONTACT NOW</Link>
            </div>
            <div className='card1'>
                <h3>- Advanced -</h3>
                <span className='bar'></span>
                <p>- HTML -</p>
                <p>- CSS -</p>
                <p>- JavaScript -</p>
                <p>-React Js -</p>
                <p>-Redux Toolkit -</p>
                <p>-Framwork and Libraries-</p>
                <Link to="/contact" className="btn">CONTACT NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default Card