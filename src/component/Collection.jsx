import { Link } from "react-router-dom";
import { MoveUpRight } from 'lucide-react';

const Collection = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-13 px-4 lg:px-0 bg-blue-950 pt-50 pb-50 bg-[url(src/assets/images/pattern.webp)] bg-cover bg-no-repeat">
                <div className="container">
                    <h2 className="text-white text-2xl lg:text-7xl md:text-7xl w-full lg:w-4xl font-medium mx-auto text-center">
                        Turn Heads: Explore the Fall Collection
                    </h2>
                    <div class="flex flex-col lg:flex-row items-center justify-center gap-2 mt-15">
                        <Link to="/" class="w-full lg:w-52 inline-flex items-center justify-center bg-white p-3 px-10 text-black rounded-full hover:bg-red-500 hover:text-white transition duration-500">Read More 
                            <MoveUpRight className="ml-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection;