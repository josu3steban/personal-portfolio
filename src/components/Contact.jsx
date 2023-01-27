import ImgJT from '../assets/img/josuetomala.jpeg';

export const Contact = () => {
  return (
    <section id='contact' className='flex flex-col bg-white'>

        <div className="
            sm:w-3/4
            sm:text-3xl 
            sm:p-0 
            sm:ml-5 
            sm:mt-10
            
        
            w-2/6 
            mt-20 
            px-10
            mb-10

            text-[#17122A]
            text-5xl
            font-extrabold

        ">
            <h2 className="uppercase">Conta<span className="text-[#D01F5A]">cto</span></h2>
            <hr className="border-none bg-[#17122A] h-1 rounded-md"/>
        </div>

        <div className="sm:mt-10 sm:px-5 flex flex-col items-center mt-20 mb-32">

          {/* <div className=""> */}

              <hr className='sm:h-2 sm:w-11/12 h-3 w-5/6 rounded-full bg-[#17122A] '/>

              <img src={ImgJT} alt="foto de perfil" className='sm:border-4 sm:bottom-16 sm:w-5/12 w-2/12 rounded-full relative bottom-24 border-8 border-[#17122A]'/>

              <div className="sm:w-full sm:flex-col sm:text-lg sm:gap-2 w-10/12 text-2xl flex justify-between text-[#17122A]">

                <div className="sm:gap-2 flex flex-col gap-6">
                  <p className='font-bold'>Correo: <span className='font-normal'>josue_3steban@hotmail.com</span></p>
                  
                  <p className='font-bold'>Celular: <span className='font-normal'>0968100098</span></p>
                    
                  <p className='font-bold'>Linkedin: <span className='font-normal'><a href="https://github.com/josu3steban/taskmanager" target="_blank">https://www.linkedin.com/in/josue3steban</a></span></p>
                  
                </div>

                <div className="sm:gap-2 flex flex-col gap-6">
                  <p className='font-bold'>Ubicación: <span className='font-normal'>Milagro, Guayas</span></p>
                  
                  <p className='font-bold'>GitHub: <span className='font-normal'><a href="https://github.com/josu3steban" target="_blank">https://github.com/josu3steban</a></span></p>
                </div>

              </div>
            
          {/* </div> */}

        </div>
        
    </section>
  )
}
