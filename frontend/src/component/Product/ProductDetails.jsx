import { useEffect, useState } from "react";
import { BiBrightness } from "react-icons/bi";

const selectedProduct = {
    name: "Ribbed cotton-blend top",
    price: 50.99,
    originalPrice: 39.99,
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Ribbed cotton-blend top",
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Faux-leather trousers",
        },
    ],
    brand: "Raymond",
    colors: ["red", "black", "blue"],
    size: ["S", "M", "L", "XL"],
    material: "Leather",
};

const ProductDetails = () => {
    const[mainImage, setMainImage] = useState("");

    useEffect(() => {
        if(selectedProduct?.image?.length > 0) {
            setMainImage(selectedProduct.image[0].url);
        }
    }, [selectedProduct])
    return (
        <>
            <section className="pt-10 pb-10">
                <div className="container mx-auto">
                    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                        <div className="flex flex-col md:flex-row">
                            {/* Left Thumnails */}
                            <div className="hidden md:flex flex-col gap-2 space-x-4 mr-2">
                                {
                                    selectedProduct.image.map((image, index) => (
                                        <img key={index} onClick={() => setMainImage (image.url)} className={`h-20 w-20 object-cover rounded border border-gray-200 cursor-pointer ${mainImage === image.url ? "border border-gray-950" : ""}`} src={image.url} alt={image.altText || `thumnails ${index}`} />
                                    ))
                                }
                            </div>
                            {/* main images */}
                            <div className="md:w-1/2">
                                <img src={mainImage} className="w-full h-auto object-cover rounded-lg" alt="Main Image" />
                            </div>

                            {/* thumnail mobile view  */}
                            <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4 mt-4">
                                {
                                    selectedProduct.image.map((image, index) => (
                                        <img key={index} className="h-20 w-20 object-cover rounded border border-gray-200" src={image.url} alt={image.altText || `thumnails ${index}`} />
                                    ))
                                }
                            </div>

                            {/* Right side */}

                            <div className="md:w-1/2 md:ml-6">
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                                    <p className="text-gray-600 line-through mb-1">
                                        {selectedProduct.price}
                                    </p>
                                    <p className="text-2xl mb-4 font-bold">
                                        {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
                                    </p>
                                    <p className="text-gray-700 text-lg mb-2">
                                        {selectedProduct.discription}
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-700 mb-2">Colors:</p>
                                    <div className="flex gap-2">
                                        {
                                            selectedProduct.colors.map((color) => (
                                                <button key={color} className="w-8 h-8 rounded-full border cursor-pointer" style={{
                                                    backgroundColor: color.toLocaleLowerCase(),
                                                    filter: "Brightness:(0.5)"
                                                }}>
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-gray-700 mb-2">Quantity:</p>
                                    <button className="w-8 h-8 border border-gray-300 rounded cursor-pointer">-</button>
                                    <span className="text-lg px-4">1</span>
                                    <button className="w-8 h-8 border border-gray-300 rounded cursor-pointer">+</button>
                                </div>

                                <div className="mb-4">
                                    <p className="text-gray-700 mb-2">Size:</p>
                                    <div className="flex gap-2">
                                        {
                                            selectedProduct.size.map((size) => (
                                                <button key={size} className="px-4 py-2 border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition-all duration-500 cursor-pointer">
                                                    {size}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <button className="w-full bg-black text-white rounded px-4 py-2 cursor-pointer hover:bg-gray-900 transition duration-500">Add to Cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ProductDetails;