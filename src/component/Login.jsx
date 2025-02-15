const Login = () => {
    return (
        <>
            <div className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-zinc-800 animate-gradient">
                <div className="w-full max-w-[900px] mx-auto bg-white p-4 rounded-b-lg rounded-t-lg">
                    <div className="flex flex-col xl:flex-row md:flex-row gap-5 items-center justify-center">
                        <div className="w-1/2">
                            <img src="src/assets/images/login.jpg" alt="Background" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-80">
                            <div className="flex flex-col gap-5">
                                <h1 className="text-3xl font-bold">Welcome Back!</h1>
                                <p>
                                    Log in to your account to continue and access your personalized features.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <input type="text" placeholder="Enter Email" className="w-full text-md placeholder:text-sm border border-gray-300 focus:outline-0 p-2 px-4 duration-500 hover:border-green-500 rounded-full" />
                                <input type="password" placeholder="Password" className="w-full text-md placeholder:text-sm border border-gray-300 focus:outline-0 p-2 px-4 duration-500 hover:border-green-500 rounded-full" />                             
                                <p>
                                    <a href="#" className="text-sm hover:text-green-500 duration-500">Forgot Password</a>
                                </p>
                                <button type="submit" className="w-full text-white font-bold bg-green-400 text-md duration-500 cursor-pointer p-2 rounded-full hover:bg-green-600">Sign In</button>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <div className="text-sm">
                                    Don't have an account? <a href="#" className="font-bold hover:text-green-500 duration-500">Sign Up</a>
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