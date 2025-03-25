import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './playtime2.css';
import logo2 from "./assets/logo2.1.png";
import cuerpo from "./assets/cuerpo.jpg";
import foto1 from "./assets/primera1.avif";
import foto2 from "./assets/primera2.avif";
import foto3 from "./assets/primera3.avif";
import foto4 from "./assets/primera4.avif";
import foto5 from "./assets/primera5.avif";
import foto6 from "./assets/primera6.avif";
// import you from "./assets/youtube1.0.png";
// import face from "./assets/facebook1.0.png";
// import twi from "./assets/twitter1.0.png";
// import dis from "./assets/discord01.png";
// import foto7 from "./assets/primera7.avif"

import { Outlet, Link } from "react-router-dom";

function playtime2() {
  const [query, setQuery] = useState('');
    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (query) {
        console.log('Buscando:', query);
        navigate(`/${query}`);
      }
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSearch(e);
      }
    }
  return (
    <div className='comi'>
      <div className='contenido2'>
        <div className='encabezado2'>
        <img src={logo2} alt="Foto de portada 2" />
        <form onSubmit={handleSearch}>
          <input type="text" value={query} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder='Buscar...' aria-label='Buscar' />
          <button type='submit'>Buscar</button>
        </form>
      </div>

        <div className='listado'>
            <ul>
              <li><Link to="/playtime1"> playtime1</Link></li>
              <li><Link to="/playtime3"> playtime3</Link></li>
              <li><Link to="/playtime4"> playtime4</Link></li>
              <li><a href="#">Tienda</a></li>
            </ul>
            <Outlet />
            </div>

            <div className='btns02'>
              <button className='btn01'>Iniciar Sesión</button>
              <button className='btn02'>Registrarse</button>
            </div>
        </div>
        <hr />
        <hr />
         
         <div className='cuerpo'>
          <br />
         <h2>Poppy Playtime 2</h2>
         <br />
         <br />
         <img src={cuerpo} alt="Foto de entrada" />
         <br />
         <p>
         Luego de encontrarte con Huggy Wuggy y liberar a Poppy, tendrás que descender hacia las profundidades de la fábrica de juguetes de Playtime Co., donde te esperan acertijos desafiantes y juguetes espantosos. Cuélgate, balancéate y ábrete paso hacia la libertad. Haz todo lo posible para escapar... y no dejes que Mommy te encuentre.
         </p>
         <br />
         <p>
         Con tres veces la extensión del Capítulo 1, debes adentrarte en la fábrica de juguetes. Te esperan rompecabezas alucinantes y juguetes terroríficos. Ábrete paso entre la fuerza y el balanceo para ponerte a salvo. Intenta escapar si puedes...
         </p>
         <br />
         <p>
         Explora uno de los lugares más populares de Playtime Co.: ¡la Estación de Juegos! Esta estación de tren es mucho más que una simple parada: hay juegos, un área de juegos y mucho más. Y lo que es mejor, el tren te lleva directamente desde la fábrica.
         </p>
         <p>
         Tu oportunidad de escaparte de Playtime Co. está al alcance de tu mano...
         </p>
         </div>

         <div className='fc'>
         <div className='primeras'>
          <img src={foto1} alt="Foto 1"  className='F1'/>
          <img src={foto2} alt="Foto 2" className='F2'/>
          <img src={foto3} alt="Foto 3" className='F3'/>
         </div>
         <br />
         <div className='segundas'>
          <img src={foto4} alt="Foto 4" className='F4'/>
          <img src={foto5} alt="Foto 5" className='F5'/>
          <img src={foto6} alt="Foto 6" className='F6'/>
         </div>
         <br />
         </div>
         <div className='fcparrafo'>
         <p>• Colabora con Poppy para escapar hacia la libertad.</p>
         <br />
         <p>• La Estación de juegos es un lugar nuevo e inmenso que podrás explorar.</p>
         <br />
         <p>• Trata de no llamar la atención. 
          No querrás saber lo que te podría pasar si Mommy Long Legs llegara a atraparte...</p>
         <br />
         <p>• Disfruta de nuevos minijuegos, pero ten cuidado: un error podría ser tu fin.</p>
         <br />
         <p>• ¡Hay nuevos juguetes como el Conejo Bunzo y PJ Pugapillar que se mueren por conocerte!</p>
         <br />
         <p>• El GrabPack contará con habilidades nuevas que te permitirán superar obstáculos enigmáticos y novedosos.</p>
         </div>
       
         <div className='footero'>
              <br />
              <hr />
              <div className='terminos'>
              <p>Terminos de servicio</p>
              <br />
        
              <p>Politica de privacidad</p>
              <br />
        
              <p>Seguridad y protección</p>
              <br />
              <p>Politica de reembolso</p>
              </div>
              <br />
        
              <div className='copyright'>
                <h4>@ 2025. Todos los derechos reservados.</h4>
                
              </div>
              <div className='redes'>
                <ul>
                  <li>
                    <a href="https://www.youtube.com/watch?v=UETUFdrAOTU/" target='_blank' rel='noopener noreferrer'>
                      <i className="fa fa-youtube-play"></i>
                    </a>
                    <a href="https://www.twitter.com/" target='_blank' rel='noopener noreferrer'>
                      <i className='fa fa-twitter'></i>
                    </a>
                    <a href="https://www.facebook.com/groups/1459264714507586/" target='_blank' rel='noopener noreferrer'>
                      <i className='fa fa-facebook'></i>
                    </a>
                    <a href="https://www.twitch.tv/search?term=poppy%20playtime%202" target='_blank' rel='noopener noreferrer'>
                      <i className='fa fa-twitch'></i>
                    </a>
                  </li>
                </ul>
              </div> 
            </div>
    </div>
  )
}


export default playtime2;

