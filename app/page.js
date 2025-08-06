"use client";

import { useState } from "react"
 
export default function Home() {
  const images = [
     "/images/image-product-1.jpg",
     "/images/image-product-2.jpg",
     "/images/image-product-3.jpg",
     "/images/image-product-4.jpg",
  ]
  
  

  const  [activeImg, setActiveImg] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [cart, setCart] = useState("")
  const [isCartOpen, setIsCartopen] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { id: 'collections', label: 'Collections' },
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleCart = ()=>{
    setIsCartopen(!isCartOpen)
    setCart(count)
  }
  const handleAdd = () =>{
    setCart(count)
  }
  const handleDelete = ()=>{
    setCart("")
  }

  const handleClick = () =>{
    setIsOpen(!isOpen)
  }
  
  const nextImg = ()=>{
    setActiveImg((prev)=>(prev + 1) % images.length);
  };
  const prevImg = ()=>{
    setActiveImg((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleModalClick = (e)=>{
    e.stopPropagation()
  }
  const [count, setCount] = useState(0)

  const increaseBtn = ()=>{
    setCount(count + 1)
  }
  const decreaseBtn = ()=>{
    setCount(count - 1)
  }
  return (
    <div className="flex flex-col items-center " >
      {
        isOpen && (
      <div className="side absolute w-80 h-[100vh] top-0 left-0 bg-white flex flex-col p-4 px-8 z-1000 md:hidden">
        <span onClick={handleClick} className="mb-8 cursor-pointer"><img src="/images/icon-close.svg" alt="" /></span>
        {
          links.map(link => (
            <a key={link.id} onClick={(e)=> {setActiveLink(link.id)
            e.preventDefault()}} className={` border-amber-400 pt-8 py-4 text-sm${activeLink === link.id ? 'text-black border-b-4' : 'text-gray-500'}`} href="">{link.label}</a>
          ))
        }
      </div>
        )
      }
     
     {/* nav  */}
     <nav className="relative flex container  items-center justify-center px-4 ">
      {/* logo, menu and profile*/}
      <div className="flex items-center justify-between container border-b-gray-500 border-b-1">
        {/* logo and menu */}
        <div className="flex items-center gap-16 justify-between ">
          {/*  Hamburger Icon */}
            <button
              onClick={handleClick}
              id="menu-btn"
              className={`block hamburger md:hidden focus:outline-none ${isOpen ? "open" : ""}`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          <div className="img items-center ">
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="   menu hidden items-center justify-between gap-4 space-x-6 md:flex ">
            {
              links.map(link => (
                <a key={link.id} onClick={(e)=> {setActiveLink(link.id)
                e.preventDefault()}} className={` border-amber-400 py-6 text-sm${activeLink === link.id ? 'text-black border-b-4' : 'text-gray-500'}`} href="">{link.label}</a>
              ))
            }
          </div>
        </div>
        {/* cart and profile */}
        <div className="profile-cart  flex items-center justify-between space-x-6">
          <div className="cart-img relative">
            <button className="relative" onClick={toggleCart}>
              <img className="w-8" src="/images/icon-cart.svg" alt="" />
              {cart && <span className="absolute inline-flex items-center justify-center w-6 h-4 bg-amber-600 text-xs font-bold text-white  border-0 border-white rounded-md -top-2 -end-2 dark:border-gray-900">{count}</span>}
            </button>
            {isCartOpen && (
              <div className="absolute hidden md:block right-16 lg:right-8 transform translate-x-1/2 top-18 bg-white shadow-2xl p-4 w-80 rounded-lg z-50">
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
                        <p>$125.00 x {cart} <span className="font-bold ">${125.00 * cart}</span></p>
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
          <div className="profile"><img className="w-14 border-1 hover:border-amber-300 rounded-full" src="/images/image-avatar.png" alt="" /></div>
        </div>
      </div>
     </nav>


      <div className="container flex flex-col max-w-5xl mx-auto h-[80vh]  items-center justify-between  gap-16 md:p-8 md:flex-row md:items-center ">
        {/* <div className=" flex  flex-col items-center products bg-red-500"> */}
          <div className="main-product relative w-full flex flex-col gap-8 md:p-2  md:w-1/2">
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
                </div>
              )
            }


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
              <button onClick={handleAdd} className="bg-amber-500 w-[100%]  px-5 py-3 rounded-lg flex items-center justify-center gap-2">
                <img className="w-4  h-4" src="/images/icon-cart.svg"
                 alt="" />
                <span className="text-sm font-bold">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
