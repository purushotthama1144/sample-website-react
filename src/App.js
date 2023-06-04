import React, { useState , useEffect} from 'react';
import './App.css';
import Landing from './Components/Landing/Landing';
import Hula from './Components/Hula/Hula'
import Surfing from './Components/surfing/surfing'
import Volcano from './Components/Volcano/Volcano'
import Footer from './Components/Footer/Footer'
import HighlightsActivityDetails from './Components/HighlightsActivityDetails/HighlightsActivityDetails'
import { BrowserRouter as Router, Switch, Route, NavLink , Link, useLocation } from 'react-router-dom';


function App() {
	const ScrollToTop = () => {
		const { pathname } = useLocation();
	  
		useEffect(() => {
		  window.scrollTo(0, 0);
		}, [pathname]);
	  
		return null;
	  };

	const [divActive, setDivActive] = useState('');

	const handleButtonClick = () => {
		setDivActive((prevState) => !prevState);
	};

	return (
		<div className={divActive ? 'active' : ''}>
			<Router>
			<ScrollToTop />
				<header id="header">
					<div className="container container-medium-width">
						<div className="header bg-white">
							<Link to="/" className="logo" style={{ backgroundImage: "url(images/aloha-header.svg)" }}></Link>
							<div className="hamburger-menu">
							<div className="menuBtn nav-bar pos-rel">
									<div className="icon-bars" onClick={handleButtonClick}>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</div>
								</div>
							</div>
							<div className="bg-layer"></div>
							<div className="menu_button_block">
								<div className="custom_menu">
									<ul>
										<li onClick={handleButtonClick}><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
										<li onClick={handleButtonClick}><NavLink to="/surfing" activeClassName="active">Surfing</NavLink></li>
										<li onClick={handleButtonClick}><NavLink to="/hula" activeClassName="active">Hula</NavLink></li>
										<li onClick={handleButtonClick}><NavLink to="/volcano" activeClassName="active">Volcano</NavLink></li>
									</ul>
								</div>
								<div className="button_block">
									<button className="button">Book a trip</button>
								</div>
							</div>
						</div>
					</div>
				</header>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/surfing" component={Surfing} />
					<Route exact path="/hula" component={Hula} />
					<Route exact path="/volcano" component={Volcano} />
					<Route path="/categories/:name" component={HighlightsActivityDetails} />
				</Switch>
			</Router >
			<Footer />
		</div>
	);
}

export default App;