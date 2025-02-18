import { useState } from 'react'

import './App.css'

function App() {

  const initTitles = [
    "Alla Scoperta delle Meraviglie Nascoste",
    "Come Viaggiare con un Budget Ridotto",
    "Diario di Viaggio: Esperienze Indimenticabili",
    "I Migliori Posti per un Weekend Romantico",
    "Viaggiare da Soli: Consigli e Suggerimenti",
    "Le Città più Fotogeniche del Mondo",
    "Come Organizzare un Road Trip Perfetto",
    "Viaggi Eco-Sostenibili: Dove Andare e Cosa Fare"
  ];

  

  const [titles, setTitles] = useState(initTitles);
  const [newTitle, setNewTitle] = useState('');






  return (
    <>
    {/* <form onSubmit={addTask}>
    <input type='text' value={newTitle}
    onChange={event => { setNewTitle(event.target.value) }} 
    />
    <button>Invia</button>
    
    </form> */}

    <ul>
      {titles.map((title, i) => (
        <li key={i}>{title}</li>
      ))}
    </ul>
    </>
  
  )
}

export default App
