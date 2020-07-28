import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import CardView from './pages/CardView'
import Insert from './pages/Insert'
import About from './pages/about'
//
function App() {


    return (

        <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/CardView' component={CardView}/>
                        <Route exact path='/Insert' component={Insert}/>
                        <Route exact path='/' component={About}/>
                        <Route component={About} />
                    </Switch>
                </Layout>
        </BrowserRouter>
    );
}

export default App;