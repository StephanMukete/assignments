import React from 'react'
import { Link } from "react-router-dom";

function About() {

    return (
        <div>
 
    
                <header className="App-header">

<nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
<div class="container-fluid">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarResponsive">
<ul class="navbar-nav ml-auto">
<li class="nav-item active">
<Link to="/" class="nav-link">Home</Link>
</li>
<li class="nav-item">
<Link to="/about" class="nav-link">About</Link>
</li>
    
    <li class="nav-item">
    <Link to="/contact" class="nav-link">Contact</Link>
    </li>
    </ul>
</div>
</div>
</nav>
    

</header>

<div id="slides" class="carousel slide" data-ride="carousel">
<ul class="carousel-indicators">
	<li data-target="#slides" data-slide-to="0" class="active"></li>
	<li data-target="#slides" data-slide-to="1"></li>
	<li data-target="#slides" data-slide-to="2"></li>
	<li data-target="#slides" data-slide-to="3"></li>
</ul>
<div class="carousel-inner">
	<div class="carousel-item active">
    <img src={ require('./img/background.png') } />
		{/* <img src='./img/1.png' alt='pic'/> */}
		<div class="carousel-caption">
			<h1 class="display-2">STEPHAN</h1>
			<h3>Web business Company</h3>
			<button type="button" class="btn btn-outline-light btn-lg">VIEW DEMO</button>
			<button type="button" class="btn btn-primary btn-lg">Get Started</button>		
		</div>
	</div>
	<div class="carousel-item">
    <img src={ require('./img/bg5.png') } />
		{/* <img src="img/bg5.png"/> */}
		<div class="carousel-caption">
			<h2 class="display-2">THE BOSS</h2>
		</div>
	</div>
	<div class="carousel-item">
    <img src={ require('./img/background3.png') } />
	</div>	
	<div class="carousel-item">
    <img src={ require('./img/background2.png') } />
</div>	
</div> 
</div>
<div class="container-fluid padding">
<div class="row padding">
	<div class="col-lg-6">
		<h2>Things to be aware of...</h2>
		<p>Our sites are usually responsive so you can feel free to use them on any device</p>
		<p>Just in case you wanna try this out you can start by resizing your browser window</p>
		<p>Hope you've tried it and I can tell it works perfectly</p>
		<br></br>
		<a href="#" class="btn btn-primary">Learn More</a>
	</div>
	<div class="col-lg-6">
    <img src={ require('./img/desk.png') } />
	</div>

</div>
</div>
</div>
        
    )
}

export default About;
