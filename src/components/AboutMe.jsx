import ImgAbout from '../assets/img/img-about-me.svg';

export const AboutMe = () => {
  return (
    <section id='about-me' className=" flex h-[550px] bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: `url(${ ImgAbout })` }}>

        <div className="w-2/6 mt-20 px-10 ">
            <h2 className="uppercase text-white text-5xl font-extrabold">Sobre <span className="text-[#D01F5A]">MI</span></h2>
            <hr className="w-5/6 bg-white h-1 rounded-md"/>
        </div>

        <div className="w-4/6 flex flex-col justify-center text-white text-xl font-light px-10">
            <p className='mb-5'>Soy Josue Tomalá Esparza, actualmente estudiante de Ing. En Sistemas Computacionales, con gran gusto al desarrollo web, tanto para Front-end como Back-end, autotidácta desde el comienzo en mi aprendizaje en el mundo del desarrollo por tratar de aprender cada vez más y nuevas tecnologías.</p>

            <p>He realizado varios cursos de programación de diferentes tecnologias y ambitos, como: Diseño web, React, Flutter, Node Js. Actualmente me encuentro tratando de adquirir más conocimientos sobre React para desempeñarme de la mejor forma posible al momento de formar parte de un equipo de trabajo con algún proyecto de desarrollo web.</p>
        </div>

    </section>
  )
}
