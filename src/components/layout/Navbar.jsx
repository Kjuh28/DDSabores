import { Link } from 'react-router-dom'

export function Navbar(){
    return(
        <nav className='bg-amber_100 sm:p-5 mb-1 shadow md:flex md:items-center'>
            <div className='flex w-full md:justify-between sm:pl-20 sm:pr-10'>
                <Link to='/' ><img src='../src/assets/ds_logo.png' className='max-w-24' /></Link>

                <ul className='md:flex md:items-center'>
                    <li className='mx-4'><Link to='/' className='text-4xl font-sacramento text-amber_900 font-bold hover:text-amber_700 duration-500'>Home</Link></li>
                    <li className='mx-4'><Link to='/Empresa' className='text-4xl font-sacramento text-amber_900 font-bold hover:text-amber_700 duration-500'>A Empresa</Link></li>
                    <li className='mx-4'><Link to='/Contato' className='text-4xl font-sacramento text-amber_900 font-bold hover:text-amber_700 duration-500'>Contato</Link></li>
                </ul>
            </div>
        </nav>
    )
}