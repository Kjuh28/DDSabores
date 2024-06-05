import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export function Contatos(){
    return(
        <div className="items font-bold text-3xl text-amber_800 md:text-5xl pt-4
         bg-amber_200 w-full">
            <h1>Contatos</h1>
            <div className='flex flex-wrap justify-center xl:justify-around p-5 gap-10'>
                <div>
                    <ul>
                        <li className="text-4xl"><a>Teste {FaFacebook}</a></li>
                        <li className="text-4xl">{FaInstagram}</li>
                        <li className="text-4xl">{FaWhatsapp}</li>
                    </ul>
                </div>
                <form className='sm:w-96'>
                        <label className="text-2xl sm:text-4xl w-full">Nome: </label>
                        <input 
                            type="text" 
                            className="sm:w-full sm:p-2 mt-2 p-2 mb-2 bg-amber_50 border rounded font-serif text-sm text-amber_900 " 
                        />
                        <label className="text-2xl sm:text-4xl w-full">Telefone: </label>
                        <input 
                            type="number" 
                            className="w-full sm:p-2 mt-2 mb-2 p-2 bg-amber_50 border rounded font-serif text-sm text-amber_900" 
                        />
                        <label className="text-2xl sm:text-4xl w-full">Mensagem:</label>
                        <textarea 
                            className='resize-none bg-amber_50 p-2 w-full md:h-64 border rounded font-serif text-sm text-amber_900' 
                            placeholder='Envie-nos uma mensagem'>
                        </textarea>
                        <input type="submit" className="sm:text-3xl border rounded sm:p-3 p-1 bg-amber_50 hover:bg-amber_300" />
                </form>
            </div>
            
        </div>
    )
}