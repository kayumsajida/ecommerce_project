import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    // const[email, setEmail] = useState();
    // const[password, setPassword] = useState();

    const HandleSubmit = (e) => {
        e.preventDefault();
        alert(" email " + mainlogin.email + " password " + mainlogin.password);
    }


    const [mainlogin, setMainlogin] = useState({
        email: "kayum",
        password: "kayum@123"
    });

    const HandleInput = (e) => {
        const { name, value } = e.target
        setMainlogin({
            ...mainlogin,
            [name]: value
        })
    }

    return (
        <>
            <div className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-zinc-800 animate-gradient">
                <div className="w-full max-w-[900px] mx-auto bg-white p-4 rounded-b-lg rounded-t-lg pt-15 pb-15">
                    <div className="flex flex-col xl:flex-row md:flex-row gap-5 items-center justify-center">
                        <div className="w-1/2">
                            <img src="src/assets/images/login.svg" className="w-full h-full object-cover" alt="Login" />
                        </div>
                        <div className="w-1/2 px-10">
                            <div className="flex flex-col gap-5">
                                <Link to="/" className="text-4xl font-bold">
                                    Ecommerce Project
                                </Link>
                                <h1 className="text-lg font-bold">Log In Your Account</h1>
                                <p>
                                    Log in to your account to continue and access your <strong>personalized features</strong>.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <input type="text" placeholder="Enter Email" name="email" onChange={HandleInput} className="w-full text-md placeholder:text-sm border border-gray-300 focus:outline-0 p-2 px-4 duration-500 hover:border-red-500 rounded-full" />
                                <input type="password" placeholder="Password" name="password" onChange={HandleInput} className="w-full text-md placeholder:text-sm border border-gray-300 focus:outline-0 p-2 px-4 duration-500 hover:border-red-500 rounded-full" />
                                <p>
                                    <a href="/forgot-password" className="text-sm hover:text-red-500 duration-500">Forgot Password</a>
                                </p>
                                <button type="submit" onClick={HandleSubmit} className="w-full text-white font-bold bg-red-500 text-md duration-500 cursor-pointer p-2 rounded-full hover:bg-red-600">Sign In</button>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <div className="text-sm">
                                    Don't have an account? <Link to="/signup" className="font-bold hover:text-red-500 duration-500">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
