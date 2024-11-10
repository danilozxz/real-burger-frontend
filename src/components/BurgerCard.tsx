import { Burger } from "../types/Burger"
import { Plus, Minus } from 'lucide-react'
import { useState } from "react"

type Prop = {
    burger: Burger,
    modal: boolean,
    onClick: () => void
}

export const BurgerCard = ({ burger, onClick, modal }: Prop) => {
    const [count, setCount] = useState(1);

    const addItem = () => {
        setCount(count + 1);
    }

    const subtractItem = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
            <div onClick={onClick} className="cursor-pointer transition-transform transform hover:scale-105 w-64 mx-auto md:w-auto md:mx-0">

                <div className="bg-[#2B2B2B] pt-8 px-6 rounded-t-md">
                    <img src={burger.url} alt={burger.nome} className="w-40 mx-auto" />
                </div>

                <div className="bg-[#1F1F1F] -mt-8 py-8 px-6 rounded-b-md">
                    <p className="text-sm mt-4">{burger.categoria}</p>
                    <p className="text-2xl font-bold mt-2">{burger.nome}</p>
                    <div className="flex items-center justify-between mt-3 gap-4">
                        <span className="text-[#FE6A0F] text-2xl font-bold">R${(burger.preco * count).toFixed(2)}</span>
                        {modal ? (
                            <div className="flex gap-4 items-center">
                                <div className="bg-[#2B2B2B] rounded-full p-1">
                                    <Minus onClick={subtractItem} />
                                </div>
                                {count}
                                <div className="bg-[#2B2B2B] rounded-full p-1">
                                    <Plus onClick={addItem} />
                                </div>
                            </div>
                        ) : ""}

                    </div>
                </div>

            </div>
    )
}