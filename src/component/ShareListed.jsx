const ShareListed = () => {
    return (
        <>
            <section className="flex pb-10 px-4 lg:px-20">
                <div className="flex items-center justify-between container mx-auto bg-neutral-100 rounded-2xl p-20 bg-[url('src/assets/images/UEHeroPattern.webp')]">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-medium mb-5">Unlisted Shares</h2>
                        <div className="flex items-center pb-3 leading-8 text-lg text-black font-medium">
                            <span className="mr-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#0F1016" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </span>
                            Start investing with just 1 share
                        </div>
                        <div className="flex items-center pb-3 leading-8 text-lg text-black font-medium">
                            <span className="mr-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#0F1016" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </span>
                            No commissions, complete transparency
                        </div>
                        <div className="flex items-center pb-3 leading-8 text-lg text-black font-medium">
                            <span className="mr-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#0F1016" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </span>
                            No commissions, complete transparency
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/one.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/two.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/one.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/one.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/one.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/one.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ShareListed;