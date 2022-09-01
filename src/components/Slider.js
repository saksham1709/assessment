import React from 'react'
import Carousel from 'react-elastic-carousel';

function Slider() {
    const breakPoints = [
        { width: 1, itemsToShow: 3 },
        { width: 768, itemsToShow: 6},
        { width: 1200, itemsToShow: 8 },
    ];
    return (
        <div className="logo-slider">
            <h1>OUR COLLABORATION PARTNERS</h1>
            <Carousel breakPoints={breakPoints}>
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
                <img src="./images/dummy.png" alt="" />
            </Carousel>
        </div>

    )
}

export default Slider