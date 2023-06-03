import React, { useState , useEffect } from 'react'
import './Categories.css'
import axios from 'axios';

function Categories() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            setPosts(response.data);
            console.log(response)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    
  return (
    <div className="section bg-grey">
        <div className="container container-medium-width">
            <div className="category-travel-block fl-bx n-margin">
                <div className="w-50">
                    <h2 className="block_title">
                        Catergories
                    </h2>
                    <div className="category-block bg-white">
                        <p>Adventure</p>
                        <div className="navigate">
                            <img src="images/arrow_forward.svg" alt="read more" className="img-fluid" />
                        </div>
                    </div>
                    <div className="category-block bg-white">
                        <p>Culinary</p>
                        <div className="navigate">
                            <img src="images/arrow_forward.svg" alt="read more" className="img-fluid" />
                        </div>
                    </div>
                    <div className="category-block bg-white">
                        <p>Eco-tourism</p>
                        <div className="navigate">
                            <img src="images/arrow_forward.svg" alt="read more" className="img-fluid" />
                        </div>
                    </div>
                    <div className="category-block bg-white">
                        <p>Family</p>
                        <div className="navigate">
                            <img src="images/arrow_forward.svg" alt="read more" className="img-fluid" />
                        </div>
                    </div>
                    <div className="category-block bg-white">
                        <p>Sport</p>
                        <div className="navigate">
                            <img src="images/arrow_forward.svg" alt="read more" className="img-fluid" />
                        </div>
                    </div>
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
  )
}

export default Categories