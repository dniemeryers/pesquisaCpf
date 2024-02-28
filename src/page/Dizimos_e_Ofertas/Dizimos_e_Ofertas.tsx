import React, { useState, useRef, ChangeEvent } from 'react';
import { Experiencia } from './style';
import { Header } from '../../assets/components/header/header';
import Bradesco from '../../assets/img/bradesco-logo-novo-2018.png'
import Santander from '../../assets/img/santander-logo.png'

export function DizimoseOfertas() {
  const [inputValue, setInputValue] = useState('icnvceramica@hotmail.com');
  const [textoCopiado, setTextoCopiado] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputValue2, setInputValue2] = useState('02265325/0001-21');
  const [textoCopiado2, setTextoCopiado2] = useState(false);
  const inputRef2 = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  const copyToClipboard = () => {
    if (!inputRef.current) {
      console.error("Elemento de input não encontrado.");
      return;
    }
  
    try {
        const inputElement = inputRef.current as HTMLInputElement;
      // Copia o conteúdo para a área de transferência
      navigator.clipboard.writeText(inputRef.current.value).then(() => {
        // Indica que a cópia foi bem-sucedida (pode usar uma notificação ou algo similar)
        setTextoCopiado(true);
      }).catch((err) => {
        console.error('Falha ao copiar: ', err);
      });
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
   
  };

  const handleInputChange2 = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  const copyToClipboard2 = () => {
    if (!inputRef2.current) {
      console.error("Elemento de input não encontrado.");
      return;
    }
  
    try {
        const inputElement = inputRef2.current as HTMLInputElement;
      // Copia o conteúdo para a área de transferência
      navigator.clipboard.writeText(inputRef2.current.value).then(() => {
        // Indica que a cópia foi bem-sucedida (pode usar uma notificação ou algo similar)
        setTextoCopiado2(true);
      }).catch((err) => {
        console.error('Falha ao copiar: ', err);
      });
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
   
  };

    function defafaultValue(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
    }

  return (
    <>
      <Header />
      <Experiencia>
        <h1 className='titulo'>DÍZIMOS E OFERTAS</h1>
        <div className='container'>
          <div className='info_banco'>
            <img src={Bradesco} width="70px" height="60px" alt="logo Bradesco" />         
          <div className='ag_cc'>
            <h1>Banco Bradesco</h1>
            <p>Agência: 3402 &nbsp;C/c: 31875-2</p>
          </div>
        </div>
            <h2>IGREJA PENTECOSTAL DE NOVA VIDA CERAMICA</h2>
            <h2>CHAVE PIX EMAIL</h2>
        <div className='container2'>
          <input
            className='input'
            type="text"
            onChange={defafaultValue}
            ref={inputRef}
            value={inputValue}
            
          />
          <button 
            style={{
              width: '60px',
              height: '35px',
              backgroundColor: 'blue',
              color: 'white',
              borderRadius: '0 5px 5px 0',
              border: 'none'
            }}
            type="button" 
            onClick={copyToClipboard}
          >
            Copiar
          </button>
          </div>
          <div>
          {textoCopiado && <p className='msg_copy'>Chave pix copiada com sucesso!</p>}
          </div>
        </div>

        <div className='container'>
          <div className='info_banco'>
            <img src={Santander} width="70px" height="60px" alt="logo Bradesco" />         
          <div className='ag_cc'>
            <h1>Banco Santander</h1>
            <p>Agência: 3217 &nbsp; C/c: 130001316</p>
          </div>
        </div>
            <h2>IGREJA PENTECOSTAL DE NOVA VIDA CERAMICA</h2>
            <h2>CHAVE PIX CNPJ</h2>
        <div className='container2'>
          <input
            className='input'
            type="text"
            onChange={defafaultValue}
            ref={inputRef2}
            value={inputValue2}
            
          />
          <button 
            style={{
              width: '60px',
              height: '35px',
              backgroundColor: 'blue',
              color: 'white',
              borderRadius: '0 5px 5px 0',
              border: 'none'
            }}
            type="button" 
            onClick={copyToClipboard2}
          >
            Copiar
          </button>
          </div>
          <div>
          {textoCopiado2 && <p className='msg_copy'>Chave pix copiada com sucesso!</p>}
          </div>
        </div>
      </Experiencia>
    </>
  );
}
