import React from 'react';
// nu uitati sa importati componentele folosite!
import UserItem from './components/UserItem';
import './App.css';

// ATENTIE! Initial, in create-react-app, App era o functie.
// Sintaxa in care App e o functie e pentru Hooks, iar noi nu o vom folosi.
// App este o componenta complexa, ale carei componente se vor 
// modifica pe parcurs => trebuie sa fie o clasa!
class App extends React.Component {
  // In constructor este apelat mai intai super, iar apoi este initializat state-ul
  constructor() {
    super();
    this.state = {};
  }

  // render se apeleaza de fiecare data cand se modifica state-ul!
  render() {
    return(
      <div>
        <h1>HELLO WORLD!</h1>
        {/* Componenta UserItem este "instantiata"(creata).
        In fisierul UserItem.jsx ea este doar declarata!! */}
        {/* Atributele name si email sunt puse intr-un obiect (DE CATRE REACT!!)
        si trimise catre componenta UserItem.jsx */}
        <UserItem name="Arsene Florin" email="arsene.florin@gmail.com"/>
        <UserItem name="Criste Mihai" email="criste.mihai@gmail.com"/>
      </div>
    );
  }
}

export default App;
