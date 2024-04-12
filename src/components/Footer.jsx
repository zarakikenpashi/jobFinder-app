import logo from '../assets/logo.svg'
function Footer() {
  return (
    <div className="p-5 md:px-10 lg:px-32">
      <div className="footer__all border-t-[1px] md:flex md:justify-between pt-5">
        <a href="#" className='flex justify-center items-center font-bold'>
            <img src={logo} alt="" className='w-10'/>JobY
        </a>
        <div className='menu'>
          <h5 className='font-bold'>Menu</h5>
            <ul className='flex flex-col gap-1'>
                {
                    ["Home","Find Job","Blog","About us"].map((link,index)=><a href="#" key={index} className='py-2'>{link}</a>)
                }
            </ul>
        </div>
        <div className='menu'>
          <h5 className='font-bold'>Entreprises</h5>
            <ul className='flex flex-col gap-1'>
                {
                    ["Histoires","Temoignages","Blog"].map((link,index)=><a href="#" key={index} className='py-2'>{link}</a>)
                }
            </ul>
        </div>
        <div className='menu'>
          <h5 className='font-bold'>Nous contacter</h5>
            <a href="mailto:joy@gmail.com" className='text-blue-500'>joy@gmail.com</a>
        </div>
      </div>
      <div className="footer__copyright border-t-[1px] h-[50px] flex justify-center items-center mt-5">
        <p>jobY, Tous droits reservés 2024</p>
      </div>
    
    </div>
  )
}

export default Footer