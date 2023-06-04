import React, { useState , useEffect} from 'react';
import './App.css';
import Landing from './Components/Landing/Landing';
import Hula from './Components/Hula/Hula'
import Surfing from './Components/surfing/surfing'
import Volcano from './Components/Volcano/Volcano'
import Footer from './Components/Footer/Footer'
import HighlightsActivityDetails from './Components/HighlightsActivityDetails/HighlightsActivityDetails'
import { BrowserRouter as Router, Switch, Route, Link , useLocation } from 'react-router-dom';


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
							<div className="logo">
								<Link to="/">
									<img src="images/aloha-header.svg" alt="Aloha" className="img-fluid" />
								</Link>
							</div>
							<div className="hamburger-menu">
								<input type="checkbox" id="openSideMenu" className="openSideMenu" />
								<label htmlFor="openSideMenu" className="menuIconToggle"  onClick={handleButtonClick}>
									<div className="hamb-line dia p-1"></div>
									<div className="hamb-line hor"></div>
									<div className="hamb-line dia p-2"></div>
								</label>
							</div>
							<div className="bg-layer"></div>
							<div className="menu_button_block">
								<div className="custom_menu">
									<ul>
										<li onClick={handleButtonClick}><Link to="/">Home</Link></li>
										<li onClick={handleButtonClick}><Link to="/surfing">Surfing</Link></li>
										<li onClick={handleButtonClick}><Link to="/hula">Hula</Link></li>
										<li onClick={handleButtonClick}><Link to="/volcano">Volcano</Link></li>
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