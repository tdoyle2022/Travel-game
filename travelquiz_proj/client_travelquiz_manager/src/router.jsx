import App from './App'
import { createBrowserRouter } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { HomePage } from './pages/HomePage';

const Router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <SignUp />
        },
        {
            path:"login",
            element: <Login />
        },
        {
            path:"home",
            element: <HomePage />
        }
    ]
}])

export default Router;