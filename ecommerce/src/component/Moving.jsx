import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import img1 from '/src/assets/25.webp';
import img3 from '/src/assets/27.webp';
import img4 from '/src/assets/28.webp';
import img5 from '/src/assets/29.webp';

function Moving() {
    const imglist = [img1, img3, img4, img5];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        // Directly go to the first image if currently on the last image
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imglist.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => {
            // If we are at the first image, go to the last image
            if (prevIndex === 0) {
                return imglist.length - 1; // Go to the last image
            }
            return prevIndex - 1; // Go to the previous image
        });
    };

    // Effect for automatic image change every 2 seconds
    useEffect(() => {
        const intervalId = setInterval(nextImage, 2000);
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div 
                className="flex transition-transform duration-500" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide based on current index
            >
                {imglist.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`carousel-${index}`}
                        className="w-full h-auto flex-shrink-0" // Ensure images take full width
                    />
                ))}
            </div>
            <span 
                onClick={nextImage} 
                className="absolute top-[50%] right-4 transform -translate-y-1/2 text-2xl cursor-pointer"
            >
                <button><FaArrowRight /></button>
            </span>
            <span 
                onClick={prevImage} 
                className="absolute top-[50%] left-4 transform -translate-y-1/2 text-2xl cursor-pointer"
            >
                <button><FaArrowLeft /></button>
            </span>
        </div>
    );
}

export default Moving;
