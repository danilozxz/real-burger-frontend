
import { X } from "lucide-react";
import { FormEvent } from "react";


interface Props {
    closeAddressModal: () => void;
    addAddress: (event: FormEvent<HTMLFormElement>) => void;
}

export const Modal = ({ closeAddressModal, addAddress }: Props) => {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ease-in-out">
            <div className="w-[320px] md:w-[640px] rounded-xl py-5 px-6 shadow-shape bg-[#272727] space-y-5 transform transition-transform duration-300 ease-in-out scale-100 opacity-0 translate-y-10 animate-fadeIn">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Adicionar endereço</h2>
                        <button onClick={closeAddressModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Este endereço ficará salvo para as próximas compras
                    </p>
                </div>

                <form onSubmit={addAddress} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            name="clientName"
                            placeholder="Nome completo"
                            className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1"
                        />
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Número de telefone"
                            className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1"
                        />
                    </div>

                    <input
                        type="text"
                        name="cep"
                        placeholder="CEP"
                        className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1"
                    />

                    <input
                        type="text"
                        name="cityAndState"
                        placeholder="Cidade - Estado"
                        className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1"
                    />
                    <input
                        type="text"
                        name="neighborhood"
                        placeholder="Bairro"
                        className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1"
                    />

                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            name="street"
                            placeholder="Rua / Avenida"
                            className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1"
                        />
                        <input
                            type="text"
                            name="number"
                            placeholder="Número"
                            className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none"
                        />
                    </div>

                    <input
                        type="text"
                        name="complement"
                        placeholder="Complemento"
                        className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1"
                    />

                    <button type="submit" className="mt-4 bg-[#FA6A0F] text-white py-2 px-4 rounded">Enviar</button>
                </form>
            </div>
        </div>
    );
}
