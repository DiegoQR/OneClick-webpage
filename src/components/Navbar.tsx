import Logo from '../assets/logo.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Observer);


export default function Navbar() {

  useGSAP((_, contextSafe) => {
      // Animation for hover effects
      const hoverInAnimation = contextSafe!((e : HTMLElement) => {
        gsap.set(e.getElementsByTagName('div'), {scaleY: 0, backgroundColor: '#FE7743', transformOrigin: 'bottom'});
        gsap.to(e.getElementsByTagName('div'), 
        { 
          scaleY: 1, 
          duration: 0.5, 
          ease: 'bounce.out',
        });
      });
      const hoverOutAnimation = contextSafe!((e : HTMLElement) => {
        gsap.to(e.getElementsByTagName('div'), 
        { 
          scaleY: 0, 
          duration: 0.5,
        });
      });
      document.querySelectorAll('.hover-target').forEach((element) => {
        element.addEventListener('mouseenter', () => hoverInAnimation(element as HTMLElement));
        element.addEventListener('mouseleave', () => hoverOutAnimation(element as HTMLElement));
      });
  }, []);

  return (
    <nav className='flex justify-between items-stretch px-20 bg-blue'>
      <img src={Logo} alt="Logo" className='h-15'/>
      <ul className='flex items-stretch font-bold text-sm text-white'>
        <li className='hover-target flex items-center px-10 relative cursor-pointer'>
            <a className='z-1'>INICIO</a>
            <div className='w-full h-full absolute inset-x-0 bottom-0'></div>
        </li>
        <li className='hover-target flex items-center px-10 relative cursor-pointer'>
            <a className='z-1'>NUESTROS SERVICIOS</a>
            <div className='w-full h-full absolute inset-x-0 bottom-0'></div>
        </li>
        <li className='hover-target flex items-center px-10 relative cursor-pointer'>
            <a className='z-1'>CONTACTO</a>
            <div className='w-full h-full absolute inset-x-0 bottom-0'></div>
        </li>
      </ul>
    </nav>
  );
}