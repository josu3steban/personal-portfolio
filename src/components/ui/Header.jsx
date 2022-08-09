
import ImgHeader from '../../assets/img/img-header.gif';
import ImgHeaderDer from '../../assets/img/img-header-der.jpg';
import IconMenu from '../../assets/img/menu.png';
import { useState } from 'react';

export const Header = () => {

    const [ menu, setMenu ] = useState( true );
    const [ animar, setAnimar ] = useState( true );

    const handleMenu = () => {

        if( menu ){
    
          setMenu( !menu );
    
          setTimeout(() => {

            setAnimar( !animar );

          }, 200);
    
        } else {
    
        //   setTimeout(() => {
            setMenu( !menu );
        //   }, 200);
    
          setAnimar( !animar );
          
        }
    
      }
    
  return (
    <header className="bg-[#1F2858]">
        <div className="
            flex

            sm:flex-col
            sm:items-center
            sm:relative
            
            justify-end
            mb-5
            bg-[#1F2858]
            sticky
            top-0
        ">
            <div className="md:hidden sm:mt-5 sm:mb-5 w-full sm:flex sm:justify-between sm:items-center">
                <h2 className=' sm:ml-5 font-bold text-white uppercase'>Portafolio</h2>
                <div className="mr-5">
                    <button
                        id='icon-menu'
                        onClick={ handleMenu }
                        className="
                        border
                        bg-my-bg-second
                        fill-current
                        w-6
                        p-1
                        rounded
                        flex
                    ">
                        <img className="w-full" src={ IconMenu } alt="icono de boton" />
                    </button>
                </div>
            </div>

            <nav className={`

                flex

                sm:w-full
                sm:flex-col
                sm:items-center
                sm:overflow-hidden
                ${menu ? ' sm:h-0' : ' sm:h-60'}


                transition-all
                duration-500

                w-2/3
                justify-evenly
                gap-2
                font-bold
                text-white

            `}>
                
                <a className="block uppercase p-2 hover:text-[#D01F5A] transition-all duration-200" href="#about-me">Sobre mi</a>
                <a className="block uppercase p-2 hover:text-[#D01F5A] transition-all duration-200" href="#skills">Habilidades</a>
                <a className="block uppercase p-2 hover:text-[#D01F5A] transition-all duration-200" href="#practices">Prácticas</a>
                <a className="block uppercase p-2 hover:text-[#D01F5A] transition-all duration-200" href="#curriculum">Curriculum</a>
                <a className="block uppercase p-2 hover:text-[#D01F5A] transition-all duration-200" href="#contact">Contacto</a>
            </nav>
        </div>

        <section className="
            flex

            sm:flex-col
            sm:relative
        ">
            <div className="sm:w-full sm:opacity-50  w-1/2">
                <img className='w-full' src={ ImgHeader } alt="Imagen de header" />
            </div>

            <div className="

                sm:bg-none 
                sm:absolute 
                sm:w-full
                sm:text-2xl
                sm:top-1/4



                w-1/2 
                flex 
                items-center 
                justify-center 
                text-white 
                text-5xl 
                font-extrabold 
                bg-contain 
                bg-[url('./assets/img/img-header-der.jpg')]
            " >
                <div className="sm:h-1/2 ">
                    <h2 className='leading-snug uppercase'>Soy</h2>
                    <h2 className='leading-snug uppercase'>Josue Tomalá E.</h2>
                    <h2 className='leading-snug uppercase'>Desarro<span className='text-[#D01F5A]'>llador Web</span></h2>
                </div>
            </div>

        </section>
    </header>
  )
}
