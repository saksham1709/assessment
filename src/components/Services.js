import React from 'react'

function Services() {
    return (
        <div className="services">
            <h1>OUR CLIENT-FOCUSED APPROACH</h1>
            <div className="service-card-container">
                <div className="service-cards">
                    <img src="./images/dummy.png" alt="" />
                    <h3>Grow</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellat officia beatae doloribus, maxime porro neque impedit aliquam voluptatum odit maiores. Porro voluptates nam iusto ad ex tempora, itaque inventore.</p>
                    <p><a href="">Learn more</a></p>
                </div>
                <div className="card-separator"></div>
                <div className="service-cards">
                    <img src="./images/dummy.png" alt="" />
                    <h3>Build</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellat officia beatae doloribus, maxime porro neque impedit aliquam voluptatum odit maiores. Porro voluptates nam iusto ad ex tempora, itaque inventore.</p>
                    <p><a href="">See Our Built</a></p>
                </div>
                <div className="card-separator"></div>
                <div className="service-cards">
                    <img src="./images/dummy.png" alt="" />
                    <h3>Our Team</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellat officia beatae doloribus, maxime porro neque impedit aliquam voluptatum odit maiores. Porro voluptates nam iusto ad ex tempora, itaque inventore.</p>
                    <p><a href="">Meet Our Team</a></p>
                </div>
            </div>
        </div>
    )
}

export default Services