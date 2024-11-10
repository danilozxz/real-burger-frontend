import { FormEvent, useEffect, useState } from 'react';
import { Modal } from './endereco/Modal';
import { InserirEndereco } from './endereco/InserirEndereco';
import { Address } from '../../types/pagamento/Address';
import { Itens } from './formaDePagamento/Itens';

const Pagamento = () => {
    const [address, setAddress] = useState<Address>(
        {
            clientName: '', 
            phoneNumber: '', 
            street: '', 
            number: '', 
            cep: '',
            neighborhood: '',
            city: '',  
            complement: '' }
    );
    
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    const openAddressModal = () => {
        setIsAddressModalOpen(true)
    }

    const closeAddressModal = () => {
        setIsAddressModalOpen(false);
    }

    const addAddress = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const clientName = data.get('clientName')?.toString();
        const phoneNumber = data.get('phoneNumber')?.toString();
        const street = data.get('street')?.toString();
        const number = data.get('number')?.toString();
        const cep = data.get('cep')?.toString();
        const neighborhood = data.get('neighborhood')?.toString();
        const cityAndState = data.get('cityAndState')?.toString();
        const complement = data.get('complement')?.toString();
    
        if (!clientName || !phoneNumber || !street || !number || !cep || !neighborhood || !cityAndState || !complement) {
            return;
        }
    
        setAddress((prevAddress) => ({
            ...prevAddress,
            clientName: clientName,
            phoneNumber: phoneNumber,
            street: street,
            number: number,
            cep: cep,
            neighborhood: neighborhood,
            cityAndState: cityAndState,
            complement: complement
        }));
    
        event.currentTarget.reset();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAddressModalOpen(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="w-full px-4 md:px-0 md:w-[700px] xl:w-[800px] mx-auto">
            <div className="bg-[#272727] p-2 sm:p-8 lg:p-12 rounded-lg mt-12">

                <InserirEndereco
                    address={address}
                    openAddressModal={openAddressModal}
                />
                
                <Itens/>
            </div>

            {isAddressModalOpen && (
                <Modal
                    addAddress={addAddress}
                    closeAddressModal={closeAddressModal}
                />
            )}
        </div>
    );

}

export default Pagamento;