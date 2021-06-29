import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/Privateroute';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

const PublicRoute = () => {}

export default AppRouter;