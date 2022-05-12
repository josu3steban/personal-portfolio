import ImgSkills from '../assets/img/img-skills.svg';
import Html from '../assets/img/html.png';
import Css from '../assets/img/css.png';
import Express from '../assets/img/express.png';
import Flutter from '../assets/img/flutter.png';
import Git from '../assets/img/git.png';
import Js from '../assets/img/js.png';
import Mongo from '../assets/img/mongo.png';
import Mysql from '../assets/img/mysql.png';
import Nextjs from '../assets/img/nextjs.png';
import Node from '../assets/img/node.png';
import Npm from '../assets/img/npm.png';
import ReactImg from '../assets/img/react.png';
import ReduxImg from '../assets/img/redux.png';
import Rest from '../assets/img/rest.png';
import Tail from '../assets/img/tailwind.png';
import Github from '../assets/img/github.png';


export const Skills = () => {
  return (
    <section className=' flex flex-col bg-center bg-cover'  style={{ backgroundImage: `url(${ ImgSkills })` }}>

        <div id='skills' className="w-2/6 text-white text-5xl text-center font-extrabold mt-20 px-10">
            <h2 className=' bg-[#DE3E76] p-2 rounded-md'>Habilidades</h2>
        </div>

        <div className="mt-20 mb-10 flex flex-row justify-between px-5 gap-5 relative">


            <div className=" rounded-xl flex flex-col items-center gap-5">

                <div className="0 bg-[#17122A] ">
                    <h3 className='text-[#17122A] text-4xl font-extrabold bg-white p-2 tracking-widest -translate-y-2 -translate-x-2'>FRONT-END</h3>
                </div>

                <div className="flex gap-5 text-[#1F2858] text-xl font-extrabold">
                    <div className="text-center">
                        <img src={Html} alt="icono html" className='w-24'/>
                        <p>HTML</p>
                    </div>
                    
                    <div className="text-center">
                        <img src={Css} alt="icono css" className='w-24'/>
                        <p>CSS</p>
                    </div>

                    <div className="text-center">
                        <img src={Nextjs} alt="icono nextjs" className='w-24'/>
                        <p>NEXT JS</p>
                    </div>
                </div>

                <div className="flex gap-5 text-[#1F2858] text-xl font-extrabold">

                    <div className="text-center">
                        <img src={ReactImg} alt="icono react" className='w-24'/>
                        <p>REACT</p>
                    </div>
                    
                    <div className="text-center">
                        <img src={ReduxImg} alt="icono redux" className='w-24'/>
                        <p>REDUX</p>
                    </div>

                </div>

                <div className="flex gap-5 text-[#1F2858] text-xl font-extrabold">

                    <div className="text-center">
                        <img src={Tail} alt="icono TAILWIND" className='w-24'/>
                        <p>TAILWINDCSS</p>
                    </div>

                </div>

                
                
            </div>

            <div className="absolute left-48 top-60">
                <hr className='opacity-30 rounded-lg bg-[#DE3E76] border-2 border-[#DE3E76] w-96  origin-center -rotate-[80deg]'/>
            </div>

            <div className=" rounded-xl flex flex-col items-center gap-5">

                <div className="0 bg-[#17122A] ">
                    <h3 className='text-[#17122A] text-4xl font-extrabold bg-white p-2 tracking-widest -translate-y-2 -translate-x-2'>BACK-END</h3>
                </div>

                <div className="flex gap-5 text-[#1F2858] text-xl font-extrabold">
                    <div className="text-center">
                        <img src={Node} alt="icono node" className='w-24'/>
                        <p>NODE JS</p>
                    </div>
                    
                    <div className="text-center">
                        <img src={Express} alt="icono express" className='w-24'/>
                        <p>EXPRESS</p>
                    </div>

                    <div className="text-center">
                        <img src={Js} alt="icono js" className='w-24'/>
                        <p>JS</p>
                    </div>
                </div>

                <div className="flex gap-5 text-[#1F2858] text-xl font-extrabold">

                    <div className="text-center">
                        <img src={Mongo} alt="icono mongo" className='w-24'/>
                        <p>MONGO DB</p>
                    </div>
                    
                    <div className="text-center">
                        <img src={Mysql} alt="icono mysql" className='w-24'/>
                        <p>MYSQL</p>
                    </div>

                </div>

                <div className="flex gap-5 text-[#1F2858] text-xl font-extrabold">

                    <div className="text-center">
                        <img src={Rest} alt="icono api rest" className='w-24'/>
                        <p>API REST</p>
                    </div>

                </div>

            </div>

            <div className="absolute right-52 top-60">
                <hr className='opacity-30 rounded-lg bg-[#DE3E76] border-2 border-[#DE3E76] w-96  origin-center -rotate-[80deg]'/>
            </div>

            <div className="rounded-xl flex flex-col items-center gap-5">

                <div className="0 bg-[#17122A] ">
                    <h3 className='text-[#17122A] text-4xl font-extrabold bg-white p-2 tracking-widest -translate-y-2 -translate-x-2'>OTROS</h3>
                </div>

                <div className="flex gap-5 text-[#1F2858] text-xl font-extrabold">
                    <div className="text-center">
                        <img src={Flutter} alt="icono flutter" className='w-24'/>
                        <p>FLUTTER</p>
                    </div>
                    
                    <div className="text-center">
                        <img src={Npm} alt="icono npm" className='w-24'/>
                        <p>NPM</p>
                    </div>

                    <div className="text-center">
                        <img src={Git} alt="icono git" className='w-24'/>
                        <p>GIT</p>
                    </div>
                </div>

                <div className="flex gap-5 text-[#1F2858] text-xl font-extrabold">

                    <div className="text-center">
                        <img src={Github} alt="icono github" className='w-24'/>
                        <p>GITHUB</p>
                    </div>

                </div>

            </div>

        </div>
        
    </section>
  )
}
