import { Link } from "react-router-dom";
import { MoveUpRight } from 'lucide-react';

const Banner = () => {
    return (
        <>
            <section className="flex bg-white">
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-5 h-screen">
                    <div className="relative  h-full">
                        <img src="src/assets/images/banner.jpg" className="w-full h-full object-cover" alt="" />
                        <div className="container mx-auto">
                            <div className="absolute top-1/2 transform -translate-y-1/2 items-center px-4 lg:px-0">
                                <div className="bg-black p-5 px-10 py-10 rounded-2xl w-full lg:max-w-2xl">
                                    <h2 className="text-white text-5xl lg:text-7xl font-semibold mb-4">Casual Chic Everyday</h2>
                                    <p className="text-white text-lg">
                                        Achieve effortless style every day with our casual chic pieces.
                                    </p>
                                    <div className="flex flex-col lg:flex-row gap-2 mt-10">
                                        <Link to="#" className="bg-white p-3 px-10 inline-flex text-center text-black rounded-full hover:bg-red-500 hover:text-white transition duration-500">
                                            Get Started
                                            <MoveUpRight className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}


export default Banner;