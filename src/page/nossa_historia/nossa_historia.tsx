import React, { useState } from 'react';
import {Header} from '../../assets/components/header/header' 
import Icnv from '../../assets/img/logo icnv.png'
import { TabContainer, Tab, Content, TabProps,ContentProps,H1,Container } from './style'; // Importe os estilos e tipos corretamente

export const Nossa_historia: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    
    <div>
      <Header/>
      <H1>Nossa História</H1>
      <Container>
      <TabContainer>
        <Tab className="icnv" active={activeTab === 0} onClick={() => handleTabClick(0)}>
          ICNV CERÂMICA
        </Tab>
        <Tab  active={activeTab === 1} onClick={() => handleTabClick(1)}>
          IGREJA CRISTÃ NOVA VIDA
        </Tab>
      </TabContainer>
      <Content active={activeTab === 0}>
        Conteúdo da Aba 1
      </Content>
      <Content active={activeTab === 1}>
        Conteúdo da Aba 2
      </Content>
      </Container>      
    </div>
  );
};

