import card from '@material-tailwind/react/theme/components/card'
import { Modal } from './Modal'
import { useState } from 'react'


export function Card({src, cardTitle, txt}){

    return(
        <div className="relative flex flex-col w-80 bg-amber_100 h-[450px] rounded-xl p-3 text-wrap hover:scale-105 hover:bg-amber_200 ">
            <img className="relative w-full h-52 object-cover rounded-xl" src={src}></img>
            <div className="pt-2">
                <h1 className="font-bold text-center text-2xl sm:text-4xl line-clamp-2">{cardTitle}</h1>
                <p className="text-2xl line-clamp-1 sm:line-clamp-2">{txt}</p>

                <div className="items-center justify-between">
                    <Modal cardTitle={cardTitle} txt={txt} />
                </div>
            </div>
        </div>
    )
}