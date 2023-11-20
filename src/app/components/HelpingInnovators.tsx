'use client'

import Image from "next/image";
import { useState, useEffect } from "react";


const content = {
    title: "Helping Innovators Stay Ahead",
    carouselItems: [
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Client-Logo-Slider/Microsoft-Innominds-Solution-Partner-for-Data-AI-(Azure).png",
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM%20Inner%20Pages/CD-Assets/partners/Samsung.png",
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Client-Logo-Slider/EMC-tplogo.png",
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Client-Logo-Slider/nsn-tplogo.png",
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Client-Logo-Slider/workspot-tplogo.png",
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Client-Logo-Slider/CA-tplogo.png",
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Client-Logo-Slider/qualcom-tplogo.png",
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Client-Logo-Slider/Trimble-tplogo.png",
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Client-Logo-Slider/clustrix-tplogo.png",
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Client-Logo-Slider/Intel-tplogo.png"
    ]
};

const HelpingInnovators = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.carouselItems.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? content.carouselItems.length - 1
                : prevIndex - 1
        );
    };

    const displayIndices = [
        currentIndex,
        (currentIndex + 1) % content.carouselItems.length,
        (currentIndex + 2) % content.carouselItems.length,
        (currentIndex + 3) % content.carouselItems.length,
        (currentIndex + 4) % content.carouselItems.length,
        (currentIndex + 5) % content.carouselItems.length,
    ];

    useEffect(() => {
        const autoSwipe = setInterval(() => {
            nextImage();
        }, 3000);

        return () => {
            clearInterval(autoSwipe);
        };
    }, [currentIndex]);

    return (
        <div className="relative flex flex-col w-full items-center justify-center">
            <h1 className="text-[#404040] text-[30px] text-center font-bold my-[15px]">{content.title}</h1>
            <div className="flex items-center justify-between overflow-hidden">
                <button className="w-[20px] h-[50px]" onClick={prevImage}>&lt;</button>
                {displayIndices.map((each, index) => {
                    if (window.innerWidth >= 1024) {
                        if (index < 5) {
                            return (
                                <div key={index} className={`transition-transform duration-300 ease-in-out object-none w-[203px] relative h-[100px]`} >
                                    <Image src={content.carouselItems[each]} layout="fill" alt="image" className="mr-[20px]"/>
                                </div>
                            );
                        }
                    } else if (window.innerWidth >= 768) {
                        if (index < 3) {
                            return (
                                <div key={index} className={`transition-transform duration-300 ease-in-out`} style={{ width: "203px", height: "100px", position: "relative" }}>
                                    <Image src={content.carouselItems[each]} layout="fill" objectFit="cover" alt="image" />
                                </div>
                            );
                        }
                    } else {
                        if (index === 0) {
                            return (
                                <div key={index} className={`transition-transform duration-300 ease-in-out`} style={{ width: "203px", height: "100px", position: "relative" }}>
                                    <Image src={content.carouselItems[each]} layout="fill" objectFit="cover" alt="image" />
                                </div>
                            );
                        }
                    }

                    return null;
                })}
                <button onClick={nextImage}>&gt;</button>
            </div>
        </div>
    );
};

export default HelpingInnovators;