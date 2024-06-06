import card from '@material-tailwind/react/theme/components/card'
import { Modal } from './Modal'
import { useState } from 'react'


export function Card({src, cardTitle, txt}){

    return(
        <div className="w-80 bg-amber_300 h-96 rounded-xl p-3 text-wrap hover:scale-105 hover:bg-amber_200 ">
            <img className="w-full h-52 object-cover rounded-xl" src={src}></img>
            <div className="pt-2">
                <h1 className="font-bold text-center text-3xl line-clamp-2">{cardTitle}</h1>
                <p className="text-3xl line-clamp-1 sm:line-clamp-2">{txt}</p>

                <div className="h-auto">
                    <Modal cardTitle={cardTitle} txt={txt} />
                </div>
               

            </div>
        </div>
    )
}