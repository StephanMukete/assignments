import React from 'react'

//components
import Header from './Header'
import Footer from './Footer'

function About() {

    return (
        <div>
			<Header />

			<div id="slides" className="carousel slide" data-ride="carousel">
			<ul className="carousel-indicators">
				<li data-target="#slides" data-slide-to="0" class="active"></li>
				<li data-target="#slides" data-slide-to="1"></li>
				<li data-target="#slides" data-slide-to="2"></li>
				<li data-target="#slides" data-slide-to="3"></li>
			</ul>
			<div className="carousel-inner">
				<div className="carousel-item active">
				<img src={ require('./img/food.jpg') } />
					<div className="carousel-caption">
						<h1 className="display-2">STEPHAN'S</h1>
						<h3>Food Recipe Site</h3>
						<button type="button" className="btn btn-outline-light btn-lg">Recipe of the day</button>
						<button type="button" className="btn btn-primary btn-lg">Meet Agent</button>		
					</div>
				</div>
				<div className="carousel-item">
				<img src={ require('./img/bg5.png') } />
					<div className="carousel-caption">
						<h2 className="display-2">THE BOSS</h2>
					</div>
				</div>
				<div className="carousel-item">
				<img src={ require('./img/background3.png') } />
				</div>	
				<div className="carousel-item">
				<img src={ require('./img/background2.png') } />
				</div>	
			</div> 
			</div>
			<div className="container-fluid padding">
			<div className="row padding">
				<div className="col-lg-6">
					<h2>Things to be aware of...</h2>
					<p>Food is something very delicate and important. You can't afford a life without it</p>
					<p>By coming here you have no more worries cos all you'd ever want is right here</p>
					<p>Hope you've tried it and I can tell it works perfectly</p>
					<p>Now hope you connect with the experts so you get an even better service</p>
					
					<br></br>
					<a href="#" className="btn btn-primary btn-lg">Learn More</a>
				</div>
				<div className="col-lg-6">
				<img src={ require('./img/desk.png') } />
				</div>

			</div>
			</div>
		<Footer />
</div>
        
    )
}

export default About;
