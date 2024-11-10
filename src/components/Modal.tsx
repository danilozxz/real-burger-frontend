import { Burger } from "@/types/Burger";
import { X, ShoppingCart } from 'lucide-react';
import { BurgerCard } from "./BurgerCard";

type Props = {
    burger: Burger,
    closeModal: () => void
    handleModal: (id: number) => void
}

export const Modal = ({ burger, closeModal, handleModal }: Props) => {
    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/70 md:p-4">
            <div className="bg-[#272727] flex flex-col p-8 gap-8 md:flex-row md:p-12 lg:p-32 rounded-lg md:gap-12 relative">
                <div className="w-auto mt-4 md:w-[296px] md:mt-0">
                    <BurgerCard
                        key={burger.id}
                        burger={burger}
                        onClick={() => handleModal(burger.id)}
                        modal={true}
                    />
                </div>
                <div className="flex flex-col justify-around gap-6 md:gap-0">
                    <div>
                        <p className="font-bold">Ingredientes</p>
                        <p className="text-[#979797]">{burger.ingredientes}</p>
                    </div>

                    <div className="">
                        <p className="font-bold mb-2">Observações:</p>
                        <textarea name="" id="" className="bg-[#1F1F1F] outline-none p-4 rounded-lg w-full" placeholder="Digite aqui"></textarea>
                    </div>

                    <button className="bg-[#FA6A0F] px-12 py-2 rounded-md hover:bg-[#ff8800] transition-all">Adicionar ao carrinho</button>

                </div>
                <X onClick={closeModal} className="absolute top-2 right-2 w-10 h-10 md:top-5 md:right-5 cursor-pointer text-white text-5xl" />
            </div>

        </div>
    )
}