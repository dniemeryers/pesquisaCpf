import React, { useState, useEffect } from 'react';
import { Container } from './style';
import Loading from '../../assets/img/loading.gif';

const nomesFemininos = ["Ana", "Beatriz", "Carla", "Daniela", "Evelyn", "Fernanda", "Gabriela", "Helena", "Isabela", "Juliana"];


export function Home() {

  const [cpf, setCPF] = useState<string>('00000000000');
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const token = '5ae973d7a997af13f0aaf2bf60e65803'; // Substitua com o seu token
  const pacote = 9; // Substitua com o pacote desejado

 

  const [primeiroNomeChecked, setPrimeiroNomeChecked] = useState(false);
  const [nomeDaMaeChecked, setNomeDaMaeChecked] = useState(false);
  const [segundoNomeChecked, setSegundoNomeChecked] = useState(false);

  const [requisicaoFeita, setRequisicaoFeita] = useState(false);

  const [exibirImagem, setExibirImagem] = useState(true);
  const [exibirImagem2, setExibirImagem2] = useState(true);
  const [exibirImagem3, setExibirImagem3] = useState(true);
  const [exibirImagem4, setExibirImagem4] = useState(true);
  const [nomeDaMaeConfirmado, setNomeDaMaeConfirmado] = useState(false);

 

  
  
  return (
    <Container>
      <div>
        <div></div>
       
          <>
            <div className='chat'>
              <h1>Bem-vindo ao esboço de consulta CPF</h1>
            </div>
          
            
              <div className='chat'>
               
                  <>
                    <input
                      type="text"
                      placeholder="CPF"
                      value={cpf}
                      onChange={(e) => setCPF(e.target.value)}
                    />
                    <button >Consultar</button>
                  </>
               
              </div>
          

            {error && (
              <div>
                <p>Erro:</p>
                <p>{error}</p>
              </div>
            )}
          </>
      
      </div>

      {result && (
        <>
          <div className='body'>
            <div className='chat'>
            
                <p>Olá {result.nome} tudo bem? Confirme o nome de sua mãe:</p>
             
            </div>
          </div>

        
          <div>
           
              <div>
                
              </div>
          
          </div>
      

          {nomeDaMaeChecked && (
            <div>
              <p>Nome da mãe confirmado automaticamente!</p>
              {/* Adicione outras informações ou ações desejadas aqui */}
            </div>
          )}

          {nomeDaMaeConfirmado && (
            <p>Nome da mãe confirmado!</p>
          )}
        </>
      )}
    </Container>
  );
}
