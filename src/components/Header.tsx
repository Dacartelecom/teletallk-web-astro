import logo from '../../public/img/Teletalk-B.png'

export const Header = () => {
  return (
    <header className='bg-[#000000] h-[90px] w-full'>
        <div className='flex justify-between w-[90%] items-center h-full'>
        <div className='w-[250px] ml-10'>
            <img src={logo.src} alt="" />
        </div>
        <div className='text-white flex gap-[80px] text-2xl font-normal'>
            <span>Nosotros</span>
            <span>Servicios</span>
            <span>Clientes</span>
            <span>Mision</span>
        </div>
        </div>
    </header>
  )
}
