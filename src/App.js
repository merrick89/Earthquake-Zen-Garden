import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './templates/Layout/Layout';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import siteData from './data/siteData.json';

const App = () => {

    const { site, profile, data } = siteData;

    return (
        <div className="App">
            <Layout site={site} profile={profile}>
                <Switch>
                    <Route path="/profile" render={() => <Profile profile={profile} />} />
                    <Route path="/detail/:id" render={(props) => <Detail feature={data.features.find( feature => feature.id == props.match.params.id )} />} />
                    <Route path="/" render={() => <Home title={data.metadata.title} features={data.features} />} />
                </Switch>
            </Layout>
        </div>        
    )    
}

export default App;