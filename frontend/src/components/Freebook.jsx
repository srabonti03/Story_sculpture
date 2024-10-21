import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../Books/list.json";
import BookCard from "./BookCard";

function Freebook() {
    const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mb-4">
                <h1 className="font-semibold text-2xl pb-2">Enjoy Our Free Books Available for Reading!</h1>
                <p>Browse through our curated collection of free books across various genres. Whether you're looking for a captivating novel, an informative non-fiction title, or a quick read, there's something here for everyone. Start your reading adventure today!</p>
            </div>
            <div>
                <Slider {...settings}>
                    {filterData.map((item) => (
                        <BookCard key={item.id} item={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Freebook;
