import { Empresa } from './Empresa'
import { Container } from '../components/layout/Container'
import { Contatos } from './Contatos'

export function Home(){
    return(
        <Container className=''>
            <div id="home" className="bg-amber_100 gap-x-4 pl-5 p-2 pr-5 flex flex-wrap 2xl:flex-nowrap xl:justify-between rounded-xl" >
                <div className="" >
                    <img src="../src/assets/avatar_ds.jpg" alt="Avatar_Confeiteira" className="rounded-xl sm:h-auto xl:max-w-xl my-4 mx-4" />
                </div>
                <div>
                    <h1 className="text-4xl sm:text-5xl text-center text-amber_900 font-bold sm:pb-3 lg:pb-6 pt-5">A Confeiteira</h1>
                    <p className="text-2xl sm:text-3xl">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>    
                </div>
            </div>

            <Empresa id='Empresa' />
            <Contatos />

        </Container>
    )
}