import img from '../../public/img/show.jpg'
import cl1 from '../../public/img/cliente1.png'
import cl2 from '../../public/img/cliente2.png'
import cl3 from '../../public/img/cliente3.png'
import cl4 from '../../public/img/cliente4.png'
import cl5 from '../../public/img/cliente5.png'
import cl6 from '../../public/img/cliente6.png'

const Showcase = () => {
  return (
    <div className='fondo-web w-full h-[825px] flex justify-around flex-col'>
        <div className='flex justify-around items-center h-[700px]'>
            <div className='text-white'>
                <div className='flex flex-col'>
                    <span className='text-7xl font-bold'>LOS MEJORES <br /> TALENTOS DE LA <br />INDUSTRIA CALL CENTER</span>
                    <span className='text-xl'>Garantizamos la Prestación de un servicio óptimo por parte del capital humano</span>
                </div>
            </div>

            <div className='w-[520px]'>
                <img className='rounded-xl' src={img.src} alt="" />
            </div>
        </div>

        <div className='flex flex-col justify-center items-center h-[200px]'>
            <div><span className='text-7xl font-bold text-white'>CLIENTES</span></div>
            <div className='flex my-5'>
                <img className='w-[200px] m-2' src={cl1.src} alt="" />
                <img className='w-[200px] m-2' src={cl2.src} alt="" />
                <img className='w-[200px] m-2' src={cl3.src} alt="" />
                <img className='w-[200px] m-2' src={cl4.src} alt="" />
                <img className='w-[200px] m-2' src={cl5.src} alt="" />
                <img className='w-[200px] m-2' src={cl6.src} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Showcase