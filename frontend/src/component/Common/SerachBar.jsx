import {Search, X } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
    const [searcBar, setSearchbar] = useState("");
    const [isopen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isopen);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search :",  searcBar);
        setIsOpen(false);
    }
    return (
        <>

            {
                isopen ? (
                    <div className={`fixed left-0 top-2 lg:top-auto right-0 w-full z-50 bg-white h-full lg:h-12 p-3 transition-all duration-500 ${isopen ? "translate-y-0" : "translate-y-full"}`}>
                        <form onSubmit={handleSearch} className="w-full mt-10 lg:mt-0 lg:h-full flex justify-center items-center p-2">
                            <div className="relative w-full max-w-xl">
                                <input type="text" placeholder="Search" value={searcBar} onChange={(e) =>setSearchbar(e.target.value)} className="bg-gray-100 rounded-sm p-3 w-full focus:outline-0 hover:border border-red-500 transition-all duration-500" />
                                <button type="submit" className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"><Search className="h-5 w-5" /> </button>
                                
                            </div>
                            <button type="button" onClick={handleSearchToggle} className="absolute right-4 top-4 lg:top-1/2 transform -translate-y-1/2 cursor-pointer">
                                <X />
                            </button>
                        </form>
                    </div>

                    
                ) : (
                    <button onClick={handleSearchToggle}><Search className="h-5 w-5 cursor-pointer" /></button>
                )
            }
        </>
    )
}
export default SearchBar;