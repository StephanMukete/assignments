import React from 'react'

//components
import Header from "./Header";
import Footer from "./Footer";

function Contact() {

    return (
           <div>  
               <Header />
				<div id="team"className="container-fluid padding">
					<div className="row welcome text-center">
						<div className="col-12">
							<h1 className="display-4">Speak with an Agent</h1>
						</div>
						<hr/>
					</div>
		        </div>

			<div className="container-fluid padding">
			<div className="row padding">
				<div className="col-md-4">
					<div className="card">
						<img className="card-img-top "src={ require('./img/team2.png') }alt=""/>
						<div className="card-body">
							<h4 className="card-title">Maloba Pelagie</h4>
							<p className="card-text">Phone: +1 (211) 638-8753</p>
								<p className="card-text">Email: pelagie@gmail.com</p>
							<a href="#" className="btn btn-outline-secondary">See Profile</a>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<img className="card-img-top" src={ require('./img/3.png') }  alt=""/>
						<div className="card-body">
							<h4 className="card-title">Stephan Elondo</h4>
							<p className="card-text">Phone: +1 (571) 427-1567</p>
								<p className="card-text">Email: stephan@gmail.com</p>
							<a href="#" className="btn btn-outline-secondary">See Profile</a>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<img className="card-img-top"src={ require('./img/team3.png') } alt=""/>
						<div className="card-body">
								<h4 className="card-title">Clivert Carter</h4>
								<p className="card-text">Phone: +1 (561) 347-1839</p>
								<p className="card-text">Email: clivert@gmail.com</p>
								<a href="#" className="btn btn-outline-secondary">See Profile</a>
						</div>
						</div>
				</div>	
				</div>
				<hr className="my-4"/>
				</div>
				<div id="connect" className="container-fluid padding">
				<div className="row text-center padding">
					<div className="col-12">
						<h2>Connect</h2>
					</div>
					<div className="col-12 social padding">
						<a href="https://www.facebook.com/"><i className="fa fa-facebook"></i> </a>
						<a href="https://twitter.com/login?lang=en"><i className="fa fa-twitter"></i> </a>
						<a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram"></i> </a>
						<a href="https://www.youtube.com"><i className="fa fa-youtube"></i> </a>
						<a href="https://github.com/StephanMukete"><i className="fa fa-github"></i> </a>

					</div>
				</div>
				</div>
             <Footer />
        </div>                
        
    )
}

export default Contact