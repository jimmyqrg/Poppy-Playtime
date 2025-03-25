import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './playtime3.css';
import logo3 from "./assets/cap3.webp";
import anima2 from "./assets/cap3.2.webp";
import anima3 from "./assets/cap3.3.webp";
import anima5 from "./assets/cap3.5.jpg";
import anima6 from "./assets/cap3.6.jpg";
import anima7 from "./assets/cap3.7.jpg";
import anima8 from "./assets/cap3.8.webp";
import anima9 from "./assets/cap3.9.jpg";
import anima10 from "./assets/cap3.10.jpg";
import anima11 from "./assets/cap3.11.jpg";
import des1 from "./assets/playtime 1.jpg";
import des2 from "./assets/primera1.avif";
import des3 from "./assets/descarga3.1.jpg";
import des4 from "./assets/descarga4.webp";
import { Outlet, Link } from "react-router-dom";


function playtime3() {
  const[query, setQuery] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if(query) {
      console.log('Buscando:', query);
      navigate(`/${query}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const manejarClick = (descripcionImg) => {
    setDescripcion(descripcionImg);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };
  return (
    <div className='contenido3'>
        <div className='encabezado3'>
            <div className='enca3'>
            <img src={logo3} alt="Foto de portada3" />
            <form onSubmit={handleSearch}>
              <input type="text" value={query} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder='Buscar...' aria-label='Buscar' />
                <button type='submit'>Buscar</button>
            </form>
            </div>

            <div className='listado-3'>
            <ul>
              <li><Link to="/playtime1"> playtime1</Link></li>
              <li><Link to="/playtime2"> playtime2</Link></li>
              <li><Link to="/playtime4"> playtime4</Link></li>
              <li><a href="#">Tienda</a></li>
            </ul>
            <Outlet />
            </div>
            <div className='btns03'>
              <button className='btn1-3'>Iniciar Sesión</button>
              <button className='btn2-3'>Registrarse</button>
            </div>

        </div>
        <hr />
        <hr />
        
        <div className='cuerpo-3'>
          <br />
          <h2>Poppy Playtime 3</h2>
          <br />
          <br />
          <img src={anima2} alt="Foto de la guardería" />
          <br />
          <br />
          <p>
          Un desolado orfanato conocido como La Guardería se oculta bajo la una vez fabrica mas mágica del mundo.
          </p>
          <p>
          Debes atravesar este lugar maldito, resolviendo puzzles y esquivando las pesadillas que se ocultan en las sombras. 
          </p>
          <p>
          Las respuestas estan entre las sabanas ensangrentadas y los ecos que retumban... si sobrevives a ellos.
          </p>
          <br />
          <p>
          Este es el capítulo de Poppy Playtime más grande y escalofriante hasta ahora. Encontrarás mucho más de lo que puedes esperar…
          </p>
          <br />
          <p>
          Te esperan nuevos monstruos y son mucho más que simples juguetes.
          </p>
          <br />
          <p>Información Adicional</p>
          <br />
          <p>
          • La Guardería es el orfanato fantástico propio de Playtime. Y podrás explorarlo.
          </p>
          <p>
          • ¡El GrabPack recibió una mejora!
          </p>
          <p>
          • Las nuevas manos te permitirán explorar de maneras nuevas y creativas.
          </p>
          <p>
          • Una máscara de gas será la única manera de explorar a salvo el humo rojo que se encuentra en el aire.
          </p>
          <p>
          • Al fin se contestarán todas las preguntas. Las mentiras no permanecen enterradas para siempre...
          </p>
          <br />
        </div>
        
        <div className='noticias3-0'>
          <h2>Enterate de lo más reciente</h2>
          <div className='not3-1'>
            <div className='img3'>
              <img src={anima3} alt="Foto de noticia1" />
            </div>
            <div className='texto3-1'>
              <p>Noticias</p>
              <h4>Rompieron su promesa en menos de 3 semanas. El capítulo 3 de Poppy Playtime sale un 50% más caro de lo anunciado y sin avisar</h4>
              <p>Hace 10 meses - Javier - Sin comentarios</p>
            </div>
          </div>
          <hr />

          <div className='not3-2'>
            <div className='img3'>
              <img src={anima3} alt="Foto de noticia2" />
            </div>
            <div className='texto3-2'>
              <p>Noticias</p> 
              <h4>Rompieron su promesa en menos de 3 semanas. El capítulo 3 de Poppy Playtime sale un 50% más caro de lo anunciado y sin avisar</h4>
              <p>Hace 10 meses - Javier - Sin comentarios</p>
            </div>
          </div>
          <hr />

          <div className='not3-3'>
            <div className='img3'>
              <img src={anima3} alt="Foto de noticia3" />
            </div>
            <div className='texto3-3'>
              <p>Noticias</p>           
              <h4>Rompieron su promesa en menos de 3 semanas. El capítulo 3 de Poppy Playtime sale un 50% más caro de lo anunciado y sin avisar</h4>
              <p>Hace 10 meses - Javier - Sin comentarios</p>
            </div>
          </div>
          <hr />
          <div className='not3-3'>
            <div className='img3'>
              <img src={anima3} alt="Foto de noticia4" />
            </div>
            <div className='texto3-1'>
              <p>Noticias</p>
              <h4>Rompieron su promesa en menos de 3 semanas. El capítulo 3 de Poppy Playtime sale un 50% más caro de lo anunciado y sin avisar</h4>
              <p>Hace 10 meses - Javier - Sin comentarios</p>
            </div>
          </div>
          <hr />
          <div className='not3-3'>
            <div className='img3'>
              <img src={anima3} alt="Foto de noticia5" />
            </div>
            <div className='texto3-1'>
              <p>Noticias</p>
              <h4>Rompieron su promesa en menos de 3 semanas. El capítulo 3 de Poppy Playtime sale un 50% más caro de lo anunciado y sin avisar</h4>
              <p>Hace 10 meses - Javier - Sin comentarios</p>
            </div>
          </div>
        </div>
        
<br />
<br />
        <div className='personajes'>
          <h2>Criaturas Sonrientes</h2>
          <br />
          <br />
          <br />
        <div className='personajes1'>
          <img src={anima3} className='Catnap' alt="Foto de capnap" width="190px" height="120px" onClick={() => manejarClick('Este es CatNap, un personaje misterioso y sombrío del capitulo 3 de Poppy Playtime, además de ser el enemigo principal de esta historia hay que cuidarse de su gas rojo el cual usa para atacar y dejar inconsciente a sus víctimas.')} style={{cursor:'pointer', marginBottom:'10px'}}/>
          <h4>CatNap</h4>
          <img src={anima5} className= 'Bubba' alt="Foto de Bubba" width="190px" height="120px" onClick={() => manejarClick('Bubba Bubbaphant, un personaje imponente del capitulo 3.')} style ={{cursor:'pointer', marginBottom:'10px'}} />
          <h4>Bubba Bubbaphant</h4>
          <img src={anima6} className= 'Crafty' alt="Foto de Crafty" width="190px" height="120px" onClick={() => manejarClick('CraftyCorn es uno de los nuevos personajes que aparece en el capitulo 3, conocido por su agilidad.')} style ={{cursor:'pointer', marginBottom:'10px'}}/>
          <h4>CraftyCorn</h4>
          <img src={anima10} className= 'Picky' alt="Foto de PickyPiggy" width="190px" height="120px" onClick={() => manejarClick('PickyPiggy, uno de los antagonistas más sorprendentes de la serie.')} style ={{cursor:'pointer', marginBottom:'10px'}}/>
          <h4>PickyPiggy</h4>
        </div>
        <div className='personajes2'>
        <img src={anima7} className= 'Dogday' alt="Foto de DogDay" width="190px" height="120px" onClick={() => manejarClick('DogDay, es uno de los personajes atrapado por Catnap ya que este era una especie de aliado contra CatNap.')} style ={{cursor:'pointer', marginBottom:'10px'}} />
          <h4>DogDay</h4>
          <img src={anima8} className= 'Hoppy' alt="Foto de Hoppy Hopscotch" width="190px" height="120px" onClick={() => manejarClick('Hoppy Hopscotch, aunque poco se sepa de este personaje era conocido por dar grandes saltos debido a sus fuertes piernas.')} style ={{cursor:'pointer', marginBottom:'10px'}} />
          <h4>Hoppy Hopscotch</h4>
          <img src={anima9} className= 'Kickin' alt="Foto de KickinChiken" width="190px" height="120px" onClick={() => manejarClick('KickinChicken, este personaje era el mejor amigo de CatNap junto a DogDay y Bubba Bubbaphant.')} style ={{cursor:'pointer', marginBottom:'10px'}}/>
          <h4>KickinChicken</h4>
          <img src={anima11} className= 'Miss' alt="Foto de Miss" width="190px" height="120px" onClick={() => manejarClick('Miss Delight, era la maestra de la guardería, por temor a que CatNap la asesinara decidio serle leal y acabar con cualquier enemigo de CatNap.')} style ={{cursor:'pointer', marginBottom:'10px'}}/>
          <h4>Miss Delight</h4>
        </div>
        </div>
        {showModal && (
          <div className="modal-overlay">  
          <div className='modal-content'>
            <h3>Descripcion del Personaje</h3>
            <p>{descripcion}</p>
            <button onClick={cerrarModal}>Cerrar</button>
          </div>
          </div>
        )};
        <div className='descarga'>
        <h3>Descarga los capitulos aqui!</h3>
        <br />
          <div className='descarga1'>
            <div className='desimagen1'>
            <img src={des1} alt="Playtime 1" />
            </div>
          <br />
          <div className='textdesc'>
          <h4>Poppy Playtime 1</h4> 
          <br />
          <p>Tamaño: 16GB</p>
          <br />
          </div>
          <button>Descargar</button>
          </div>

          <div className='descarga2'>
          <img src={des2} alt="Playtime 2" />
          <br />
          <div className='textdesc2'>
          <h4>Poppy Playtime 2</h4> 
          <br />
          <p>Tamaño: 20GB</p>
          <br />
          </div>
          <button>Descargar</button>
          </div>

          <div className='descarga3'>
          <img src={des3} alt="Playtime 3"/>
          <br />
          <div className='textdesc3'>
          <h4>Poppy Playtime 3</h4>
          <br /> 
          <p>Tamaño: 24GB</p>
          <br />
          </div>
          <button>Descargar</button>
          </div>

          <div className='descarga4'>
          <img src={des4} alt="Playtime 4" />
          <br />
          <div className='textdesc4'>
          <h4>Poppy Playtime 4</h4> 
          <br />
          <p>Tamaño: 30GB</p>
          <br />
          </div>
          <button>Descargar</button>
          </div>

        </div>
        <br />
        <br />
<hr />
        <div className='f3'>
        <div className='terminos3'>
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

              <div className='copyright'>
                <h4>@ 2025. Todos los derechos reservados.</h4>
              </div>

               <div className='redes'>
               <ul>
                <li>
                  <a href="https://www.youtube.com/watch?v=Xvfqjwb2biU/" target='_blank' rel='noopener noreferrer'>
                    <i className="fa fa-youtube-play"></i>
                  </a>
                  <a href="https://www.twitter.com/" target='_blank' rel='noopener noreferrer'>
                    <i className='fa fa-twitter'></i>
                  </a>
                  <a href="https://www.facebook.com/groups/716765283912520/" target='_blank' rel='noopener noreferrer'>
                    <i className='fa fa-facebook'></i>
                  </a>
                  <a href="https://www.twitch.tv/search?term=poppy%20playtime%203" target='_blank' rel='noopener noreferrer'>
                    <i className='fa fa-twitch'></i>
                  </a>
                </li>
              </ul>
              </div> 

        </div>
    </div>
  )
}

export default playtime3;
