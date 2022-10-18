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
import Angular from '../assets/img/angular.png';
import Node from '../assets/img/node.png';
import Npm from '../assets/img/npm.png';
import ReactImg from '../assets/img/react.png';
import ReduxImg from '../assets/img/redux.png';
import Rest from '../assets/img/rest.png';
import Tail from '../assets/img/tailwind.png';
import Github from '../assets/img/github.png';


export const Skills = () => {
  return (
    <section id='skills' 
    className=' 
        sm:w-full
        sm:h-auto

        flex 
        flex-col
        bg-gradient-to-t
        from-[#F3F4F6] 
        via-[#F3F4F6] 
        to-[#1E91D6]
    '>

        <div className="
            sm:w-3/4
            sm:text-3xl 
            sm:p-0 
            sm:ml-5 
            sm:mt-10
        
            w-2/6 
            mt-20 
            px-10

            text-[#17122A]
            text-5xl
            font-extrabold
        ">
            <h2 className="uppercase">Habili<span className="text-[#D01F5A]">dades</span></h2>
            <hr className="sm:w-full border-none bg-[#17122A] h-1 rounded-md"/>
        </div>

        <div className="
            sm:flex-col
            sm:mt-10
            sm:items-center
            sm:mb-10
        
            mt-20
            mb-20
            flex
            flex-row
            px-5
            gap-5
        ">


            <div className="
                sm:w-full
                sm:border-none
                sm:p-0


                w-1/3
                pr-5
                border-[#17122A]
                border-r-4
                flex
                flex-col
                items-center
                gap-5
            ">

                <div className="sm:translate-x-2 bg-[#17122A] ">
                    <h3 className='sm:text-3xl sm:font-bold text-[#17122A] text-4xl font-extrabold bg-white p-2 tracking-widest -translate-y-2 -translate-x-2'>FRONT-END</h3>
                </div>

                <div className="sm:gap-5 sm:text-sm sm:font-bold  flex gap-5 text-[#17122A] text-xl font-extrabold">
                    <div className="text-center">
                        <img src={Html} alt="icono html" className='sm:w-16 w-24'/>
                        <p>HTML</p>
                    </div>
                    
                    <div className="text-center">
                        <img src={Css} alt="icono css" className='sm:w-16 w-24'/>
                        <p>CSS</p>
                    </div>

                    <div className="text-center">
                        <img src={Angular} alt="icono angular" className='sm:w-16 w-24'/>
                        <p>Angular</p>
                    </div>
                </div>

                <div className="sm:gap-5 sm:text-sm sm:font-bold  flex gap-5 text-[#17122A] text-xl font-extrabold">

                    <div className="text-center">
                        <img src={ReactImg} alt="icono react" className='sm:w-16 w-24'/>
                        <p>REACT</p>
                    </div>
                    
                    <div className="text-center">
                        <img src={ReduxImg} alt="icono redux" className='sm:w-16 w-24'/>
                        <p>REDUX</p>
                    </div>

                </div>

                {/* <div className="flex gap-5 text-[#1F2858] text-xl font-extrabold"> */}

                    <div className="sm:text-sm sm:font-bold  flex flex-col items-center text-[#17122A] text-xl font-extrabold">
                        <img src={Tail} alt="icono TAILWIND" className='sm:w-16 w-24'/>
                        <p>TAILWINDCSS</p>
                    </div>

                {/* </div> */}

                
                
            </div>

            <div className="
                sm:w-full
                sm:border-none
                sm:p-0
                sm:mt-10


                w-1/3
                pr-5
                border-[#17122A]
                border-r-4
                flex
                flex-col
                items-center
                gap-5
            ">

                <div className="sm:translate-x-2 bg-[#17122A] ">
                    <h3 className='sm:text-3xl sm:font-bold text-[#17122A] text-4xl font-extrabold bg-white p-2 tracking-widest -translate-y-2 -translate-x-2'>BACK-END</h3>
                </div>

                <div className="sm:gap-5 sm:text-sm sm:font-bold flex gap-5 text-[#1F2858] text-xl font-extrabold">
                    <div className="text-center">
                        <img src={Node} alt="icono node" className='sm:w-16 w-24'/>
                        <p>NODE JS</p>
                    </div>
                    
                    <div className="text-center">
                        <img src={Express} alt="icono express" className='sm:w-16 w-24'/>
                        <p>EXPRESS</p>
                    </div>

                    <div className="text-center">
                        <img src={Js} alt="icono js" className='sm:w-16 w-24'/>
                        <p>JS</p>
                    </div>
                </div>

                <div className="sm:gap-5 sm:text-sm sm:font-bold  flex gap-5 text-[#1F2858] text-xl font-extrabold">

                    <div className="text-center">
                        <img src={Mongo} alt="icono mongo" className='sm:w-16 w-24'/>
                        <p>MONGO DB</p>
                    </div>
                    
                    <div className="text-center">
                        <img src={Mysql} alt="icono mysql" className='sm:w-16 w-24'/>
                        <p>MYSQL</p>
                    </div>

                </div>

                <div className="sm:gap-5 sm:text-sm sm:font-bold  flex gap-5 text-[#1F2858] text-xl font-extrabold">

                    <div className="text-center">
                        <img src={Rest} alt="icono api rest" className='sm:w-16 w-24'/>
                        <p>API REST</p>
                    </div>

                </div>

            </div>

            <div className="
                sm:w-full
                sm:border-none
                sm:p-0
                sm:mt-10


                w-1/3
                pr-5
                border-[#17122A]
                border-r-4
                flex
                flex-col
                items-center
                gap-5
            ">

                <div className="sm:translate-x-2 bg-[#17122A] ">
                    <h3 className='sm:text-3xl sm:font-bold text-[#17122A] text-4xl font-extrabold bg-white p-2 tracking-widest -translate-y-2 -translate-x-2'>OTROS</h3>
                </div>

                <div className="sm:gap-5 sm:text-sm sm:font-bold  flex gap-5 text-[#1F2858] text-xl font-extrabold">
                    <div className="text-center">
                        <img src={Flutter} alt="icono flutter" className='sm:w-16 w-24'/>
                        <p>FLUTTER</p>
                    </div>
                    
                    <div className="text-center">
                        <img src={Npm} alt="icono npm" className='sm:w-16 w-24'/>
                        <p>NPM</p>
                    </div>

                    <div className="text-center">
                        <img src={Git} alt="icono git" className='sm:w-16 w-24'/>
                        <p>GIT</p>
                    </div>
                </div>

                <div className="sm:gap-5 sm:text-sm sm:font-bold  flex gap-5 text-[#1F2858] text-xl font-extrabold">

                    <div className="text-center">
                        <img src={Github} alt="icono github" className='sm:w-16 w-24'/>
                        <p>GITHUB</p>
                    </div>

                </div>

            </div>

        </div>
        
    </section>
  )
}
