import React from 'react'


function Footer() {

    return (
           <div> 
				<footer>
					<div className="container-fluid padding">
					<div className="row text-center">
						<div className="col-md-4">
						<img src={ require('./img/w3newbie.png') } />
							<hr className="light"/>
							<p>(571) 427-1567</p>
							<p>elondostephan@gmail.com</p>
							<p>650 W. South Temple</p>
							<p>SLC, Utah, 84116</p>
						</div>
						<div className="col-md-4">
							<hr className="light"/>
							<h5>Working Hours</h5>
							<hr className="light"/>
							<p>Monday: 9am - 5pm</p>
							<p>Tuesday: 9am - 5pm</p>
							<p>Wednesday: 9am - 5pm</p>
							<p>Thursday: 9am - 5pm</p>
							<p>Friday: 9am - 5pm</p>
						</div>
						<div className="col-md-4">
							<hr className="light"/>
							<h5>Our Locations</h5>
							<hr className="light"/>
							<p>San Fransisco, CA</p>
							<p>Salt Lake City, UT</p>
							<p>Seattle, WA</p>
						</div>	
						<div className="col-12">
							<hr className="light-100"/>
							<h5>&copy; stephanbusiness.com</h5>
						</div>	
					</div>
					</div>
			</footer>
        </div>                
        
    )
}

export default Footer