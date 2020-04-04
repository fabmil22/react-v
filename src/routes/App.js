import React from 'react';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Resgister from '../containers/resgister';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (

    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Resgister} />
                <Route component={NotFound} />
            </Switch>
       </Layout>
    </Router>

)

export  default App