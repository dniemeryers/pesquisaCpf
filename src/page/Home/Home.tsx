import React, { useState, useEffect } from 'react';
import { Container } from './style';
import Loading from '../../assets/img/loading.gif';

const nomesFemininos = ["Ana", "Beatriz", "Carla", "Daniela", "Evelyn", "Fernanda", "Gabriela", "Helena", "Isabela", "Juliana"];

function gerarNomeAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * nomesFemininos.length);
  return nomesFemininos[indiceAleatorio];
}

export function Home() {
  const [cpf, setCPF] = useState<string>('00000000000');
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const token = '5ae973d7a997af13f0aaf2bf60e65803'; // Substitua com o seu token
  const pacote = 9; // Substitua com o pacote desejado

  const primeiroNome = gerarNomeAleatorio();
  const segundoNome = gerarNomeAleatorio();
  const terceiroNome = gerarNomeAleatorio();

  const [primeiroNomeChecked, setPrimeiroNomeChecked] = useState(false);
  const [nomeDaMaeChecked, setNomeDaMaeChecked] = useState(false);
  const [segundoNomeChecked, setSegundoNomeChecked] = useState(false);
  const [terceiraNomeChecked, setTerceiroNomeChecked] = useState(false);

  const [requisicaoFeita, setRequisicaoFeita] = useState(false);

  const [exibirImagem, setExibirImagem] = useState(true);
  const [exibirImagem2, setExibirImagem2] = useState(true);
  const [exibirImagem3, setExibirImagem3] = useState(true);
  const [exibirImagem4, setExibirImagem4] = useState(true);
  const [nomeDaMaeConfirmado, setNomeDaMaeConfirmado] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setExibirImagem(false);
    }, 5000);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setExibirImagem2(false);
    }, 10000);

    return () => clearTimeout(timer2);
  }, []);

  useEffect(() => {
    if (requisicaoFeita) {
      const timer3 = setTimeout(() => {
        setExibirImagem3(false);
      }, 5000);

      const timer4 = setTimeout(() => {
        setExibirImagem4(false);
      }, 10000);

      return () => {
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [requisicaoFeita]);




  const fetchData = async () => {
    setRequisicaoFeita(true);
    try {
      const response = await fetch(`https://api.cpfcnpj.com.br/${token}/${pacote}/${cpf}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 1) {
          setResult({
            nome: data.nome,
            cpf: data.cpf,
            nascimento: data.nascimento,
            mae: data.mae,
          });
          setError(null);
        } else {
          setError(data.erro || 'Erro na requisição');
          setResult(null);
        }
      } else {
        const errorData = await response.json();
        setError(errorData.erro || 'Erro na requisição');
        setResult(null);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setError('Erro na requisição');
      setResult(null);
    }
  };

  const confirmarNomeDaMae = () => {
    setNomeDaMaeConfirmado(true);
  };




  return (
    <Container>
        <div className='centralizar'>
      <div >
        <div></div>
        {exibirImagem && <div className='loadChat'><img src={Loading} width="50px" alt="loading" /></div>}
        {!exibirImagem && (
          <>
            <div className='chat'>
              <h1>Bem-vindo ao esboço de consulta CPF</h1>
            </div>
            {exibirImagem2 && <div className='loadClient'><img src={Loading} width="50px" alt="loading" /></div>}
            {!exibirImagem2 && (
              <div className='chatClient'>
                {exibirImagem && <img src={Loading} width="50px" alt="loading" />}
                {!exibirImagem && (
                  <>
                    <input
                      type="text"
                      placeholder="CPF"
                      value={cpf}
                      onChange={(e) => setCPF(e.target.value)}
                    />
                    <button className='enviar' onClick={fetchData}>Enviar</button>
                  </>
                )}
              </div>
            )}

            {error && (
              <div>
                <p>Erro:</p>
                <p>{error}</p>
              </div>
            )}
          </>
        )}
      </div>

      {result && (
        <>
          <div className='body'>
            <div className='chat'>
              {exibirImagem3 && <img src={Loading} width="50px" alt="loading" />}{!exibirImagem3 && (
                <p>Olá {result.nome} tudo bem? Confirme o nome de sua mãe:</p>
              )}
            </div>
          </div>

    {exibirImagem3 && <div></div> }{!exibirImagem3 && (          
          <div>
            {exibirImagem4 && <div className='loadClient'><img src={Loading} width="50px" alt="loading" /></div>}
            {!exibirImagem4 && (
                
              <div className='chatClientNomeMae'>
                <button className='buttonNomeMae' onClick={() => setPrimeiroNomeChecked(!primeiroNomeChecked)}>
                  {primeiroNome}
                </button>
                <button className='buttonNomeMae' onClick={() => setNomeDaMaeChecked(!nomeDaMaeChecked)}>
                  {result.mae}
                </button>
                <button className='buttonNomeMae' onClick={() => setSegundoNomeChecked(!segundoNomeChecked)}>
                  {segundoNome}
                </button>
                <button className='buttonNomeMae' onClick={() => setSegundoNomeChecked(!terceiraNomeChecked)}>
                  {terceiroNome}
                </button>
              </div>
            )}
          </div>
        )}

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
      </div>
    </Container>
  );
}
