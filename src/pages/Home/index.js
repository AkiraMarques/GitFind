import { useState } from 'react';
import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import ItemList from '../../components/ItemList'

import './styles.css'

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`http://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio } = newUser;
      setCurrentUser({ avatar_url, name, bio });

      const reposData = await fetch(`http://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} className='background' alt='background app' />
        <div className='info'>
          <div>
            <input name='usuario'
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder='@username' />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (<>
            <div className='perfil'>
              <img src='https://avatars.githubusercontent.com/u/146784142?s=400&u=be922ba331c0a900721f48362b0c29a2b96d6e52&v=4'
                className='profile' alt='imagem de perfil' />
              <div>
                <h3>Lucas Marques</h3>
                <span>@AkiraMarques</span>
                <p>Descrição</p>
              </div>
            </div>
            <hr />
          </>
          ) : null}
          {repos?.length ? (
            <div>
              <h4 className='repositorio'>Repositórios</h4>
              <ItemList title="Teste1" description="teste de descrição" />
              <ItemList title="Teste1" description="teste de descrição" />
              <ItemList title="Teste1" description="teste de descrição" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
