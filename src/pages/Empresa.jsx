import { Card } from "../components/Card";

export function Empresa(){
    return(
        <div className="text-amber_900">
            <h1 className="font-bold text-4xl md:text-5xl text-center  pt-8 pb-8">Alguns de nossos Doces</h1>
            <div id='empresa' className="w-full flex flex-wrap wrap justify-center items-center gap-4 pb-8">
                <Card 
                    src={'../src/assets/doces/doce_1.png'} 
                    cardTitle={'Leite Ninho'} 
                    txt='Aqui vai uma demonstração de ovo de colher com calda de chocolate coberta de morango e pedaços de chocolate branco e leite ninho'
                /> 
                
                <Card 
                    src={'../src/assets/doces/doce_2.png'} 
                    cardTitle={'Chocolate com Castanhas'} 
                    txt='Aqui vai uma demonstração de ovo de colher com calda de chocolate coberta de morango e pedaços de chocolate branco e leite ninho'
                />
                <Card 
                    src={'../src/assets/doces/doce_3.png'} 
                    cardTitle={'Explosão de Sabores'} 
                    txt='Aqui vai uma demonstração de ovo de colher com calda de chocolate coberta de morango e pedaços de chocolate branco e leite ninho'
                />                 
                <Card 
                    src={'../src/assets/doces/doce_4.png'} 
                    cardTitle={'Mousse de Maracujá'} 
                    txt='Casquinha de chocolate meio amargo e recheio de mousse de maracujá personalizado🥰'
                />
                <Card 
                    src={'../src/assets/doces/doce_1.png'} 
                    cardTitle={'Leite Ninho'} 
                    txt='Aqui vai uma demonstração de ovo de colher com calda de chocolate coberta de morango e pedaços de chocolate branco e leite ninho'
                /> 
                <Card 
                    src={'../src/assets/doces/doce_2.png'} 
                    cardTitle={'Chocolate com Castanhas'} 
                    txt='Aqui vai uma demonstração de ovo de colher com calda de chocolate coberta de morango e pedaços de chocolate branco e leite ninho'
                />
                <Card 
                    src={'../src/assets/doces/doce_3.png'} 
                    cardTitle={'Explosão de Sabores'} 
                    txt='Aqui vai uma demonstração de ovo de colher com calda de chocolate coberta de morango e pedaços de chocolate branco e leite ninho'
                />                 
                <Card 
                    src={'../src/assets/doces/doce_4.png'} 
                    cardTitle={'Calda de Caramelo'} 
                    txt='Aqui vai uma demonstração de ovo de colher com calda de chocolate coberta de morango e pedaços de chocolate branco e leite ninho'
                />   
            </div>
        </div>
        
    )
}