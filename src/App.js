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
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <Leftbar 
            changeAmount={amount => setAmount(amount)}
            amount={amount}
            setStreamList={streamList => setStreamList(streamList)}
            streamList={streamList}
            setCurrentAmount={currentAmount => setCurrentAmount(currentAmount)}
            currentAmount={currentAmount}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
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
