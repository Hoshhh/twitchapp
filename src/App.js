import Test from './components/Test'
import Grid from '@mui/material/Grid'
import './app.css'
import Leftbar from './components/Leftbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item sm={1}>
          <Leftbar />
        </Grid>
        <Grid item sm={11}>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
