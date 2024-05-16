export function Card({src, cardTitle, txt}){
    return(
        <div className="w-80 bg-amber_300 h-96 rounded-xl p-3 text-wrap">
            <img className="w-full h-52 object-cover rounded-xl" src={src}></img>
            <div className="pt-2">
                <h1 className="font-bold text-center text-3xl line-clamp-2">{cardTitle}</h1>
                <p className="text-3xl line-clamp-2">{txt}</p>
            </div>
        </div>
    )
}