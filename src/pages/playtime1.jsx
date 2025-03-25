import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './playtime1.css';
import portada from "./assets/playtime00.png";
import playtime0 from "./assets/playtime 1.jpg";
import noti1 from "./assets/noti1.jpg";
import noti2 from "./assets/noti2.jpg";
import { Outlet, Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


function Playtime1() {
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
  };
  return (
  <div className='inicio'>
    <div className='contenedor'>
          <div className='encabezado'>
          <img src={portada} alt="foto de portada"/>
         <form onSubmit={handleSearch}>
          <input type="text" value={query} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder='Buscar...' aria-label='Buscar' />
            <button type='submit'>Buscar</button>
         </form>
          </div>
            <div className='lista'>
            <ul>
              <li><Link to="/playtime2"> playtime2</Link></li>
              <li><Link to="/playtime3"> playtime3</Link></li>
              <li><Link to="/playtime4"> playtime4</Link></li>
              <li><a href="#">Tienda</a></li>
            </ul>
            <Outlet />
            </div>
      
            <div className='botones'>
              <button>Iniciar Sesión</button>
              <button className='boton02'>Registrarse</button>
            </div>
    </div>

    <div className='contenido'>
    <h2>Poppy Playtime 1</h2>
    <img src={playtime0} alt="Foto de entrada" />
    <p>
    Playtime Co. solía ser el rey de la industria de fabricación de juguetes... Hasta que, un día, todas las personas dentro de la fábrica desaparecieron por completo. Ahora, años después, debes explorar la fábrica y descubrir la verdad.
    </p>
    <p>
    Los juguetes
          ¡Los juguetes de Playtime Co. son un grupo vivaracho! ¡Tenemos a Boogie Bot, Huggy Wuggy, Catbee, Poppy y muchos más! Ya que estás aquí, ¿por qué no visitas a los juguetes? Tal vez hagas algunos nuevos amigos…

          El GrabPack
          Este maravilloso GrabPack es una mochila que puedes vestir y viene acompañada de 2 manos artificiales unidas con cable de acero. Con esta útil herramienta de última generación, ¡los empleados de Playtime Co. no tienen límites! La siguiente lista de funciones debería ayudarte a vislumbrar lo que el GrabPack tiene para ofrecer:
    </p>
    <p>
    • ¡El poderoso agarre de las manos te permite mover objetos pesados con facilidad!
    </p>
    <p>
    • ¡Un alambre largo y flexible le otorga a cualquier empleado la habilidad de alcanzar todo lo que necesite!
    </p>
    <p>
    • ¡El cable de acero conduce la electricidad como pan comido!
    </p>
    <p>
    ¿Te quedarás con nosotros? Te espera una avalancha de diversión. Ya casi es la hora de jugar…
    </p>
    </div>

    <div className='noticias'>
      <div className='primero'>
      <div className='noticia1'>
      <img src={noti1} alt="noticia 1"/>
      </div>
      <div className='texto'>
      <p>VideoJuego</p>
      <h3>Los 4 consejos para superar Poppy Playtime capitulo 1 rápido y sencillo</h3>
      <p> Escrito por Urpi Martinez 01:30 | 30/01/2025</p>
      </div>
      </div>
    
    <div className='segundo'>
    <div className='noticia2'>
      <img src={noti2} alt="noticia 2"/>
      </div>
      <div className='texto2'>
      <p>VideoJuego</p>
      <h3>Los 4 consejos para superar Poppy Playtime capitulo 1 rápido y sencillo</h3>
      <p> Escrito por Urpi Martinez 01:30 | 30/01/2025</p>
      </div>
    </div>
    
    <div className='tercero'>
    <div className='noticia3'>
      <img src={noti2} alt="noticia 3"/>
      </div>
      <div className='texto3'>
      <p>VideoJuego</p>
      <h3>Los 4 consejos para superar Poppy Playtime capitulo 1 rápido y sencillo</h3>
      <p> Escrito por Urpi Martinez 01:30 | 30/01/2025</p>
      </div>
    </div>
    <div className='cuarto'>
    <div className='noticia4'>
      <img src={noti2} alt="noticia 4"/>
      </div>
      <div className='texto4'>
      <p>VideoJuego</p>
      <h3>Los 4 consejos para superar Poppy Playtime capitulo 1 rápido y sencillo</h3>
      <p> Escrito por Urpi Martinez 01:30 | 30/01/2025</p>
      </div>
    </div>
    <div className='quinto'>
    <div className='noticia5'>
      <img src={noti2} alt="noticia 5"/>
      </div>
      <div className='texto5'>
      <p>VideoJuego</p>
      <h3>Los 4 consejos para superar Poppy Playtime capitulo 1 rápido y sencillo</h3>
      <p> Escrito por Urpi Martinez 01:30 | 30/01/2025</p>
      </div>
    </div>

    </div>
    <div className='footer'>
      <br />
      <br />
      <br />
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
            <a href="https://www.youtube.com/watch?v=96cGBy95rdY/" target='_blank' rel='noopener noreferrer'>
              <i className="fa fa-youtube-play"></i>
            </a>
            <a href="https://www.twitter.com/" target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-twitter'></i>
            </a>
            <a href="https://www.facebook.com/@officalpoppyplaytime" target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-facebook'></i>
            </a>
            <a href="https://www.twitch.tv/search?term=poppy%20playtime%201" target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-twitch'></i>
            </a>
          </li>
        </ul>
      </div>
    

    </div>
  </div>
      
   
  )
}

export default Playtime1;