import { Link } from 'react-router-dom'
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from 'react'

export function Navbar(){
    const [icon, setIcon] = useState(true)

    function clickMenu(){
        setIcon(!icon)

        let list = document.querySelector('ul')
        if(icon === true){
            list.classList.add('opacity-100')
            list.classList.add('top-[120px]')
        } else {
            list.classList.remove('opacity-100')
            list.classList.remove('top-[120px]')
        }

    }

    return(
        <nav className='bg-amber_100 sm:p-5 mb-1 shadow md:flex md:items-center '>
            <div className='flex w-full justify-between sm:pl-20 sm:pr-10 items-center pr-4'>
                <Link to='/' ><img src='../src/assets/ds_logo.png' className='max-w-24' /></Link>
                <span>
                    {
                     icon === true ? <MdMenu name="menu" className='text-3xl cursor-pointer md:hidden block' onClick={clickMenu}/> : <MdClose name="close" onClick={clickMenu} className='text-3xl cursor-pointer md:hidden block'/>
                    }
                    
                </span>

                <ul id='navUl' className='md:flex md:items-center z-[1] md:z-auto md:static absolute bg-amber_50 w-full left-0 md:w-auto md:bg-amber_100 md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
                    <li className='mx-4 my-6 md:my-0 '><Link to='/' className='text-4xl font-sacramento text-amber_900 font-bold hover:text-amber_700 duration-500'>Home</Link></li>
                    <li className='mx-4 my-6 md:my-0 '><Link to='/Empresa' className='text-4xl font-sacramento text-amber_900 font-bold hover:text-amber_700 duration-500'>A Empresa</Link></li>
                    <li className='mx-4 my-6 md:my-0 '><Link to='/Contato' className='text-4xl font-sacramento text-amber_900 font-bold hover:text-amber_700 duration-500'>Contato</Link></li>
                </ul>
            </div>
        </nav>
    )
}