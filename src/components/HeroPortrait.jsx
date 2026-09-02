import portraitSrc from '../assets/portrait.jpg'

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8.5 7.5 3.5 12l5 4.5M15.5 7.5 20.5 12l-5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconTerminal() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7 10.5 9.5 12.5 7 14.5M12 14.5h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCoffee() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 10h9a1 1 0 0 1 1 1v3.5A4.5 4.5 0 0 1 11.5 19h-1A4.5 4.5 0 0 1 6 14.5V11a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16 11.5h1.8A2.7 2.7 0 0 1 20.5 14.2 2.7 2.7 0 0 1 17.8 17H16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 6.5c.4 1 .2 1.8 0 2.4M12 6c.5 1 .3 1.9 0 2.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconBrain() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 7.5A2.5 2.5 0 1 1 12 5a2.5 2.5 0 0 1 3.7 2.2A2.6 2.6 0 0 1 18 10c0 1.3-.7 2.2-1.6 2.7.9.5 1.6 1.4 1.6 2.8a2.6 2.6 0 0 1-2.3 2.6A2.5 2.5 0 0 1 12 20a2.5 2.5 0 0 1-3.7-1.9A2.6 2.6 0 0 1 6 15.5c0-1.4.7-2.3 1.6-2.8C6.7 12.2 6 11.3 6 10a2.6 2.6 0 0 1 2.3-2.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 5.2v14.6M9.2 10.5h2.8M12 14h2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

const ICONS = [
  { id: 'code', label: 'Código', Icon: IconCode },
  { id: 'terminal', label: 'Terminal', Icon: IconTerminal },
  { id: 'coffee', label: 'Café', Icon: IconCoffee },
  { id: 'brain', label: 'Ideias', Icon: IconBrain },
]

export default function HeroPortrait() {
  return (
    <div className="portrait">
      <div className="portrait__frame">
        <img src={portraitSrc} alt="Retrato de Letícia" />
      </div>
      <ul className="portrait__icons">
        {ICONS.map(({ id, label, Icon }) => (
          <li key={id} title={label}>
            <Icon />
          </li>
        ))}
      </ul>
    </div>
  )
}
