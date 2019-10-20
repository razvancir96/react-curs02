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
    this.state = {
      background: 'white'
    };
  }

  // changeColor e o metoda a clasei. In mod normal, sintaxa ei nu ar fi cu arrow function,
  // insa altfel ar trebui sa facem bind in constructor 
  changeColor = (event) => {
    // ATENTIE! niciodata nu schimbam state-ul direct! (this.state = ...)
    // Pentru a schimba state-ul, folosim metoda setState, care primeste ca parametru un obiect/functie.
    // In cazul in care a primit un obiect, campurile obiectului sunt campurile state-ului
    // care se doresc a fi actualizate.
    this.setState({background: event.target.value});
  }

  // render se apeleaza de fiecare data cand se modifica state-ul!
  render() {
    return(
      // prin style putem trimite CSS catre componenta
      // ATENTIE! style este un obiect JS (primele acolade sunt de la sintaxa JSX)
      // tot din cauza JSX, nu putem avea atributul de HTML 'class'. In React e className
      <div className="app" style={{background: this.state.background}}>
        <h1>HELLO WORLD!</h1>
        {/* Componenta UserItem este "instantiata"(creata).
        In fisierul UserItem.jsx ea este doar declarata!! */}
        {/* Atributele name si email sunt puse intr-un obiect (DE CATRE REACT!!)
        si trimise catre componenta UserItem.jsx */}
        <UserItem name="Arsene Florin" email="arsene.florin@gmail.com"/>
        <UserItem name="Criste Mihai" email="criste.mihai@gmail.com"/>
        {/* input type color ne permite sa selectam o culoare. Cand selectam noua culoare
        se declanseaza evenimentul onChange, echivalent evenimentului onchange din HTML, sau
        a lui change, folosit de addEventListener. Functia executata atunci este changeColor,
        din clasa in care ne aflam. */}
        <input type="color" onChange={this.changeColor}/>
      </div>
    );
  }
}

export default App;
