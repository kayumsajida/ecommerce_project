import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <>
            <footer className="bg-neutral px-4 lg:px-0 pt-15 pb-15">
                <div className="container mx-auto">
                    <div className="flex flex-wrap lg:flex-nowrap gap-5">
                        <div className="w-full mb-3 lg:mb-0 xl:mb-0 lg:w-1/3 xl:w-1/3">
                            <h2 className="text-white text-2xl mb-7 font-bold">Ecommerce Project</h2>
                            <p className="text-neutral-400 font-normal">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="w-full mb-3 lg:mb-0 xl:mb-0 lg:w-1/4 xl:w-1/3 lg:pl-20">
                            <h2 className="text-sm text-white mb-8 lg:text-lg font-medium">Infomation</h2>
                            <div className="flex flex-col gap-4">
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">About us</Link>
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">Our Stories</Link>
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">Size Guide</Link>
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">Contact us</Link>
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">Career</Link>
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">My Account</Link>
                            </div>
                        </div>
                        <div className="w-full mb-3 lg:mb-0 xl:mb-0 lg:w-1/4 xl:w-1/3">
                            <h2 className="text-sm text-white mb-8 lg:text-lg font-medium">Customer Services</h2>
                            <div className="flex flex-col gap-4">
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">Shipping</Link>
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">Return & Refund</Link>
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">Privacy Policy</Link>
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">Terms & Conditions</Link>
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">Orders FAQs</Link>
                                <Link to="#" className="text-neutral-400 hover:text-red-500 transition duration-500">My Wishlist</Link>
                            </div>
                        </div>
                        <div className="w-full mb-3 lg:mb-0 xl:mb-0 lg:w-1/4 xl:w-1/3">
                            <h2 className="text-sm text-white mb-8 lg:text-lg font-medium">Newletter</h2>
                            <div className="flex flex-col gap-4">
                                <input type="text" className="form-control border border-white text-black text-lg bg-white p-2 px-4 rounded-full focus:border-amber-100 placeholder:text-sm" placeholder="Enter Email"  />
                                <p className="text-neutral-400 font-normal text-sm">
                                    By clicking subcribe, you agree to the Terms of Service and Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center border-t-1 border-b-1 border-neutral-300/25 mt-10 py-5">
                        <div className="text-neutral-400 mb-3 lg:mb-0">
                            © 2025 Ecommerce Project, All rights reserved.
                        </div>
                        <div className="flex gap-4">
                            <Link href="https://facebook.com" target="_blank">
                                <Facebook className="w-12 h-12 border border-white text-white p-2 rounded-full hover:bg-white transition duration-500 hover:text-black" />
                            </Link>
                            <Link href="https://facebook.com" target="_blank">
                                <Instagram className="w-12 h-12 border border-white text-white p-2 rounded-full hover:bg-white transition duration-500 hover:text-black" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <h2 className="text-white lg:text-lg font-medium">Disclaimer</h2>
                        <p className="text-neutral-400 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim maxime est nostrum odit, ad, illo perspiciatis debitis cupiditate cum iste suscipit nam placeat aut impedit ab architecto odio veniam!
                        </p>
                        <p className="text-neutral-400 text-sm">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                        <p className="text-neutral-400 text-sm">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <p className="text-neutral-400 text-sm">
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                        <p className="text-neutral-400 text-sm">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}


export default Footer;