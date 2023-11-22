import { Header } from '../../components/Header';
import background from '../../assets/background.png';

import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} className='background' alt='background app' />
        <div className='info'>
          <div>
            <input name='usuario' placeholder='@username' />
            <button>Buscas</button>
          </div>
          <div className='perfil'>
            <img src='https://avatars.githubusercontent.com/u/146784142?s=400&u=be922ba331c0a900721f48362b0c29a2b96d6e52&v=4' className='profile' alt='imagem de perfil'/>
            <div>
              <h3>Lucas Marques</h3>
              <span>@AkiraMarques</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
