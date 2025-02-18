import { useState } from 'react'

import './App.css'

function App() {

  const titles = [
    "Alla Scoperta delle Meraviglie Nascoste",
    "Come Viaggiare con un Budget Ridotto",
    "Diario di Viaggio: Esperienze Indimenticabili",
    "I Migliori Posti per un Weekend Romantico",
    "Viaggiare da Soli: Consigli e Suggerimenti",
    "Le Città più Fotogeniche del Mondo",
    "Come Organizzare un Road Trip Perfetto",
    "Viaggi Eco-Sostenibili: Dove Andare e Cosa Fare"
  ];

  const [title, setTitle] = useState(initialBlog);
  const [newTitle, setNewTitle] = useState('');

  function renderTitles() {
    return titles.map(title => (

    ))
  }




  return (
    <>
    <input type='text' value={title}
    onChange={e => { setTitle(e.target.value) }} />
    <p>Il titolo {title}</p>

    </>
  )
}

export default App
