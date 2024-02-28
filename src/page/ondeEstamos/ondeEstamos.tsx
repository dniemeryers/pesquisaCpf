import React from 'react';
import { Header } from '../../assets/components/header/header';
import Google from '../../assets/img/Google_Maps_Logo_2020.svg.png';
import Uber from '../../assets/img/uber.webp';
import Mapa from '../../assets/img/mapa icnvceramica.jpg'; // Substitua pelo caminho correto para o logotipo do Uber
import NoventaENove from '../../assets/img/99_icon_pax_ios.webp'; // Substitua pelo caminho correto para o logotipo do 99
import Waze from '../../assets/img/waze.png'; // Substitua pelo caminho correto para o logotipo do Waze
import { Container, H1 } from './style';

export function Onde_estamos() {
  const endereco = "R. Geni Saraíva, 1470, Cerâmica, Nova Iguaçu, RJ, 26031-482";
  const urlGoogleMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
  const urlUber = `uber://?action=setPickup&pickup=my_location&dropoff[formatted_address]=ICNV%20CERÂMICA&dropoff-22.733499057090427&dropoff-43.47451302917498`;
  
  return (
    <>
      <Header />
      <H1>Endereço
        <p>Rua Geni Saraíva, 1470 Cerâmica, Nova Iguaçu RJ, 26031-482</p>
      </H1>

      <Container>
        <div className='sobre'>
          <div className='emprego'>
            <div className='info'>
              <h1>Escolha como deseja chegar</h1>
             
            </div>
              <div className='icon'>
                <a href={urlGoogleMaps} target="_blank" rel="noopener noreferrer">
                <img className="map" src={Google} width="60px" alt="Google Maps" />
                </a>
                <a href={urlUber} target="_blank" rel="noopener noreferrer">
                <img src={Uber} width="60px" alt="Uber" />
                </a>
              </div>
            <p>Obs.: Verifique se o App está instalado no Celular</p>
          </div>
         
        </div>
        <div className='waze'>
        <iframe src="https://embed.waze.com/pt-BR/iframe?zoom=16&lat=-22.733499057090427&lon=-43.47451302917498&pin=1&desc=1"
  width="350" height="350"></iframe>
        </div>
      </Container>
    </>
  );
}
