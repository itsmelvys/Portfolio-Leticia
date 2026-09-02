import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SpaceBackground from './components/SpaceBackground.jsx'
import './App.css'

const SECTIONS = [
  { id: 'sobre', title: 'Sobre' },
  { id: 'projetos', title: 'Projetos' },
  { id: 'tecnologias', title: 'Tecnologias' },
  { id: 'contato', title: 'Contato' },
]

export default function App() {
  return (
    <div className="app">
      <SpaceBackground />
      <Header />
      <main>
        <Hero />
        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="page-section">
            <h2>{section.title}</h2>
          </section>
        ))}
      </main>
    </div>
  )
}
