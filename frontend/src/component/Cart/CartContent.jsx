import { Trash2 } from "lucide-react";

const CartContent = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color:"Red",
            quantity: 1,
            price: 15,
            Image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color:"Blue",
            quantity: 1,
            price: 15,
            Image: "https://picsum.photos/200?random=2",
        },
    ]
    return (
        <>
            {
                cartProducts.map((product, index) => (
                    <div className="flex items-center justify-between py-4 border-b">
                        <div className="flex items-start">
                            <img src={product.Image} alt={product.name} className="w-20 h-20 object-cover mr-3 rounded-sm" />
                            <div>
                                <h3>{product.name}</h3>
                                <p className="text-sm">{product.size} | color: {product.color}</p>
                                <div className="flex items-center mt-2">
                                    <button className="border rounded px-2 text-sm w-6 h-6 font-medium flex items-center justify-center ">-</button>
                                    <span className="mx-4">{product.quantity}</span>
                                    <button className="border rounded px-2 text-sm w-6 h-6 font-medium flex items-center justify-center">+</button>
                                </div>
                            </div>                                                    
                        </div>    
                        <div className="text-left">
                            $ {product.price.toLocaleString()}
                            <div className="flex flex-col items-center">
                                <button> <Trash2  className="h-4 w-4" /></button>
                            </div>
                        </div>                        
                    </div>
                ))
            }
        </>
    )
}


export default CartContent;