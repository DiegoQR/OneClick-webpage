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
          gsap.to(e, {
              duration: 0.5,
              color: '#FE7743',
          })
      });
      const hoverOutAnimation = contextSafe!((e : HTMLElement) => {
          gsap.to(e, {
              duration: 0.5,
              color: '#FFFFFF',
          });
      });
      document.querySelectorAll('.hover-target').forEach((element) => {
        element.addEventListener('mouseenter', () => hoverInAnimation(element as HTMLElement));
        element.addEventListener('mouseleave', () => hoverOutAnimation(element as HTMLElement));
      });
  }, []);

  return (
    <nav className='flex justify-between items-stretch px-20 bg-blue-light'>
      <img src={Logo} alt="Logo" />
      <ul className='flex gap-10 items-stretch font-bold text-lg text-white'>
        <li className='hover-target flex items-center border-b-5 border-orange'>
            <a>INICIO</a>
        </li>
        <li className='hover-target flex items-center border-b-5 border-orange'>
            <a>NUESTROS SERVICIOS</a>
        </li>
        <li className='hover-target flex items-center border-b-5 border-orange'>
            <a>CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
}