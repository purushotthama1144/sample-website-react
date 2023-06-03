import React from 'react'
import './Highlights.css'

function Highlights() {
  return (
    <div className="section">
        <div className="container container-medium-width">
            <h2 className="block_title">
                Highlights
            </h2>
            <div className="highlight-block-outer n-margin fl-bx">
                <article className="highlight-block  w-33">
                    <div className="bg-box">
                        <div className="image-block">
                            <img src="https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"
                                alt="Image" className="img-fluid border-top-radius" />
                        </div>
                        <div className="text-block clearfix">
                            <h3 className="text-title">
                                Surfing
                            </h3>
                            <p>Best Hawaiian islands for surfing.</p>
                            <div className="read-more">
                                <img src="images/arrow_forward.svg" alt="read more" />
                            </div>
                        </div>
                    </div>
                </article>
                <article className="highlight-block w-33">
                    <div className="bg-box">
                        <div className="image-block">
                            <img src="https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"
                                alt="Image" className="img-fluid border-top-radius" />
                        </div>
                        <div className="text-block clearfix">
                            <h3 className="text-title">
                                Hula
                            </h3>
                            <p>Try it yourself.</p>
                            <div className="read-more">
                                <img src="images/arrow_forward.svg" alt="read more" />
                            </div>
                        </div>
                    </div>
                </article>
                <article className="highlight-block w-33">
                    <div className="bg-box">
                        <div className="image-block">
                            <img src="https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"
                                alt="Image" className="img-fluid border-top-radius" />
                        </div>
                        <div className="text-block clearfix">
                            <h3 className="text-title">
                                Vulcanoes
                            </h3>
                            <p>Volcanic conditions can change at any time.</p>
                            <div className="read-more">
                                <img src="images/arrow_forward.svg" alt="read more" />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
  )
}

export default Highlights