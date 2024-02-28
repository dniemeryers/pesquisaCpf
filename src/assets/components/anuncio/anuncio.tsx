import {useState, useEffect} from 'react';

import {Anunciar} from './style';

import LogoIcnv from '../../img/logo icnv branco.png';
import Fechar from '../../img/fechar.png';


import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom';


export function Anuncio() {  
const [showAnuncio, setShowAnuncio] = useState(true);  

const handleClose = () => {
    setShowAnuncio(false);
  };

return(

    <>  
    {showAnuncio && (
    <Anunciar>
       
        <div className='informacao'>
        <img className="logoIcnv" src={LogoIcnv} alt="" />
          <button className='fechar' onClick={handleClose}><div><img width="45px" src={Fechar} alt="" /></div></button>
        </div>
    </Anunciar> )}     


</>)}