import HeroImg from '../assets/hero4.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin , AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a web developer',
        social: {
            github: 'https://github.com/shivali-balu?tab=overview&from=2024-02-01&to=2024-02-24',
            linkedin: 'https://www.linkedin.com/in/sivali-balu-dev/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font' style={{marginTop : '90px'}}>Hi, <br/> Im Sivali Balu 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg}/>
    </section>
}
