import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
function Hero() {
  return (
    <div className="bg-blue-100/10 flex justify-center items-center text-center" style={{height:"calc(100% - 100px)"}}>
        <div className="p-1 lg:w-2/4">
            <h1 className="text-4xl font-bold capitalize lg:text-7xl">Trouver l'emploi qui fait briller votre vie</h1>
            <p className="py-5">Nous comprenons que pour vous, il ne s'agit jamais d'un simple travail. C'est votre entreprise. C'est pourquoi nous avons à cœur de vous trouver l'employé idéal.</p>
            <div className="bg-white p-2  rounded-md md:rounded-full md:flex md:gap-4">
                <div className="flex items-center border-b-2 md:border-r-2 md:flex-1 md:border-b-0">
                    <span className="bg-gray-100 rounded-full  p-2"><BiSearch /></span>
                    <input type="text" placeholder="Categorie"  className="p-3 flex-1 outline-none"/>
                </div>
                <div className="flex justify-center items-center border-b-2 md:border-r-2 md:flex-1 md:border-b-0">
                    <span className="bg-gray-100 rounded-full  p-2"><GrLocation /></span>
                    <input type="text" placeholder="Location"  className="p-3 outline-none flex-1"/>
                </div>
                <button className='bg-blue-500 text-white p-2 rounded-full outline-none hover:bg-blue-600'>Rechercher</button>
            
            </div>
        </div>
        
    
    
    </div>
  )
}

export default Hero