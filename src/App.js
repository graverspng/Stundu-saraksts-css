import Diena from "./Diena";

function App() {
  const pirmdienasStundas = [
    "Sports pie Klintas",
    "Dabaszinības mīlu fiziku",
    "Vēsture",
    "🫥"
  ];
  const otrdienasStundas = [
    "Programesana",
    "Programesana",
    "Programesana",
    "Programesana",
  ];
  const tresasStundas = [
    "Programesana",
    "Vēsture",
    "Dabaszinības mīlu fiziku",
    "Sports pie Klintas",
  ];
  const cetriStundas = [
    "Programesana",
    "Vēsture",
    "Dabaszinības mīlu fiziku",
    "Sports pie Klintas",
  ];
  const piektaStundas = [
    "Programesana",
    "Vēsture",
    "Dabaszinības mīlu fiziku",
    "Sports pie Klintas",
  ];
  const visasStundas = {
    Pirmdiena: [
      "Sports pie Klintas",
      "Dabaszinības mīlu fiziku",
      "Vēsture",
      "🫥"
    ]
    
  }
  return (
    <>
      <h3>Stundas</h3>
      <Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>
      <Diena diena="Otrdiena" stundas={otrdienasStundas}/>
      <Diena diena="Tresdiena" stundas={tresasStundas}/>
      <Diena diena="Ceturtdiena" stundas={cetriStundas}/>
      <Diena diena="Piektdiena" stundas={piektaStundas}/>
    </>
  )
}

export default App;

// Uztaisi divas jaunas komponentets:
// - Diena.js
// - Stunda.js

// JS - .forEach() ir masīvu metode,
// kura apskata ikkatru masīva elementu,
// bet neko neatgriež (nav return)

// JS - .map() ir masīvu metode,
// kura apskata ikkatru masīva elementu
// un atgriež jaunu masīvu (return Array)


//