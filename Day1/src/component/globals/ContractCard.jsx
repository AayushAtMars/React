import React from 'react'

const ContractCard = ({name, desig, role, img}) => {
return (
    <div className='card border border-slate-200 rounded-xl p-6 drop-shadow-2xl bg-gray-100'>
        <div className="top flex items-center justify-between">
            <div className="left flex flex-col gap-2">
                    <div className="top1 flex items-center gap-4">
                            <h3 className='font-bold'>{name}</h3>
                            <button className='text-green-900 bg-green-200 font-bold border border-slate-500 rounded-xl px-2 '>{role}</button>
                    </div>
                    <p className='text-slate-600 font-medium'>{desig}</p>
            </div>

            <div className="right">
                <img className='rounded-full w-10' src={img} alt="" />
            </div>
        </div>

        <div className="bottom border-t border-slate-200 mt-4 pt-4 grid grid-cols-2 mx-auto place-items-center">
            <div className="left">
                <button className='flex items-center gap-2 font-bold cursor-pointer '>
                <span class="material-symbols-outlined">mail</span>Email
                </button>
            </div>
            <div className="right">
            <button className='flex items-center gap-2 font-bold cursor-pointer'>
                <span class="material-symbols-outlined">call</span>Call
                </button>
            </div>
        </div>
    </div>
)
}

export default ContractCard
