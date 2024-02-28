import { useState } from 'react';
import { Container } from './style';

// Importações de componentes e imagens...

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

  const [primeiroNomeChecked, setPrimeiroNomeChecked] = useState(false);
  const [segundoNomeChecked, setSegundoNomeChecked] = useState(false);
  const [nomeDaMaeChecked, setNomeDaMaeChecked] = useState(false);
  const [nomeDaMaeConfirmado, setNomeDaMaeConfirmado] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.cpfcnpj.com.br/${token}/${pacote}/${cpf}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const nomeAleatorio = gerarNomeAleatorio();

      const result = {
        nome: nomeAleatorio,
        mae: "Nome da Mãe Exemplo"
      };

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
      <div className='bio'>
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCPF(e.target.value)}
        />
        <button onClick={fetchData}>Consultar</button>

        {error && (
          <div>
            <p>Erro:</p>
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div>
            <p>Olá {result.nome}</p>
            <p>Confirme o nome de sua mãe:</p>
            <div>
              <button onClick={() => setPrimeiroNomeChecked(!primeiroNomeChecked)}>{primeiroNome}</button>
              <button onClick={() => setNomeDaMaeChecked(!nomeDaMaeChecked)}>{result.mae}</button>
              <button onClick={() => setSegundoNomeChecked(!segundoNomeChecked)}>{segundoNome}</button>
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
          </div>
        )}
      </div>
    </Container>
  );
}
