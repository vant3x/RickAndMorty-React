import React from 'react';
import './styles/animated.css';
import './App.css';
import Header from './components/Header';
import PersonajeCard from './components/PersonajeCard';

class App extends React.Component {

  state = {
    loading: true,
    error: null,
    data: {
      info: {},
      results: []
    },
    nextPage: 1
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );

      const data = await response.json();
      console.log(data); // borrar
      
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({loading: false, error: error});
    }
  }

  render() {

    if (this.state.error) {
      return 'Error';
    }

    return (
      <div className="container">
        <div className="App animated fadeIn">
            <Header />

            <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <PersonajeCard character={character} />
              </li>
            ))}
            </ul>

            {this.state.loading && <p className="text-center">Loading...</p>}
            {!this.state.loading && this.state.data.info.next && (
              <button className="btn btn-primary" onClick={() => this.fetchCharacters()}>Cargar Más</button>
            )}
            <br/>
        </div>
      </div>
    );
  }
}

export default App;
