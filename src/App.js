import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =() => {
  const pageSize=6;
  const apikey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <Router>
      <>      
        <Navbar/>
        <LoadingBar
        height={2}
        color='#f11946'
        progress={progress}
      />

        <Switch>
        <Route exact path="/"><News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="gb" category="general"/>
        </Route>
          <Route exact path="/business"><News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="gb" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="gb" category="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="gb" category="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="gb" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="gb" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="gb" category="technology"/></Route>

        </Switch>

        
      </>
      </Router>
    )
}
export default App;
