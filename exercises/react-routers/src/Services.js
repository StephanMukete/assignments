import React from 'react'
import services from "./services.json"

function Services() {
    const serviceCardComponents = services.map(service => (
        <link to={'/services/${services.id}'}className ='service-card' key ={service.id}  >
            <h3>{service.name}</h3>
            <p>${service.price}</p>
        </link>
    ))
    return (
        <section>
            <h3>Services</h3>
            <div className='service-card-list'>
                {serviceCardComponents}
            </div>
        </section>
    )
}

export default Services;
