import {React, useState, useEffect} from 'react'
import store from '../store/store'

const ValuteList = () => {
	const [content, setContent] = useState(false)
	const [reversedList, setReversedList] = useState([])

	const getData = () => {
		let data = JSON.parse(store.getState().data)
		let result = []

		// Object.fromEntries(
		//     Object.entries(obj).map(
		//       ([k, v], i) => [k, fn(v, k, i)]
		//     )
		// )

		// Object.keys(data).map(function(key, index) {
		//   myObject[key] *= 2;
		// });
		// Object.keys(data).reduce((result, key) => {

		// })

		for (var key in data) {
			if (data.hasOwnProperty(key)) {

				let stateOfValue = false
				let value_1 = ''
				let value_2 = ''

				for (var i = 0; i < reversedList.length; i++)	{
					if ( key == reversedList[i]) { 
						stateOfValue = true
						break  
					}
				}
				//setReversedList()

				if (stateOfValue) {
					value_1 = '1 RUB'
					value_2 = (1 / data[key].Value).toFixed(4) + ' ' + key
					//console.log(2)
				} else if (!stateOfValue) {
					value_1 = '1 ' + key
					value_2 = data[key].Value + ' RUB'
				}

				
				result.push(
					<div className='valute-box' key={key}>
						<span>{data[key].Name}</span>
						<div className='valute-content'>
							 {value_1} 
							 <div name={key} className='reverse-button'  onClick={ (e) => { setReversedList([ ...reversedList, e.target.getAttribute('name') ]) } }> == </div>
							 {value_2}
							 {/*{data[key].Value} { (data[key].Value - data[key].Previous).toFixed(4) }*/}
						</div>
					</div>
				)
			}
		}

		setContent(result)	
	}

	store.subscribe( () => {
		getData()
	})

	useEffect( () => {
		console.log(reversedList)
		getData()	
	}, [reversedList])

	return (
		<div className='valute-wrapper'>

			{content}

		</div>
	)
}

export default ValuteList;