import {React, useEffect, useState} from 'react'
import store from './store/store'
import set_state from './store/actions/set_state'

import ValuteList from './content/ValuteList'
import Converter from './content/Converter'

import './App.css';

function App() {
  const [content, setContent] = useState(false)

  useEffect( () => {
    try {
      return fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then( res => { return res.json() })
        .then( obj => {
            
          store.dispatch( set_state(JSON.stringify(obj.Valute) ) )
          //console.log(obj.Valute)
        })
        .catch( () => console.log('Ошибка при загрузке данных'))


    } catch (e) {
      console.log('Ошибка при загрузке данных')
    }
  }, [])

  return (
    <div className="App">
      <div className='tab'>
          <div className='tab-button' onClick={ e => { setContent(<ValuteList/>) } }>Cписок валют</div>
          <div className='tab-button' onClick={ e => { setContent(<Converter/>) } }>Конвертер</div>
      </div>
      <div className='content-wrapper'>
        {content}
      </div>
    </div>
  );
}

export default App;
