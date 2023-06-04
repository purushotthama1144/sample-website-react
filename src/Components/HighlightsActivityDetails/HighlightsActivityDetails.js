import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import './HighlightsActivityDetails.css'

function HighlightsActivityDetails() {
    const { name } = useParams();
    const [categoryData, setcategoryData] = useState(null);

    useEffect(() => {
        const fetchcategories = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/activities/${name}`);
                setcategoryData(response.data);
            } catch (error) {
                console.log('Error:', error.message);
            }
        };
        fetchcategories();
    }, []);

    return (
        <div className='detail_page'>
            {categoryData ? (
                <div className='container container-medium-width'>
                    <div className='detail_page_banner pos-rel'>
                        <div className="bg-image" style={{ backgroundImage: `url(${categoryData.image})` }}></div>
                        <h1 className="banner_taital">{categoryData.name}</h1>
                    </div>
                    <div className='detail_pag_content'>
                        <p>
                            {categoryData.description}
                        </p>
                        <ul className='activities_list'>
                        {categoryData.activities.map((item, index) => (     
                            <li key={index} className="activities">
                                {item.name}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div>Please wait...</div>
            )}
        </div>
    )
}

export default HighlightsActivityDetails