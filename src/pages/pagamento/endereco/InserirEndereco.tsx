import { Address } from "../../../types/pagamento/Address"
import {  MapPin } from "lucide-react"

interface Props {
    openAddressModal: () => void
    address: Address
}

export const InserirEndereco = ({ openAddressModal, address }: Props) => {
    return (
        <div className="bg-[#1F1F1F] flex justify-between flex-col px-8 rounded-md py-3 gap-4">
            <p className='flex items-center gap-2 text-[#FA6A0F]'><MapPin className='size-5' /> Endereço de entrega</p>

            <div className="flex">
                <button type='button' onClick={openAddressModal} className='flex items-center gap-2 flex-1'>
                   
                    <p ><span className="font-bold">{address.clientName} {address.phoneNumber}</span> {address.street} {address.number} {address.neighborhood} {address.city} {address.cep}</p>
                </button>

                <div className='w-px h-6 bg-zinc-800' />

                <button onClick={openAddressModal} className="text-[#FA6A0F]">
                    Trocar
                </button>
            </div>

        </div>
    )
}