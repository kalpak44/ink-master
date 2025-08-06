import React, {useEffect, useMemo, useState} from 'react';
import "./HomePage.css";

export const HomePage = () => {
    // Testimonials data
    const testimonials = useMemo(
        () => [
            {text: '“Absolutely love the fluid background and the instant mockup!”', author: 'Alex M.'},
            {text: '“Seamless experience, vibrant prints, and stunning visuals.”', author: 'Jordan P.'},
            {text: '“The interactive builder made customizing so fun and easy!”', author: 'Taylor S.'},
            {text: '“Top-notch quality and fast delivery—highly recommend!”', author: 'Casey L.'},
            {text: '“Loved the design tool—super intuitive!”', author: 'Morgan B.'},
            {text: '“Amazing quality, will buy again.”', author: 'Riley K.'},
            {text: '“Exceeded my expectations!”', author: 'Sam T.'},
        ],
        []
    );

    // State for rotating testimonials
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cycle testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials]);

    return (
        <>
            {/* Page Content */}
            <div className="relative z-10 flex flex-col min-h-screen text-white font-sans">

                {/* Header stays at top */}
                <header className="w-full px-4 py-6 sm:px-6 md:px-12 lg:px-24 xl:px-48 text-center animate-fade">
                    <h1 className="font-marker text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        InkMaster Prints
                    </h1>
                    <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-300">
                        Your Imagination, Our Craft
                    </p>
                </header>

                {/* Centered Hero and Testimonials */}
                <main
                    className="flex flex-col items-center justify-center flex-grow px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 space-y-12 sm:space-y-16">
                    {/* Hero Section */}
                    <section className="text-center animate-fade">
                        <h2 className="font-marker text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                            Build Your<br/>Dream Tee
                        </h2>
                        <p className="mt-3 text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-lg">
                            Preview your custom T-shirt designs in real-time—perfect for gifts and lasting memories.
                        </p>
                        <a
                            href="/constructor"
                            className="mt-6 inline-block font-marker uppercase text-xs sm:text-sm md:text-base lg:text-lg px-4 py-2 sm:px-6 sm:py-3 border-2 sm:border-4 border-white transition-transform transform hover:scale-105"
                        >
                            Start Constructor
                        </a>
                    </section>

                    {/* Testimonials Section */}
                    <section id="testimonials" className="w-full text-center">
                        <div className="relative h-32 sm:h-40 md:h-48 flex items-center justify-center">
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className={`absolute px-4 py-3 sm:px-6 sm:py-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm max-w-sm sm:max-w-md text-center transition-opacity duration-1000 ease-in-out
                    ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <p className="italic text-xs sm:text-sm md:text-base">{item.text}</p>
                                    <p className="mt-2 font-marker text-[.6rem] sm:text-xs md:text-sm text-right">— {item.author}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="px-4 py-6 sm:px-6 md:px-12 lg:px-24 xl:px-48 text-center text-gray-400 animate-fade">
                    <div className="mt-6">
                        <h3 className="font-marker text-sm sm:text-base">Get in Touch</h3>
                        <p className="mt-1 text-xxs sm:text-xs text-gray-300">
                            Questions? Feedback? Let’s talk!
                        </p>
                        <div className="mt-3 space-y-1 text-xxs sm:text-xs text-gray-200">
                            <p>
                                Email: <a href="mailto:info@inkmasterprints.com"
                                          className="underline text-xxs sm:text-xs">info@inkmasterprints.com</a>
                            </p>
                            <p>
                                Phone: <a href="tel:+18001234567" className="underline text-xxs sm:text-xs">+1 (800)
                                123-4567</a>
                            </p>
                            <p>
                                Follow us: <a href="#" className="underline text-xxs sm:text-xs">Instagram</a> • <a
                                href="#" className="underline text-xxs sm:text-xs">Facebook</a>
                            </p>
                        </div>
                    </div>
                    <p className="mt-4 text-xxs sm:text-xs">&copy; {new Date().getFullYear()} InkMaster Prints. All
                        rights reserved.</p>
                </footer>
            </div>
        </>
    );
};
