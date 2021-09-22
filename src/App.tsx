import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavTop from './components/NavTop';
import Main from './components/Main';
import TypeTrack from './components/Types/Tracks';



function App() {

  const [data, setData] = useState<TypeTrack[]>([])
  const [query, setQuery] = useState('Brian')

  useEffect(() => {
    fetchData()
    console.log(data);


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const fetchData = async () => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    const songs = await response.json()
    setData(songs.data)
    console.log(songs.data);

  }



  return (
    <div className="App">
      <NavTop  handleSearch = {(value: string) => setQuery(value)} query={query} />
      <Main data={data} />
    </div>
  );
}

export default App;
