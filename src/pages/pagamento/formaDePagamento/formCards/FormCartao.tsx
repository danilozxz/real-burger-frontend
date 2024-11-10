import { useState } from "react";

export const FormCartao = () => {
    const [selectedOptionMes, setSelectedOptionMes] = useState("");
    const [selectedOptionAno, setSelectedOptionAno] = useState("");

    return (
        <form className="text-white border border-zinc-700 p-4 rounded-md">
            <input
                type="text"
                name=""
                placeholder="Número do cartão"
                className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1 w-full"
            />

            <div className="grid grid-cols-3 gap-4 mt-4">
                <select
                    id="mes"
                    name="mes"
                    value={selectedOptionMes}
                    onChange={(e) => setSelectedOptionMes(e.target.value)}
                    className="bg-[#1F1F1F] outline-none cursor-pointer rounded-md p-2 h-12 md:h-16"
                >
                    <option value="" disabled hidden>Mês</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="03">04</option>
                    <option value="03">05</option>
                    <option value="03">06</option>
                    <option value="03">07</option>
                    <option value="03">08</option>
                    <option value="03">09</option>
                    <option value="03">10</option>
                    <option value="03">11</option>
                    <option value="03">12</option>
                </select>

                <select
                    id="mes"
                    name="mes"
                    value={selectedOptionAno}
                    onChange={(e) => setSelectedOptionAno(e.target.value)}
                    className="bg-[#1F1F1F] outline-none cursor-pointer rounded-md p-2 h-12 md:h-16"
                >
                    <option value="" disabled hidden>Ano</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>

                <input
                type="number"
                name=""
                placeholder="CVV"
                className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1 w-full"
            />
            </div>
        </form>
    )
}