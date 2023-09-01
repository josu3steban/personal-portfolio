import ImgAbout from '../assets/img/img-about-me.svg';

export const AboutMe = () => {
  return (
    <section id='about-me'
      className="

        sm:w-full
        sm:h-auto
        sm:flex-col
      
        flex 
        h-[550px] 
        bg-cover 
        bg-bottom 
        bg-no-repeat
        bg-[url('./assets/img/img-about-me.svg')]
      ">

        <div className="
          sm:w-2/3 
          sm:text-3xl 
          sm:p-0 
          sm:ml-5 
          sm:mt-10

          text-white 
          text-5xl 
          font-extrabold 
          w-2/6 
          mt-20 
          px-10
        ">
            <h2 className="uppercase">Sobre <span className="text-[#D01F5A]">MI</span></h2>
            <hr className="sm:w-full w-5/6 bg-white h-1 rounded-md"/>
        </div>

        <div className="

          sm:w-full
          sm:px-5
          sm:text-base
          sm:mt-5
          sm:font-normal
        
          w-4/6
          flex
          flex-col
          justify-center
          text-white
          text-xl
          font-light
          px-10
        ">
            <p className='sm:mb-3 mb-5'>Ing. En Sistemas Computacionales, con gran gusto al desarrollo web, tanto para Front-end como Back-end, autodidácta desde el comienzo en el mundo del desarrollo por tratar de aprender cada vez más y nuevas tecnologías.</p>

            <p>He realizado varios cursos de programación de diferentes tecnologías y ámbitos, como: Diseño web, React, Flutter, Node Js. Actualmente me encuentro tratando de adquirir más conocimientos sobre React para desempeñarme de la mejor forma posible al momento de formar parte de un equipo de trabajo con algún proyecto de desarrollo.</p>
        </div>

    </section>
  )
}
