import React from 'react'
import Modal from './Modal'
import Cart from './Cart'
import Details from './Details'

const Main = ({images, setShowModal, activeImg, isCartOpen, cart, handleDelete, showModal, handleModalClick, prevImg, nextImg, increaseBtn, decreaseBtn, setActiveImg, count, handleAdd}) => {
  return (
    <div className="container flex flex-col max-w-5xl mx-auto h-[80vh]  items-center justify-between  gap-16 md:p-8 md:flex-row md:items-center ">
        {/* <div className=" flex  flex-col items-center products bg-red-500"> */}
          <div className="main-product relative w-full flex flex-col gap-8 md:p-2  md:w-1/2">
            <Cart setShowModal ={setShowModal} images={images} activeImg={activeImg} cart={cart} handleDelete={handleDelete} isCartOpen={isCartOpen} />

            <Modal
                images={images} setShowModal={setShowModal} activeImg={activeImg} showModal={showModal} handleModalClick={handleModalClick} prevImg={prevImg} nextImg={nextImg} setActiveImg={setActiveImg}
             />
            <div className="hidden md:flex flex-row justify-between   h-20 varieties">
              {
                images.map((image, index)=>(
                  <img key ={index} src={image} alt={index+1} className={`w-20 rounded-lg cursor-pointer ${activeImg === index ? "border-4 border-amber-300": ""}`} onClick={() => setActiveImg(index)}/>
                ))
              }
            </div>
            <div onClick={prevImg} className="absolute top-1/2 left-1.6 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-white w-8 h-8 flex items-center justify-center md:hidden"><img src="/images/icon-previous.svg" alt="" /></div>

            <div onClick={nextImg} className="absolute top-1/2 right-1.5 transform -translate-x-1/2 -translate-y-1/2 rounded-4xl bg-white w-8 h-8 flex items-center justify-center md:hidden"><img src="/images/icon-next.svg" alt="" /></div>
        </div>
          
          
        {/* </div> */}
        <Details increaseBtn={increaseBtn} decreaseBtn={decreaseBtn} handleAdd={handleAdd} count={count} />
    </div>
  )
}

export default Main
