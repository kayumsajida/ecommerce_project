import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const topTrending = [
    {
        _id: "1",
        name: "Ribbed cotton-blend top",
        price: "39.99",
        images: [
            {
                url: "https://picsum.photos/500/500?random=1",
                altText: "Ribbed cotton-blend top",
            }
        ]
    },
    {
        _id: "2",
        name: "Faux-leather trousers",
        price: "79.99",
        images: [
            {
                url: "https://picsum.photos/500/500?random=2",
                altText: "Ribbed cotton-blend top",
            }
        ]
    },
    {
        _id: "3",
        name: "Belt wrap dress",
        price: "129.99",
        images: [
            {
                url: "https://picsum.photos/500/500?random=3",
                altText: "Ribbed cotton-blend top",
            }
        ]
    },
    {
        _id: "4",
        name: "Double-button trench coat",
        price: "229.99",
        images: [
            {
                url: "https://picsum.photos/500/500?random=4",
                altText: "Ribbed cotton-blend top",
            }
        ]
    },
    {
        _id: "5",
        name: "Ribbed cotton-blend top",
        price: "39.99",
        images: [
            {
                url: "https://picsum.photos/500/500?random=5",
                altText: "Ribbed cotton-blend top",
            }
        ]
    },
    {
        _id: "6",
        name: "Ribbed cotton-blend top",
        price: "39.99",
        images: [
            {
                url: "https://picsum.photos/500/500?random=6",
                altText: "Ribbed cotton-blend top",
            }
        ]
    },
    {
        _id: "7",
        name: "Ribbed cotton-blend top",
        price: "39.99",
        images: [
            {
                url: "https://picsum.photos/500/500?random=7",
                altText: "Ribbed cotton-blend top",
            }
        ]
    },
    {
        _id: "8",
        name: "Ribbed cotton-blend top",
        price: "39.99",
        images: [
            {
                url: "https://picsum.photos/500/500?random=8",
                altText: "Ribbed cotton-blend top",
            }
        ]
    },
];

const TopTrending = () => {

    const scrollRef = useRef();

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };
    const scrollLeft = () => {        
        scrollRef.current.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      };
      
      const scrollRight = () => {        
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      };

    useEffect(() => {
        const slider = scrollRef.current;
        slider.addEventListener('scroll', updateScrollButtons);
        updateScrollButtons();

        return () => {
          slider.removeEventListener('scroll', updateScrollButtons);
        };
    }, []);
    
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
                    <div className="flex justify-end gap-2 mb-3">
                    <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`border border-gray-400 w-8 h-8 rounded-sm flex items-center justify-center cursor-pointer ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`border border-gray-400 w-8 h-8 rounded-sm flex items-center justify-center cursor-pointer ${
            !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <MdKeyboardArrowRight />
        </button>
                    </div>
                    <div className="">
                        <div ref={scrollRef} className="overflow-x-scroll flex space-x-6 relative scrollbar-hide snap-x snap-mandatory">
                            {topTrending.map((product) => (
                                <div
                                    key={product._id}
                                    className="min-w-full sm:min-w-[50%] lg:min-w-[30%] snap-start px-2">
                                    <div className="bg-white overflow-hidden">
                                        <img src={product.images[0]?.url} className="w-full object-cover rounded-2xl" alt={product.images[0]?.altText || product.name} />
                                        <div className="py-2 px-2">
                                            <h2 className="text-1xl mb-2 font-bold">{product.name}</h2>
                                            <p className="text-black font-bold text-2xl">$ {product.price}</p>
                                            <div className="mt-4">
                                                <Link to={`/product/${product._id}`} className="p-2 bg-red-500 text-white rounded-full px-10 text-sm hover:bg-red-700 transition-all duration-500">Add to Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopTrending;