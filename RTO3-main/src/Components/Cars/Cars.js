import React from 'react'
import './Cars.css';
import amaze from "../assets/car/amaze.jpg"
import brezza from "../assets/car/brezza.jpeg"
import Dzire from "../assets/car/Dzire.jpg"
import fortuner from "../assets/car/fortuner.jpeg"
import Toyota from "../assets/car/Toyota Fortuner.jpg"
import wagonr from "../assets/car/wagonr.jpg"
import ertiga from "../assets/car/ertiga.jpg"
import honda from "../assets/car/honda.jpg"

const Cars = () => {
  return (
    <>
    <div id='cars' className="cars-container-title">Regional Transports</div>
    <div className="cars-container">
        <div className="cars-inner">
            <div className=" cLevel">
                <div className="cars">
                    <div className="cars-photo"><img src={ertiga} alt="" /></div>
                    <div className="cars-name">Metro</div>
                </div>
                <div className="cars">
                    <div className="cars-photo"><img src={brezza} alt="" /></div>
                    <div className="cars-name">Bus</div>
                </div>
                <div className="cars">
                    <div className="cars-photo"><img src={Dzire} alt="" /></div>
                    <div className="cars-name">Car</div>
                </div>
                <div className="cars">
                    <div className="cars-photo"><img src={fortuner} alt="" /></div>
                    <div className="cars-name">Local Train</div>
                </div>
                <div className="cars">
                    <div className="cars-photo"><img src={honda} alt="" /></div>
                    <div className="cars-name">Two Wheelers</div>
                </div>
                <div className="cars">
                    <div className="cars-photo"><img src={wagonr} alt="" /></div>
                    <div className="cars-name">Truck</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cars
