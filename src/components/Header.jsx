import { useState } from 'react'

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="logo" href="#inicio">
        lvys
      </a>

      <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Principal">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={link.href === '#inicio' ? 'is-active' : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="terminal-btn"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>&gt;_</span>
        <i className="terminal-btn__dot" />
      </button>
    </header>
  )
}
