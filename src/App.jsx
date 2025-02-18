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






  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type='text' value={newTitle}
    onChange={event => { setNewTitle(event.target.value) }} 
    />
    <button>Invia</button>
    
    </form>
    </>
  )
}

export default App
