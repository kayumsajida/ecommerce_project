import { Link } from "react-router-dom";

const TopTrending = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row gap-4 pt-20 pb-2">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="flex flex-wrap lg:flex-row items-center justify-between mb-8">
                        <div className="flex flex-col">
                            <h2 className="text-2xl lg:text-4xl font-bold">
                                Top Trending
                            </h2>
                           <p className="text-neutral-500 mt-3">Browse our Top Trending: the hottest picks loved by all.</p>
                        </div>

                        <a href="#" className="text-neutral-600 font-medium underline hover:text-red-500 transition duration-500">See More</a>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                        <div className="bg-white">
                            <img src="src/assets/images/women-8.jpg" className="w-full object-cover rounded-2xl" alt="" />
                            <div className="py-2 px-2">
                                <h2 className="text-1xl mb-2 font-bold">Ribbed cotton-blend top</h2>
                                <p className="text-black font-bold text-2xl">$39.99</p>
                                <div className="mt-4">
                                    <Link to="#" className="p-2 bg-red-500 text-white rounded-full px-10 text-sm hover:bg-red-700 transition-all duration-500">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white">
                            <img src="src/assets/images/women-172.jpg" className="w-full object-cover rounded-2xl" alt="" />
                            <div className="py-2 px-2">
                                <h2 className="text-1xl mb-2 font-bold">Faux-leather trousers</h2>
                                <p className="text-black font-bold text-2xl">$79.99</p>
                                <div className="mt-4">
                                    <Link to="#" className="p-2 bg-red-500 text-white rounded-full px-10 text-sm hover:bg-red-700 transition-all duration-500">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white">
                            <img src="src/assets/images/women-84.jpg" className="w-full object-cover rounded-2xl" alt="" />
                            <div className="py-2 px-2">
                                <h2 className="text-1xl mb-2 font-bold">Belt wrap dress</h2>
                                <p className="text-black font-bold text-2xl"><span className="line-through font-normal">$98.00</span> $129.99</p>
                                <div className="mt-4">
                                    <Link to="#" className="p-2 bg-red-500 text-white rounded-full px-10 text-sm hover:bg-red-700 transition-all duration-500">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white">
                            <img src="src/assets/images/women-103.jpg" className="w-full object-cover rounded-2xl" alt="" />
                            <div className="py-2 px-2">
                                <h2 className="text-1xl mb-2 font-bold">Double-button trench coat</h2>
                                <p className="text-black font-bold text-2xl">$229.99</p>
                                <div className="mt-4">
                                    <Link to="#" className="p-2 bg-red-500 text-white rounded-full px-10 text-sm hover:bg-red-700 transition-all duration-500">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopTrending;