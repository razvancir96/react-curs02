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

  // changeColor e o metoda a clasei, care primeste ca parametru un event.
  changeColor(event) {
    // VA INCURAJEZ pe parcursul cursului sa dati console.log de fiecare data cand aveti
    // o eroare sau o nelamurire in legatura cu datele prelucrate. In event.target.value
    // vedem ca avem culoarea selectata de utilizator, in format hexazecimal. Vom atribui
    // aceasta culoare background-ului aplicatiei.
    console.log(event.target.value);
    // ATENTIE! niciodata nu schimbam state-ul direct! (this.state = ...)
    // Pentru a schimba state-ul, folosim metoda setState, care primeste ca parametru un obiect/functie.
    // In cazul in care a primit un obiect, cheile obiectului sunt cheile state-ului ale
    // caror valori se doresc a fi actualizate.
    this.setState({background: event.target.value});
  }

  // render se apeleaza de fiecare data cand se modifica state-ul!
  render() {
    return(
      // Prin style putem trimite CSS catre componenta.
      // ATENTIE! style este un obiect JS (primele acolade sunt de la sintaxa JSX).
      // Tot din cauza JSX, nu putem avea atributul de HTML 'class'. In React e className.
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
        {/* AVEM NEVOIE DE ARROW FUNCTION! De ce? Altfel cand se apeleaza changeColor,
        this-ul nu mai este intreaga clasa! Vom discuta la cursul 4 mai multe despre this
        in React.
        De asemenea, trebuie sa pasam EVENTUL functiei changeColor, pentru a putea
        ulterior sa prelucram valoarea selectata de utilizator.
        Foarte important este sa realizam ca lui onChange ii trimitem o functie(metoda),
        nu un apel de functie! onChange va apela el respectiva functie cand se va schimba 
        ceva! */}
        <input type="color" onChange={(event) => this.changeColor(event)}/>
      </div>
    );
  }
}

export default App;
