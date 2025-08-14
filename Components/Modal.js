import React from 'react'

const Modal = ({images, setShowModal, activeImg, showModal, handleModalClick, prevImg, nextImg, setActiveImg}) => {
  return (
    <div>
      {
        showModal && (
        <div onClick={()=> setShowModal(false)} className="hidden fixed bg-black/50 min-h-screen z-10 w-full h-100vh  justify-center items-center top-0 left-0 md:flex">
            <div onClick={handleModalClick} className=" p-4  ">
                <div className=" flex  flex-col items-center">
                    
                    <div className=" main-product   flex flex-col gap-4 p-4 md:w-2/4" >
                        <div onClick={handleModalClick} className="flex justify-end ">
                            <div ><img onClick={()=> setShowModal(false)} className="w-6" src="/images/icon-close.svg" alt="" /></div>
                        </div>
                            <div className="relative">
                            <img src= {images[activeImg]} alt="" className="w-full aspect-square object-cover  md:rounded-xl" onClick={() => setShowModal(true)} />
                            <div onClick={prevImg} className="absolute top-1/2 left-1 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white w-8 h-8 flex items-center justify-center "><img src="/images/icon-previous.svg" alt="" /></div>

                            <div onClick={nextImg} className="absolute top-1/2 right-1.5 transform translate-x-1/2 -translate-y-1/2 rounded-4xl bg-white w-8 h-8 flex items-center justify-center "><img src="/images/icon-next.svg" alt="" /></div>
                            </div>


                            <div className=" flex flex-row justify-between  h-20 varieties">
                            {
                                images.map((image, index)=>(
                                <img key ={index} src={image} alt={index+1} className={`w-20 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 ${activeImg === index ? "border-4 border-amber-300": ""}`} onClick={() => setActiveImg(index)}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>)
        }
    </div>
  )
}

export default Modal
