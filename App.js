import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';

function App() {


  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }




  return ( 
    
    
    <div class="col-md-12">
      <div class="weatherBg">
        <h1 class="heading">Weather App</h1>

        <div class="d-grid gap-3 col-4 mt-4">
          <input type="text" class="form-control"
          value={inputCity}
          onChange={handleChangeInput} />
          <button class="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>



      </div>
      {Object.keys(data).length> 0 && 
      <div class="col-md-12 text-center mt-5">
        <div class="shadow rounded weatherResultBox">
          
          <img class="weathericon" alt="weather icon"
          src = "https://th.bing.com/th/id/R.4b45154c3942d9228d8de976cd885a0e?rik=DjHAq5eODEFtZA&riu=http%3a%2f%2fwww.psdgraphics.com%2ffile%2fweather-icon.jpg&ehk=XHFG6nRVxhBiZxOVd1U2hmzOtnJZ7RVFZqFNqw8tx0g%3d&risl=&pid=ImgRaw&r=0"   />

        
          <h5 class="weathercity"> {data?.name} </h5>
          <h6 class="weathertemp"> {((data?.main?.temp) - 273.15).toFixed(2)}℃</h6>
         

        </div>
      </div>
}
    </div>

  );
}

export default App;