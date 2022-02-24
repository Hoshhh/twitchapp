import React, { useState } from 'react';
import Test from './components/Test'
import Grid from '@mui/material/Grid'
import './app.css'
import Leftbar from './components/Leftbar';
import Content from './components/Content';
import Navbar from './components/Navbar';


function App() {
  const [data, setData] = useState([])
  const [showResults, setShowResults] = useState(false)
  console.log("App: " + data)
  console.log("Show: " + showResults)
  return (
    <div className="App">
      <Navbar 
        changeData={ data => setData(data)} 
        showResults={result => setShowResults(result)}
      />
      <Grid container spacing={0}>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <Leftbar />
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Content data={data} showResults={showResults} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
