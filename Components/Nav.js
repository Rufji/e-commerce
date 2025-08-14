import React from 'react'

const Nav = ({links, toggleCart, isOpen, isCartOpen, setActiveLink, cart, activeLink, handleDelete, activeImg, images, handleClick, count}) => {
  return (
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
        <div className="profile-cart   flex items-center justify-between py-4">
          <div className="cart-img relative">
            <button className="relative" onClick={toggleCart}>
              <img className="w-6" src="/images/icon-cart.svg" alt="" />
              {cart && <span className="absolute inline-flex items-center justify-center w-6 h-4 bg-amber-600 text-xs font-bold text-white  border-0 border-white rounded-md -top-2 -end-2 dark:border-gray-900">{count}</span>}
            </button>
            {isCartOpen && (
              <div className="absolute hidden md:block right-16 lg:right-18 transform translate-x-1/2 top-18 bg-white shadow-2xl p-4 w-80 rounded-lg z-50">
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
          <div className="profile"><img className="w-10 border-1 hover:border-amber-300 rounded-full" src="/images/image-avatar.png" alt="" /></div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
