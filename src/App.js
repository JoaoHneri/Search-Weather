import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const api = {
    key: 'Aqui você insere sua api key'
  }

  const [Search, setSearch] = useState('')
  const [weather, setWeather] = useState({})

  const searchCity = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=${api.key}&lang=pt_br`
    )
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        console.log(result)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className='titulo'>Search Wheater</h1>
          <div className="space_input">
            {
              <input
                className="input"
                type="text"
                placeholder="Escreva a cidade"
                onChange={e => setSearch(e.target.value)}
              />
            }
            <button className="btn" onClick={searchCity}>
              Pesquisar
            </button>
          </div>
          <div>
            {typeof weather.main !== 'undefined' ? (
              <div>
                <p>
                  {weather.name}, {weather.sys.country}
                </p>

                <p>{weather.main.temp}°C</p>
                <p>{weather.weather[0].description}</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
