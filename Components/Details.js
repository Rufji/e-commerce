import React from 'react'

const Details = ({increaseBtn, decreaseBtn, handleAdd, count}) => {
  return (
    <div className="flex flex-col p-4 gap-4 md:w-2/4 ">
        <div>
            <span className="text-gray-700 text-sm font-semibold mb-2">Sneaker Company</span>

            <h1 className=" text-4xl font-bold">Fall Limited Edition Sneakers</h1>
        </div>

        <p className="text-gray-500 text-[15px]">
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they will withstand everything the weather can offer.
        </p>

        <div className="flex  gap-2">
            <h6 className="font-bold text-2xl">$125.00</h6>
            <span className=" px-2 py-1 text-center rounded-lg bg-gray-800 text-white scale-75">50%</span>
        </div>

        <div className="line-through">$250.00</div>

        <div className="flex flex-col md:flex-row items-center gap-4 ">
        <div className="flex w-[100%]  items-center px-4 p-1 justify-between rounded-lg bg-gray-200 md:w-[35%]" >
            <button className="w-8 h-8  flex items-center justify-center" onClick={decreaseBtn}><img src="/images/icon-minus.svg" alt="" /></button>
            <span className="w-8 text-center font-bold">{count}</span>
            <button className="w-8 h-8  flex items-center justify-center" onClick={increaseBtn}><img src="/images/icon-plus.svg" alt="" /></button>
        </div>
        <div className="w-[100%] md:w-[60%]">
            <button onClick={handleAdd} className="bg-amber-500 w-[100%] hover:bg-amber-400 px-5 py-3 rounded-lg flex items-center justify-center gap-2">
                <img className="w-4  h-4" src="/images/icon-cart.svg"
                    alt="" />
                <span className="text-sm font-bold ">Add to cart</span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Details
