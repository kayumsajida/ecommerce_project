import { Link } from "react-router-dom";
const CategoriesWise = () => {
    return (
        <>
            <section className="pt-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="relative group overflow-hidden">
                            <img src="src/assets/images/grid_banner_1.jpg" className="w-full object-cover group-hover:scale-110 transition-all duration-500 rounded-2xl" alt="New Horizon" />
                            <div className="absolute top-1/2 w-full text-center p-3">
                                <div className="bg-white/50 p-4">
                                    <h2 className="text-4xl font-bold">New Horizons</h2>
                                    <Link to="/collection/all?gender=Women" className="mt-3 block font-bold hover:text-red-500 transition-all duration-500">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden">
                            <img src="src/assets/images/grid_banner_2.jpg" className="w-full object-cover group-hover:scale-110 transition-all duration-500 rounded-2xl" alt="Summer Hats" />
                            <div className="absolute top-1/2 w-full text-center p-3">
                                <div className="bg-white/50 p-4">
                                    <h2 className="text-4xl font-bold">Summer Hat</h2>
                                    <Link to="/collection/all?gender=Women" className="mt-3 block font-bold hover:text-red-500 transition-all duration-500">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-10 lg:p-0 bg-[url(src/assets/images/pattern.webp)] bg-cover bg-no-repeat rounded-2xl ml-4 mr-4 lg:ml-0 lg:mr-0">
                            <div className="lg:absolute lg:top-1/2 lg:transform lg:-translate-y-9 text-center w-full">
                                <h2 className="text-4xl text-white font-bold">Kids Collection</h2>
                                <Link to="/collection/all?gender=Kids" className="text-white mt-3 block font-bold hover:text-red-500 transition-all duration-500">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default CategoriesWise;