import { AiOutlineBehance, AiOutlinePercentage, AiOutlinePlus } from "react-icons/ai"
import { BsApple, BsFacebook, BsLinkedin, BsMicrosoft } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { SiAdobe, SiAirbnb } from "react-icons/si"

function Companies() {
  return (
    <div className="bg-blue-100/10 py-10 md:py-20 px-2 md:px-10 lg:px-32">
        <div className="section-header text-center">
          <h1 className="text-2xl font-bold capitalize lg:text-5xl">Vous guider vers l'emploi de vos rêves au sein d'entreprises renommées</h1>
          <p className="my-5 lg:text-2xl lg:mx-auto">Libérez votre potentiel grâce à un lieu de travail simplifié</p>
      </div>
      <div className="section-body p-5 grid gap-4 md:grid-cols-3">
          <div className="flex items-center flex-col gap-2">
            <h2 className="flex text-7xl font-bold">2.5M<AiOutlinePlus className="text-blue-600" /></h2>
            <p className="text-2xl capitalize">emploi créés</p>
          </div>

          <div className="flex items-center flex-col gap-2">
            <h2 className="flex text-7xl font-bold">1.6M<AiOutlinePlus className="text-blue-600" /></h2>
            <p className="text-2xl capitalize">employés embauchés</p>
          </div>

          <div className="flex items-center flex-col gap-2">
            <h2 className="flex text-7xl font-bold">99<AiOutlinePercentage className="text-blue-600" /></h2>
            <p className="text-2xl capitalize">entreprise satisfaite</p>
          </div>
      </div>

      <div className="h-[1px] w-full bg-gray-100 my-5"></div>

      <div className="section-body p-5 grid gap-10 md:grid-cols-4">
          <div className="">
            <h2 className="flex items-center text-4xl"><span><AiOutlineBehance className="text-blue-600" /></span><span>Behance</span></h2>
          </div>
          <div className="">
            <h2 className="flex items-center text-4xl"><span><FcGoogle  className="text-blue-600" /></span><span>Google</span></h2>
          </div>
          <div className="">
            <h2 className="flex items-center text-4xl"><span><BsFacebook  className="text-blue-600" /></span><span>Facebook</span></h2>
          </div>
          <div className="">
            <h2 className="flex items-center text-4xl"><span><BsMicrosoft  className="text-blue-600" /></span><span>Microsoft </span></h2>
          </div>
          <div className="">
            <h2 className="flex items-center text-4xl"><span><SiAirbnb  className="text-blue-600" /></span><span>Airbnb </span></h2>
          </div>
          <div className="">
            <h2 className="flex items-center text-4xl"><span><SiAdobe  className="text-blue-600" /></span><span>Adobe</span></h2>
          </div>
          <div className="">
            <h2 className="flex items-center text-4xl"><span>Linked</span><span><BsLinkedin  className="text-blue-600" /></span></h2>
          </div>
          <div className="">
            <h2 className="flex items-center text-4xl"><span><BsApple   className="text-blue-600" /></span><span>Apple</span></h2>
          </div>
      </div>
    </div>
  )
}

export default Companies