import ImgPaciente from '../assets/img/pract-pacientes.jpeg';
import ImgControl from '../assets/img/pract-control.jpeg';
import ImgCripto from '../assets/img/pract-cripto.jpeg';
import ImgAdmin from '../assets/img/pract-admin.jpeg';

export const Projects = () => {
  return (
    <section id='practices' className='flex flex-col bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF] to-[#F3F4F6]'>

        <div className="w-2/6 mt-20 px-10 ">
            <h2 className="uppercase text-[#17122A] text-5xl font-extrabold">Prác<span className="text-[#D01F5A]">ticas</span></h2>
            <hr className="border-none bg-[#17122A] h-1 rounded-md"/>
        </div>

        <div className="flex flex-col items-center mt-20 mb-20">

            <article className='w-3/4 flex gap-5 p-10 border-[#17122A] border-l-2 border-b-2'>

                <div className="flex flex-col w-1/2 text-[#17122A]">
                    <div className="grow flex flex-col justify-center">
                        <h2 className='mb-5 uppercase text-2xl font-bold'>Registro de <span className='text-[#D01F5A]'>pacientes</span></h2>
                        <p>Práctica en base a cursos realizados, pero siguiendo una estructura y diseño de gustos personales. Consiste es un formulario para agregar pacientes y a una lista de estos mismos. Hecho con React y Tailwindcss</p>
                    </div>

                    <div className="flex justify-evenly">
                        <a className='uppercase block p-2 text-[#D01F5A] border-2 border-[#D01F5A] rounded-md hover:text-white hover:bg-[#D01F5A] transition-all ' href="https://practica-citas-medicas.netlify.app/" target="_blank">ver sitio</a>
                        <a className='uppercase block p-2 text-[#D01F5A] border-2 border-[#D01F5A] rounded-md hover:text-white hover:bg-[#D01F5A] transition-all' href="https://github.com/josu3steban/practica-citas" target="_blank">repositorio</a>
                    </div>
                </div>

                <div className="w-1/2 rounded-lg overflow-hidden shadow-lg border-2">
                    <img src={ ImgPaciente } alt="captura de pacientes" />
                </div>
                
            </article>

            <article className='mt-20 w-3/4 flex gap-5 p-10 border-[#17122A] border-r-2 border-b-2'>

                <div className="flex flex-col w-1/2 text-[#17122A]">
                    <div className="grow flex flex-col justify-center">
                        <h2 className='mb-5 uppercase text-2xl font-bold'>control de <span className='text-[#D01F5A]'>gastos</span></h2>
                        <p>Práctica que consiste es un registro de varios tipos de gastos dependiendo del presupuesto que se designe, pudiendo editar o eliminar los gastos deslizando a la izquierda o derecha. Hecho con React y haciendo uso del localstorage para la persistencia de los datos en el cliente.</p>
                    </div>

                    <div className="flex justify-evenly">
                        <a className='uppercase block p-2 text-[#D01F5A] border-2 border-[#D01F5A] rounded-md hover:text-white hover:bg-[#D01F5A] transition-all ' href="https://practica-control-gastos.netlify.app/" target="_blank">ver sitio</a>
                        <a className='uppercase block p-2 text-[#D01F5A] border-2 border-[#D01F5A] rounded-md hover:text-white hover:bg-[#D01F5A] transition-all' href="https://github.com/josu3steban/practica-control-gastos" target="_blank">repositorio</a>
                    </div>
                </div>

                <div className="w-1/2 rounded-lg overflow-hidden shadow-lg border">
                    <img src={ ImgControl } alt="captura de control de gastos" />
                </div>
                
            </article>

            <article className='mt-20 w-3/4 flex gap-5 p-10 border-[#17122A] border-l-2 border-b-2'>

                <div className="flex flex-col w-1/2 text-[#17122A]">
                    <div className="grow flex flex-col justify-center">
                        <h2 className='mb-5 uppercase text-2xl font-bold'>consulta de <span className='text-[#D01F5A]'>criptomonedas</span></h2>
                        <p>Práctica en la que consiste en un contizador de criptomonedas haciendo uso de una API pública de cripos. Hecho con React y Style Components y Redux</p>
                    </div>

                    <div className="flex justify-evenly">
                        <a className='uppercase block p-2 text-[#D01F5A] border-2 border-[#D01F5A] rounded-md hover:text-white hover:bg-[#D01F5A] transition-all ' href="https://practica-crypto.netlify.app/" target="_blank">ver sitio</a>
                        <a className='uppercase block p-2 text-[#D01F5A] border-2 border-[#D01F5A] rounded-md hover:text-white hover:bg-[#D01F5A] transition-all' href="https://github.com/josu3steban/practica-cripto" target="_blank">repositorio</a>
                    </div>
                </div>

                <div className="w-1/2 rounded-lg overflow-hidden shadow-lg border">
                    <img src={ ImgCripto } alt="captura de consulta de criptomonedas" />
                </div>
                
            </article>

            <article className='mt-20 w-3/4 flex gap-5 p-10 border-[#17122A] border-r-2 border-b-2'>

                <div className="flex flex-col w-1/2 text-[#17122A]">
                    <div className="grow flex flex-col justify-center">
                        <h2 className='mb-5 uppercase text-2xl font-bold'>administración de <span className='text-[#D01F5A]'>personas</span></h2>
                        <p>Práctica que consiste en una CRUD de administracón de personas, haciendo uso de json-server, para la simulación de peticiones a una API REST. Hecho con React, Tailwindcss, Redux, Json-Server, Formik y Yup</p>
                    </div>

                    <div className="flex justify-evenly">
                        <a className='uppercase block p-2 text-[#D01F5A] border-2 border-[#D01F5A] rounded-md hover:text-white hover:bg-[#D01F5A] transition-all ' href="https://practica-aspirante.netlify.app/" target="_blank">ver sitio</a>
                        <a className='uppercase block p-2 text-[#D01F5A] border-2 border-[#D01F5A] rounded-md hover:text-white hover:bg-[#D01F5A] transition-all' href="https://github.com/josu3steban/practica-admin-aspirantes" target="_blank">repositorio</a>
                    </div>
                </div>

                <div className="w-1/2 rounded-lg overflow-hidden shadow-lg border">
                    <img src={ ImgAdmin } alt="captura de administracion de personas" />
                </div>
                
            </article>

        </div>
        
    </section>
  )
}
