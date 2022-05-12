
import ImgHeader from '../../assets/img/img-header.gif';
import ImgHeaderDer from '../../assets/img/img-header-der.jpg';

export const Header = () => {
  return (
    <header className="bg-[#1F2858]">
        <div className="flex justify-end mb-5 bg-[#1F2858] sticky top-0">
            <nav className="
                w-2/3
                flex
                justify-evenly
                gap-2
                font-bold
                text-white
                
            ">
                <a className="block uppercase p-2 hover:text-[#D01F5A] transition-all duration-200" href="#about-me">Sobre mi</a>
                <a className="block uppercase p-2 hover:text-[#D01F5A] transition-all duration-200" href="#skills">Habilidades</a>
                <a className="block uppercase p-2 hover:text-[#D01F5A] transition-all duration-200" href="">Curriculum</a>
                <a className="block uppercase p-2 hover:text-[#D01F5A] transition-all duration-200" href="">Proyectos</a>
                <a className="block uppercase p-2 hover:text-[#D01F5A] transition-all duration-200" href="">Contacto</a>
            </nav>
        </div>

        <section className="flex">
            <div className="w-1/2">
                <img className='w-full' src={ ImgHeader } alt="Imagen de header" />
            </div>

            <div className="w-1/2 flex items-center justify-center text-white text-5xl font-extrabold bg-contain" style={{backgroundImage:`URL(${ImgHeaderDer})`}}>
                <div className=" ">
                    <h2 className='leading-snug uppercase'>Soy</h2>
                    <h2 className='leading-snug uppercase'>Josue Tomalá E.</h2>
                    <h2 className='leading-snug uppercase'>Desarro<span className='text-[#D01F5A]'>llador Web</span></h2>
                </div>
            </div>
        </section>
    </header>
  )
}
