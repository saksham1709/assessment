import React from 'react';

function Hero() {
    return (
        <>
            <div className="hero-container">
                <div className="hero-image">
                    <img src="./images/3.jpeg" alt="" />
                </div>
                <div className="hero-form-container">
                    <h1>YOUR REQUIREMENT,<br /> OUR COMMITMENT.</h1>
                    <div className="form-container">
                        <form>
                            <div className="form-layer">
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' /><br />
                            </div>
                            <div className="form-layer">
                                <input type="email" placeholder='Business Email' />
                                <input type="text" placeholder="Company" /><br />
                            </div>
                            <select >
                                <option value="" >Country</option>
                                <option value="India" >India</option>
                                <option value="England">England</option>
                                <option value="France">France</option>
                                <option value="United States">United States</option>
                            </select> <br />
                            <button type="submit" class="btn"> <img src="./images/Send.png" alt="" /> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Hero