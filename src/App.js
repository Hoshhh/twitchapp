import Test from './components/Test'
import Grid from '@mui/material/Grid'
import './app.css'
import Leftbar from './components/Leftbar';
import Content from './components/Content';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container spacing={0}>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <Leftbar />
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
