import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import './app.css'
import Leftbar from './components/Leftbar';
import Content from './components/Content';
import Navbar from './components/Navbar';



function App() {
  const [data, setData] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [amount, setAmount] = useState(0)
  const [streamList, setStreamList] = useState([])
  const [currentAmount, setCurrentAmount] = useState(streamList.length)
  
  return (
    <div className="App">
      <Navbar 
        changeData={ data => setData(data)} 
        showResults={result => setShowResults(result)}
      />
      <Grid container spacing={0}>
        <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} xl={1.5}>
          <Leftbar 
            changeAmount={amount => setAmount(amount)}
            amount={amount}
            setStreamList={streamList => setStreamList(streamList)}
            streamList={streamList}
            setCurrentAmount={currentAmount => setCurrentAmount(currentAmount)}
            currentAmount={currentAmount}
          />
        </Grid>
        <Grid item xs={10.5} sm={10.5} md={10.5} lg={10.5} xl={10.5}>
          <Content 
            data={data} 
            showResults={showResults} 
            amount={amount}
            setStreamList={streamList => setStreamList(streamList)}
            streamList={streamList}
            setCurrentAmount={currentAmount => setCurrentAmount(currentAmount)}
            currentAmount={currentAmount}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
