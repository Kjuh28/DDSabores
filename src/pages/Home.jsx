import { Empresa } from './Empresa'
import { Container } from '../components/layout/Container'

export function Home(){
    return(
        <Container className=''>
            <div id="home" className="bg-amber_100 font-sacramento gap-x-4 pl-5 p-2 pr-5 flex flex-wrap md:flex-nowrap md:justify-between xl:w-full " >
                <div className="" >
                    <img src="../src/assets/avatar_ds.jpg" alt="Avatar_Confeiteira" className="rounded-xl sm:h-auto sm:w-auto md:max-w-sm lg:max-w-xl " />
                </div>
                <div>
                    <h1 className="text-4xl text-center text-amber_900 font-bold sm:pb-3 lg:pb-6 pt-5">A Confeiteira</h1>
                    <p className="text-3xl">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>    
                </div>
            </div>

            <Empresa id='Empresa' />
        </Container>
        
    )
}