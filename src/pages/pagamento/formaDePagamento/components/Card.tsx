
type MyComponentProps = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    label: string
};
export const Card = ({ Icon, label }: MyComponentProps) => {
    return (
        <div>
            <div className='flex justify-center items-center cursor-pointer bg-[#1F1F1F] gap-2 shadow-2xl rounded-md text-sm h-12 md:h-16 min-w-[84px]'>
                <Icon className="size-4 sm:size-6"/>
                <p>{label}</p>
            </div>
        </div>
    )
}

