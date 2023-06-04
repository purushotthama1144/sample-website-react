import React, { useEffect, useState } from 'react'
import './Landing.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Landing() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 468, min: 0 },
            items: 1
        }
    };
    const [highlightData, sethighlightData] = useState(null);
    const [categoryData, setcategoryData] = useState(null);

    useEffect(() => {
        const fetchcategories = async () => {
            try {
                const response = await axios.get('http://localhost:7000/categories');
                setcategoryData(response.data);
            } catch (error) {
                console.log('Error:', error.message);
            }
        };
        fetchcategories();
    }, []);

    useEffect(() => {
        const fetchHighlights = async () => {
            try {
                const response = await axios.get('http://localhost:7000/highlights');
                sethighlightData(response.data);
            } catch (error) {
                console.log('Error:', error.message);
            }
        };
        fetchHighlights();
    }, []);

    return (
        <div className='home'>
            <div id="banner" className="banner">
                <div className="bg-image bg-desktop" style={{ backgroundImage: "url(images/banner.png)" }}></div>
                <div className="bg-image bg-mobile" style={{ backgroundImage: "url(images/banner-mobile.png)" }}></div>
                <h1 className="banner_taital"><span>Welcome</span><br />to Hawaii</h1>
            </div>
            <div className="section">
                <div className="container container-medium-width">
                    <h2 className="block_title">
                        Highlights
                    </h2>
                    <Carousel responsive={responsive}
                        swipeable={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={6000}
                        keyBoardControl={true}
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                        containerClass="carousel-container">
                        {highlightData ? (
                            highlightData.map((item, index) => (
                             
                                <article key={index} className="highlight-block">
                                    <div className="bg-box">
                                        <div className="image-block">
                                            <img src={item.image}
                                                alt={item.title} className="img-fluid border-top-radius" />
                                        </div>
                                        <div className="text-block clearfix">
                                            <h3 className="text-title">
                                                {item.title}
                                            </h3>
                                            <p>{item.description}</p>
                                            <Link className="read-more" to={`/categories/${item.title}`}>
                                                <img src="images/arrow_forward.svg" alt="read more" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div>Loading...</div>
                        )}
                    </Carousel>
                </div>
            </div>
            <div className="section bg-grey">
                <div className="container container-medium-width">
                    <div className="category-travel-block fl-bx n-margin">
                        <div className="w-50">
                            <h2 className="block_title">
                                Catergories
                            </h2>
                            {categoryData ? (
                                categoryData.map((item, index) => (

                                    <div key={index} className="category-block bg-white">
                                        <p>{item.name}</p>
                                        <div className="navigate">
                                            <img src="images/arrow_forward.svg" alt="read more" className="img-fluid" />
                                        </div>
                                    </div>
                                ))

                            ) : (
                                <div>Loading...</div>
                            )}
                        </div>
                        <div className="w-50">
                            <h2 className="block_title">
                                Travel Guide
                            </h2>
                            <div className="text-left-image-right-block bg-white fl-bx">
                                <div className="text-block w-70">
                                    <div className="guide-name">
                                        Hadwin Malone
                                    </div>
                                    <div className="guide-bio">
                                        Guide since 2012
                                    </div>
                                    <div className="contact-guide">
                                        <button className="button btn-white">Contact</button>
                                    </div>
                                </div>
                                <div className="image-block w-30 fl-bx">
                                    <img src="images/guide.png" alt="guide" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing