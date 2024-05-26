import carouselOne from "../../assets/pexels-ella-olsson-572949-1640771.jpg";
import carouselTwo from "../../assets/pexels-kampus-7964669.jpg";
import carouselThree from "../../assets/pexels-kampus-8629042.jpg";

const Banner = () => {
    return (
        <div>
            <div className="rounded">
                <div className="carousel w-full h-[680px] relative">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={carouselTwo} className="w-full brightness-75" />
                        <div className="absolute hidden md:flex justify-between text-xs transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Prev</a>
                            <a href="#slide2" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Next</a>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h3 className="text-white text-3xl font-bold">Taste the World: Your Culinary Adventure Awaits</h3>
                            <p className="text-white font-semibold">You are a seasoned chef or a beginner in the kitchen, our platform offers a wide range of recipes from around the globe.</p>
                            <div className="mt-4">
                                <button className="btn btn-primary mr-4">See Recipes</button>
                                <button className="btn btn-secondary">Add Recipes</button>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={carouselThree} className="w-full brightness-75" />
                        <div className="absolute hidden md:flex justify-between text-xs transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Prev</a>
                            <a href="#slide3" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Next</a>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h3 className="text-white text-3xl font-bold">Savor Every Bite: Discover Delicious Recipes Here</h3>
                            <p className="text-white font-semibold">From mouthwatering mains to delectable desserts, discover new flavors, techniques, and inspiration to elevate your cooking experience.</p>
                            <div className="mt-4">
                                <button className="btn btn-primary mr-4">See Recipes</button>
                                <button className="btn btn-secondary">Add Recipes</button>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={carouselOne} className="w-full brightness-75" />
                        <div className="absolute hidden md:flex justify-between text-xs transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Prev</a>
                            <a href="#slide1" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Next</a>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h3 className="text-white text-3xl font-bold">Whisk Away with Flavor: Explore Our Recipes</h3>
                            <p className="text-white font-semibold">Join our community today and embark on a journey of culinary exploration!</p>
                            <div className="mt-4">
                                <button className="btn btn-primary mr-4">See Recipes</button>
                                <button className="btn btn-secondary">Add Recipes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
