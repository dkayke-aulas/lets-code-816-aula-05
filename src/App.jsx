import { useRef } from 'react';
import { Input } from './components/input';
import './App.css';

function App() {

  const inputRef = useRef(null);
  const formRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const arr = Array.from(formRef.current.childNodes).filter((node) => {
      return node.name;
    });

    
    const dados = arr.reduce((prev, curr) => Object.assign(prev, {
      [curr.name]: curr.value
    }), {});

    window.alert("você digitou o nome " + dados.nome);
    console.log(dados);

    inputRef.current.style.background = "#ff0";
    inputRef.current.focus();
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="nome" >Nome</label>
        <Input name="nome" id="nome" type="text" placeholder="Nome" />

        <label  htmlFor="idade">Idade</label>
        <Input name="idades" id="idade" type="number" placeholder="Idade" />

        <label htmlFor="email" >E-mail</label>
        <Input name="email" id="email" type="email" placeholder="email@email.com" />

        <label htmlFor="senha" >Senha</label>
        <Input name="senha" id="senha" type="password" placeholder="*****" />
        <button>Clique</button>
      </form>
    </div>
  );
}

export default App;
