import employed from '../assets/employed.jpg'
function LookingTalent() {
  return (
    <div className="py-10 md:py-20 px-2 md:px-10 lg:px-32">
        <div className='md:flex md:gap-10'>
            <div className="section__mg flex-1">
                <img src={employed} alt=""  className='rounded-lg' />
            </div>
            <div className="section-header flex-1">
              <h1 className="text-2xl font-bold capitalize lg:text-5xl">Votre plateforme d'embauche tout-en-un</h1>
              <p className="my-5 lg:text-2xl lg:mx-auto">Libérez la croissance des ventes et optimisez avec des canaux productifs !</p>
              <div className="navbar__controls p-2">
                <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>En savoir plus</button>
              </div>
            </div>
        </div>
        <div className='bg-blue-500 p-2 md:p-5 text-center  my-10 rounded-lg'>
                <h1 className="text-2xl lg:text-3xl text-white">Commencez à rechercher les meilleurs talents</h1>
                <p className="my-5 text-white">Inscrivez-vous à notre bulletin hebdomadaire "Job Shap Shap" et soyez le premier à être informé des nouveaux postes à pourvoir.</p>
                <div className="bg-white flex  md:w-1/2 m-auto p-1  rounded-md md:rounded-lg md:flex md:gap-5">
                    <input type="text" placeholder="youreamil@gmail.com"  className="flex-1 outline-none"/>
                    <button className='text-white bg-blue-500 p-1 md:p-2 rounded-lg outline-none hover:bg-blue-600'>Rechercher</button>
                </div>
        </div>
    </div>
  )
}

export default LookingTalent