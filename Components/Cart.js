import React from 'react'

const Cart = ({setShowModal, images, activeImg, cart, handleDelete, isCartOpen }) => {
  return (
    <div className="relative">
        <img src= {images[activeImg]} alt="" className="w-full aspect-square object-cover md:rounded-xl " onClick={() => setShowModal(true)} />
        {isCartOpen && (
            <div className="absolute md:hidden right-1/2 lg:right-4 transform translate-x-1/2 scale-110 -translate-y-1/2 top-1/2 bg-white shadow-2xl p-4 w-80 rounded-lg z-50">
            <h4 className="font-bold mb-2">Cart</h4>
            <hr class="h-px my-4 bg-gray-200 border-0 " />
            {cart <= 0? (
                <p className="text-gray-500 text-center my-4">Your cart is empty</p>
            ): 
            (
                <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2-">
                    <img className= "w-12 rounded-md" src={images[activeImg]} alt="" />
                    <div className="flex flex-col">
                    <p>Fall Limited Sneakers</p>
                    <p>$125.00 x {cart} <span className="font-bold">${125.00 * cart}</span></p>
                    </div>
                    <img onClick={handleDelete} className="w-4 h-4" src="/images/icon-delete.svg" alt="" />
                </div>
                <button className="px-10 py-2 rounded-lg mt-2 font-bold bg-amber-600">Checkout</button>
                </div>
                // <p>{125 * count}</p>
            )}
            </div>
        )}
    </div>
  )
}

export default Cart
