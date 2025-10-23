import Logo from '../assets/logo.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Observer);


export default function Navbar() {

    useGSAP(() => {
        // Animation for hover effects
        Observer.create({
            target: ".hover-target",
            type: 'hover',
            onHover: (e) => {
                gsap.to(e.target, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        });
    }, []);
  return (
    <nav className='flex justify-between items-center px-10 bg-blue-light'>
      <img src={Logo} alt="Logo" />
      <ul className='flex gap-5 font-bold text-lg text-white'>
        <li>
            <a className='hover-target'>Inicio</a>
        </li>
        <li>
            <a className='hover-target'>Nuestros Servicios</a>
        </li>
        <li>
            <a className='hover-target'>Contacto</a>
        </li>
      </ul>
    </nav>
  );
}