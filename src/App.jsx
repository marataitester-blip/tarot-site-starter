import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Gallery from './components/Gallery'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useState(0)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('app.title')}</h1>
        <p>{t('app.subtitle')}</p>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ru')}>Русский</button>
        </div>
      </header>
      <main>
        <Gallery />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            {t('reading.draw_card')}
          </button>
          <p>Count: {count}</p>
        </div>
      </main>
      <footer>
        <p>{t('footer.rights')}</p>
        <p>{t('footer.powered_by')}</p>
      </footer>
    </div>
  )
}

export default App
