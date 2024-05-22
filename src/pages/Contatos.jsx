export function Contatos(){
    return(
        <footer className="items font-bold text-3xl text-amber_800 md:text-5xl pt-4 bg-amber_400">
            <h1>Contatos</h1>
            <div className='flex flex-wrap justify-center xl:justify-around p-5 gap-10'>
                <div>
                    <ul >
                        <li className="text-4xl">Facebook</li>
                        <li className="text-4xl">Instagram</li>
                        <li className="text-4xl">WhatsApp</li>
                    </ul>
                </div>
                <form className='sm:w-96'>
                    <div className='flex flex-wrap'>
                        <label className="text-2xl sm:text-4xl w-full">Nome: </label>
                        <input type="text" className="sm:w-full p-2 mt-2 mb-2  border rounded" />
                        <label className="text-2xl sm:text-4xl w-full">E-mail: </label>
                        <input type="email" className="sm:w-full p-2 mt-2 mb-2 border rounded" />
                        <label className="text-2xl sm:text-4xl w-full">Telefone </label>
                        <input type="number" className="w-full sm:p-2 mt-2 mb-2 border rounded" />
                    </div>
                    <div>
                        <label>Mensagem:</label>
                        <textarea className='resize-none border rounded text-3xl' placeHolder='Digite um comentario'></textarea>
                    </div>
                </form>
            </div>
            
        </footer>
    )
}