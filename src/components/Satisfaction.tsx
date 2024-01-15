import satisfaccion from '../../public/img/img-satistaccion.jpg'
import manos from '../../public/img/manos.png'
import mundo from '../../public/img/mundo.png'

export const Satisfaction = () => {
  return (
    <div className="h-[650px] flex justify-center items-center gap-[50px]">
        <div className="bg-black w-[350px]">
             <img src={satisfaccion.src} alt="" />
        </div>
        <div className=" w-[40%] h-[450px] flex flex-col items-center">
            <div className='w-full flex flex-col my-5'>
                <samp className='text-5xl font-bold'>SATISFACCIÓN DEL 100% EN CALIDAD DE SERVICIO</samp>
                <samp className='text-lg font-semibold mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Inventore nihil molestiae incidunt fugit sunt molestias sapiente blanditiis minima. Natus aliquid soluta delectus 
                maxime incidunt! Quasi fuga iusto itaque laborum deserunt.</samp>
            </div>

            <div className='flex justify-around w-full text-center items-center'>
                <div className='flex flex-col gap-[10px] w-[350px]'>
                    <div className='flex justify-center gap-[20px] items-center'>
                        <img className='w-[55px]' src={mundo.src} alt="Aqui va una imagen" />
                        <span className=' w-[150px] text-xl text-left font-bold'>Tecnología de Vanguardia:</span>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus necessitatibus nulla maxime.
                         Quam ipsum sed quibusdam, aperiam facilis praesentium exercitationem?</div>
                </div>
                <div className='flex flex-col gap-[10px] w-[350px]'>
                    <div className='flex justify-center gap-[20px] items-center'>
                        <img className='w-[60px]' src={manos.src} alt="Aqui va una imagen" />
                        <span className=' w-[190px] text-xl text-left font-bold'>Compromiso con la Seguridad de Datos:</span>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus necessitatibus nulla maxime.
                         Quam ipsum sed quibusdam, aperiam facilis praesentium exercitationem?</div>
                </div>
            </div>
        </div>
    </div>
  )
}
