import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'

function Home() {
    useEffect(() => {
        getAllNews();
    }, []);
    const [news, setNews] = useState([]);
    const getAllNews = async () => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts').then((res) => {
            setNews(res.data);
        });
    };

    // const CustomPrevArrow = (props) => (
    //     <div className="prev-arrow" onClick={props.onClick}>
    //         <i className="fas fa-chevron-left"></i>
    //     </div>
    // );

    // const CustomNextArrow = (props) => (
    //     <div className="next-arrow" onClick={props.onClick}>
    //         <i className="fas fa-chevron-right"></i>
    //     </div>
    // );

    const setting = {
        dots: true,
        infinite: true,
        speed: 5,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <div className="mx-auto">
           
            <div>
                <Slider {...setting}>
                    {news.map((value) => (
                        <div className='card'>
                            <img src={value.yoast_head_json.og_image[0].url} key={value.id} alt="..." className="image2"></img>
                            <h5 className="textHome1">{value.yoast_head_json.title}</h5>
                            <p className="textHome2">{value.yoast_head_json.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Home;