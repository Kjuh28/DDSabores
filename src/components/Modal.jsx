
import { useState } from "react"

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react"

export function Modal({cardTitle, txt}){

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open);

        return(
           <>
                <button className="font-bold " onClick={handleOpen}>Mais Informações</button>
                <Dialog className="w-full xl:pt-48 h-screen bg-amber_50/50" open={open} handler={handleOpen}>
                <div className="mx-auto w-screen sm:w-72 h-98 p-2 bg-amber_200 border rounded justify-center text-center items-center">
                    <DialogHeader className="justify-center font-bold text-3xl"> {cardTitle} </DialogHeader>
                        <DialogBody className="justify-center items-center text-center text-xl">
                            {txt}
                            <DialogFooter className="justify-around pt-8">
                            <button onClick={handleOpen} className="border rounded bg-amber_100 w-24 p-1">Quero este!</button>
                            <button onClick={handleOpen} className="border rounded bg-amber_100 w-24 p-1">Cancelar</button>
                        </DialogFooter>
                    </DialogBody>
                </div>
                
                </Dialog>
           </>
                        
          
        )       

}