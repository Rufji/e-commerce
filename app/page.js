"use client";

import { useState } from "react"
import Nav from "@/Components/Nav";
import Main from "@/Components/Main";
 
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
     <Nav links= {links} toggleCart={toggleCart} isOpen={isOpen} isCartOpen={isCartOpen} setActiveLink={setActiveLink} cart ={cart} activeLink={activeLink} handleDelete ={handleDelete} activeImg ={activeImg} images = {images} handleClick={handleClick} count={count}/>
     <Main images={images} setShowModal={setShowModal} activeImg={activeImg} isCartOpen={isCartOpen} cart={cart} handleDelete={handleDelete} showModal={showModal} handleModalClick={handleModalClick} prevImg={prevImg} nextImg={nextImg} increaseBtn={increaseBtn} decreaseBtn={decreaseBtn} setActiveImg={setActiveImg} count={count} handleAdd={handleAdd}/>


      
    </div>
  );
}
