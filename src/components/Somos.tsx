import somos from '../../public/img/somos.jpg'

export const Somos = () => {
  return (
    <div className="flex justify-center gap-[100px] w-full h-[500px] items-center">
        <div className='flex flex-col w-[900px]'>
            <span className='text-6xl font-bold'>¿Quiénes Somos?</span>
            <span className='text-xl mt-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laudantium corporis provident fugit alias quibusdam ea explicabo maiores voluptas, assumenda debitis ut illum quasi officiis. Blanditiis quod voluptatibus pariatur omnis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempore, ad incidunt ea libero dolore et id cumque amet quisquam.</span>
        </div>

        <div className='bg-black w-[400px]'>
            <img src={somos.src} alt="" />
        </div>
    </div>
  )
}
