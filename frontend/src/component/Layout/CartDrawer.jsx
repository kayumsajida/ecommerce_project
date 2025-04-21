import {X} from "lucide-react";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({cartOpen, toggleCart}) => {
    return (        
        <>
            <div className={`fixed top-0 right-0 w-full lg:w-2/6 h-full transition-all duration-500 z-50 bg-white shadow-lg flex flex-col ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>                
                <div className="flex justify-between py-4 px-4">
                    <h2 className="text-lg font-bold">Your Cart</h2>
                    <button onClick={toggleCart} className="cursor-pointer"><X /></button>
                </div>
                <div className="flex-1 pt-0 pl-4 pr-4 pb-4 overflow-y-auto">
                    <CartContent />
                </div>

                <div className="p-4 sticky bottom-0">
                    <button className="w-full bg-black text-white py-2 rounded-sm cursor-pointer hover:bg-gray-800 transition-all duration-500">Checkout</button>
                    <p className="text-sm tracking-tight text-center mt-2 text-gray-800">
                        Shipping, taxes, and discount calculated at Checkout.
                    </p>
                </div>
            </div>
        </>
    )
}

export default CartDrawer;