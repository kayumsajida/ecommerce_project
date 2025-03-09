import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="flex bg-white pt-4 pb-4 xl:px-20 items-center justify-between">
                <div className="flex container mx-auto items-center justify-between">
                <div className="flex items-center">
                    <Link to="">
                        <img src="src/assets/images/logo.webp" className="h-10" alt="" />
                    </Link>
                </div>
                <div className="flex gap-8">
                    <Link to="#" className="text-neutral-600 hover:text-black transition duration-500 font-medium">Home</Link>
                    <Link to="#" className="text-neutral-600 hover:text-black transition duration-500 font-medium">Unlisted Shares</Link>
                    <Link to="#" className="text-neutral-600 hover:text-black transition duration-500 font-medium">FDs</Link>
                    <Link to="#" className="text-neutral-600 hover:text-black transition duration-500 font-medium">Refer</Link>
                    <Link to="#" className="text-neutral-600 hover:text-black transition duration-500 font-medium">Learn</Link>
                    <Link to="#" className="text-neutral-600 hover:text-black transition duration-500 font-medium">About</Link>
                    <Link to="#" className="text-neutral-600 hover:text-black transition duration-500 font-medium">Media</Link>
                </div>
                <div className="flex gap-1 items-center">
                    <Link to="#" className="border border-neutral-300 p-1 rounded-full px-5 hover:bg-black transition duration-500 hover:text-white font-medium">Log in</Link>
                    <Link to="#" className="border border-neutral-300 p-1 rounded-full px-5  hover:bg-black transition duration-500 hover:text-white font-medium">Sign up</Link>
                </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;