
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])


  // axios example 1

  // useEffect(() => {
  //   axios.get("https://api.nationalize.io/?name=nathaniel").then((res) => (
  //     setData(res.data.country)

  //   ))
  //     .catch((error) => (
  //       console.log(error.message)
  //     ))
  // }, [])




  //  axios example 2
  const getApiData = async () => {
    const res = await axios.get("https://api.nationalize.io/?name=nathaniel");
    setData(res.data.country);

  }

  useEffect(() => {
    getApiData();
  })


  return (
    <div className="">
      <h1>Axios Test</h1>

      {data && data.map(({ country_id, probability }) => (
        <div key={country_id}>
          <h1>{country_id}</h1>
          <h1>{probability}</h1>

        </div>

      ))}

    </div>
  )
}

export default App
