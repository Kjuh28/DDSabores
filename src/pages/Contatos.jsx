import { LuPhone, LuCakeSlice, LuShoppingBag } from "react-icons/lu";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export function Contatos(){
    return(
        <div className="items font-bold text-3xl text-amber_800 md:text-5xl pt-4 bg-amber_100 w-full h-1/2 rounded-xl">
            <h1>Contatos</h1>
            <div className="flex flex-wrap justify-center items-center xl:justify-around p-5 gap-10">
                <div className="p-8">
                    <div className="flex flex-col gap-8" >
                        <p className="flex text-4xl gap-4"><span><LuShoppingBag /> </span> Lojinha Virtual</p>
                        <p className="flex text-4xl gap-4"><span><LuCakeSlice /> </span> Bolos, doces e Salgados!</p>
                        <p className="flex text-4xl gap-4"><span><LuPhone /> </span> (93)99187-0476</p>
                    </div>
                    
                    <ul className="flex mt-20 w-full justify-between" >
                        <li className="text-4xl"><a href='#' className="cursor-pointer text-5xl"><FaFacebook /></a></li>
                        <li className="text-4xl"><a href='#' className="cursor-pointer text-5xl"><FaInstagram /></a></li>
                        <li className="text-4xl"><a href='#' className="cursor-pointer text-5xl"><FaWhatsapp /></a></li>
                    </ul>
                </div>
                <form className="sm:w-96">
                        <label className="text-2xl sm:text-5xl w-full">Nome: </label>
                        <input type="text" className="text-2xl sm:w-full p-2 mt-2 mb-2  border rounded" />
                        <label className="text-2xl sm:text-5xl w-full">E-mail: </label>
                        <input type="email" className="text-2xl sm:w-full p-2 mt-2 mb-2 border rounded" />
                        <label className="text-2xl sm:text-5xl w-full">Telefone </label>
                        <input type="number" className="text-2xl w-full sm:p-2 mt-2 mb-2 border rounded" />
                        <label className="text-2xl sm:text-5xl w-full">Mensagem:</label>
                        <textarea className="text-2xl resize-none w-full p-2 mt-2 mb-2 border rounded" placeHolder="Digite um comentario"></textarea>
                </form>
            </div>
            
        </div>
    )
}