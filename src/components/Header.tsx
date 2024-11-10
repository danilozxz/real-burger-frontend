"use client"

import { Menu, ShoppingCart, XIcon } from "lucide-react"
import { useState } from "react"


export const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleOpenModal = () => {
        setIsNavOpen(true);
    }

    const handleCloseModal = () => {
        setIsNavOpen(false);
    }
    return (
        <header className="flex justify-between items-center px-4 lg:px-40 xl:px-60 pt-8 pb-2 shadow shadow-[#2B2B2B] lg:shadow-none">

            <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full lg:gap-28">
                <div className="flex w-full lg:w-auto justify-between">
                    <div>
                        <a href="/" className="text-3xl lg:text-4xl">Real<span className="text-[#FE6A0F]">•</span>Burger</a>
                    </div>
                    {isNavOpen ?
                        <XIcon onClick={handleCloseModal} className="size-12 cursor-pointer hover:text-[#FE6A0F] transition-all" />
                        :
                        <Menu onClick={handleOpenModal} className="size-12 inline-block lg:hidden cursor-pointer hover:text-[#FE6A0F] transition-all" />
                    }

                </div>


                <nav className={`${isNavOpen ? "max-h-72 opacity-100 p-4" : "max-h-0 opacity-0"}  transition-all duration-100 flex flex-col lg:flex-row lg:opacity-100 lg:p-0 flex-1 items-center gap-4 lg:gap-0`}>
                    <ul className="flex flex-col lg:flex-row flex-1 gap-4 lg:gap-16">
                        <li className="hover:text-[#FE6A0F] transition-all"><a href="/">Início</a></li>
                        <li className="hover:text-[#FE6A0F] transition-all"><a href="#menu">Burgers</a></li>
                        <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Contato</a></li>
                    </ul>
                    <a href="/carrinho">
                        <ShoppingCart className=" lg:block size-8 cursor-pointer hover:text-[#FE6A0F] transition-all" />
                    </a>
                </nav>

            </div>



        </header>
    )
}