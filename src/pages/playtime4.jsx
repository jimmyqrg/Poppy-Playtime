import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./playtime4.css";
import logo4 from "./assets/logo4.webp";
import imagen1 from "./assets/yarnaby1.webp";
import imagen1Hover from "./assets/yarnaby-hover.webp";
import imagen2 from "./assets/escenario4.png";
import imagen3 from "./assets/doey.webp";
import imagen3Hover from "./assets/doey-hover.webp";
import imagen4 from "./assets/escenario 4.jpg";
import imagen5 from "./assets/objeto1.jpg";
import imagen6 from "./assets/objeto.jpeg";
import imagen7 from "./assets/escenario2.webp";
import imagen8 from "./assets/escenario3.webp";
import { Outlet, Link } from "react-router-dom";



function playtime4() {
  const [query, setQuery] = useState('');
  const[image1, setImage1] = useState(imagen1);
  const[image3, setImage3] = useState(imagen3);
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

  const handleKeyDown = (e) =>{
    if (e.key === `Enter`){
      handleSearch(e);
    }
  };
  return (
    <div className="contenido4">
         <div className='encabezado4'>
            <div className='enca4'>
            <img src={logo4} alt="Foto de portada4" />
            <form onSubmit={handleSearch}>
              <input type="text" value={query} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Buscar..." aria-label="Buscar" />
                <button type="submit">Buscar</button>
            </form>
            </div>

            <div className='listado-4'>
            <ul>
              <li><Link to="/playtime1"> playtime1</Link></li>
              <li><Link to="/playtime2"> playtime2</Link></li>
              <li><Link to="/playtime3"> playtime3</Link></li>
              <li><a href="#">Tienda</a></li>
            </ul>
            <Outlet />
            </div>
            <div className='btns04'>
              <button className='btn1-4'>Iniciar Sesión</button>
              <button className='btn2-4'>Registrarse</button>
            </div>

        </div>
        <hr />
        <hr />

        <div className="cuerpo-4">
            <br />
            <h2>Poppy Playtime 4</h2>
            <br />
            <br />
            <img src={imagen2} alt="Foto de portada 4" />
            <br />
            <br />
            <p>Te sumergirás en las profundidades desconocidas de la fábrica de Playtime Co., 
                un lugar mucho más hondo de lo que el mundo imaginaba. Ahí, te enfrentarás a nuevos enemigos terroríficos y descubrirás revelaciones impactantes. ¿Podrás burlar a las nuevas creaciones sobrenaturales que acechan en la oscuridad? ¿Sobrevivirás el tiempo suficiente para develar los misterios de los experimentos? Cada paso que des pondrá a prueba tu valentía, cada acertijo que encuentres desafiará tu mente, y cada rincón que explores podría ser el último que veas.</p>
        </div>
        <div className="img-1">
          <img 
          src={image1} 
          alt="Foto de yarnaby" 
          height="250px" 
          onMouseEnter={() => setImage1(imagen1Hover)} 
          onMouseLeave={()=> setImage1(imagen1)}/>
        </div>
        <div className="img-2">
          <img src={image3} alt="Foto de doey" onMouseEnter={() => setImage3(imagen3Hover)} onMouseLeave={()=> setImage3(imagen3)} />

        </div>
        <br />
        <br />
        <div className="title-d">
        <h2>Conoce más sobre poppy playtime 4</h2>
        </div>
        <br />
        <br />
     

        <div className="descripcion">
            <div className="descripcion-1">
            <img src={imagen5} alt="Foto de la oveja"  />
            <br />
            <p>Nuevos personajes y aliados, un nuevo grupo de personajes extraordinarios te guiarán y te perseguirán en tus pesadillas.</p>
            </div>
            <br />
            <div className="descripcion-2">
                <img src={imagen4} alt="Foto de los desafios" />
                <br />
                <p>Acertijos desafiantes, resuelve una serie de acertijos complejos que podrían marcar la diferencia entre la vida y la muerte.</p>
            </div>
            <br />
            <div className="descripcion-3">
                <img src={imagen8} alt="Foto de la historia" />
                <br />
                <p>Una historia expandida, descubre más detalles acerca de los secretos oscuros de Playtime Co. y su pasado siniestro.</p>
            </div>
            <br />
            <div className="descripcion-4">
                <img src={imagen7} alt="Foto de la atmosfera" />
                <br />
                <p>Un ambiente espeluznante, los gráficos escalofriantes y el audio inmersivo harán que no puedas dejar de temblar.</p>
            </div>
            <br />
            <div className="descripcion-5">
                <img src={imagen6} alt="Foto de la omnimano" />
                <br />
                <p>Nuevos objetos deberan ser encontrados por el jugador como la omnimano que está te ayudara con algunos desafíos que te encuentres en el camino.</p>
            </div>
        </div>
        <br />
        <hr />
        <hr />
       

       <div>
        <div className='f4'>
                <div className='terminos4'>
                  <br />
                      <p>Terminos de servicio</p>
                      <br />
                
                      <p>Politica de privacidad</p>
                      <br />
                
                      <p>Seguridad y protección</p>
                      <br />
                      <p>Politica de reembolso</p>
                      </div>
                      <br />
        
                      <div className='copyright4'>
                        <h4>@ 2025. Todos los derechos reservados.</h4>
                      </div>
        
                       <div className='redes4'>
                       <ul>
                        <li>
                          <a href="https://www.youtube.com/watch?v=ibOZa8WPIh4/" target='_blank' rel='noopener noreferrer'>
                            <i className="fa fa-youtube-play"></i>
                          </a>
                          <a href="https://www.twitter.com/" target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-twitter'></i>
                          </a>
                          <a href="https://www.facebook.com/Mobgamespoppy/videos/get-poppy-playtime-chapter-4-now-huggywugco3bjreuy/516701668100959/" target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-facebook'></i>
                          </a>
                          <a href="https://www.twitch.tv/search?term=poppy%20playtime%204" target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-twitch'></i>
                          </a>
                        </li>
                       </ul>
                      </div> 
                </div>
       </div>
    </div>
  )
}

export default playtime4;