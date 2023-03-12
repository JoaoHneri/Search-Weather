import './App.css'
import { useState } from 'react'

function App() {
  const api = {
    key: 'insira_aqui_sua_chave_de_api'
  }

  const flags = "https://countryflagsapi.com/png"
  const descript = "http://openweathermap.org/img/wn"

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
        if(result.cod === '404') {
          alert('Cidade não encontrada');
        } else if(result.cod === '400') {
          alert("Insira uma cidade válida");
        }
        
      }) 
      
       
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className='titulo'>SEARCH WEATHER</h1>
          <div className="space_input">
            {
              <input
                className="input"
                type="text"
                placeholder="Digite o Local"
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
                <br/>
                <div className='index'>
                
                <p>
                  {weather.name}  <img className='imagem' crossOrigin="anonymous" src={`${flags}/${weather.sys.country}`} alt=""></img>
                </p>

                <p>{weather.main.temp}°C</p>

                <p className='row'>{weather.weather[0].description} <img src={`${descript}/${weather.weather[0].icon}.png`} width="50px" height="50px" alt="Conditions"></img></p>              
              </div>
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
