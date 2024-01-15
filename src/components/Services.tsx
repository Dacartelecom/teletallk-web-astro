import iconoatc from '../../public/img/iconoatc.png'
import iconoback from '../../public/img/iconobk.png'
import iconofono from '../../public/img/iconofono.png'
export const Services = () => {
  return (
    <div className=" fondo-web h-[600px] flex justify-around flex-col items-center w-full text-center">
        <div className="text-white">
            <span className="text-7xl font-semibold">SERVICIOS</span>
        </div>

        <div className="w-full flex justify-center gap-[100px]">
            <div className="bg-white w-[300px] h-[400px] flex flex-col justify-center gap-[50px] items-center">
                <img className='w-[170px]' src={iconoatc.src} alt="" />

                <div className='flex flex-col text-[#AC0396] font-bold'>
                    <span className='text-sm'>Tu tranquilidad, nuestra prioridad</span>
                    <span className='text-3xl'>Atención al Cliente</span>
                </div>
            </div>
            <div className="bg-white w-[300px] h-[400px] flex flex-col justify-center gap-[50px] items-center">
                <img className='w-[170px]' src={iconoback.src} alt="" />

                <div className='flex flex-col text-[#0937C3] font-bold '>
                    <span className='text-sm'>Optimiza tu operación empresarial</span>
                    <span className='text-3xl'>Backoffice</span>
                </div>
            </div>
            <div className="bg-white w-[300px] h-[400px] flex flex-col justify-center gap-[50px] items-center">
                <img className='w-[170px]' src={iconofono.src} alt="" />

                <div className='flex flex-col text-[#0937C3] font-bold '>
                    <span className='text-sm'>Optimiza tu operación empresarial</span>
                    <span className='text-3xl'>Televantas</span>
                </div>
            </div>
        </div>
    </div>

  )
}
