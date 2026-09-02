import HeroPortrait from './HeroPortrait.jsx'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__copy">
        <p className="hero__tag">// FRONT-END DEVELOPER</p>
        <h1>
          Olá, eu sou
          <span>Letícia.</span>
        </h1>
        <p className="hero__role">
          <em>Front-end Developer</em> em formação
        </p>
        <span className="hero__rule" />
        <p className="hero__lead">
          Transformo ideias em interfaces bonitas, funcionais e com personalidade.
        </p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#projetos">
            Ver projetos <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn--ghost" href="#contato">
            Fale comigo
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 6.5h14a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H9l-4 3v-3H5A1.5 1.5 0 0 1 3.5 15V8A1.5 1.5 0 0 1 5 6.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="9" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="15" cy="12" r="1" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

      <HeroPortrait />

      <p className="hero__scroll">
        ROLE PARA EXPLORAR
        <span className="hero__star" aria-hidden="true" />
      </p>
    </section>
  )
}
