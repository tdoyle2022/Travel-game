import App from './App'
import { createBrowserRouter } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { HomePage } from './pages/HomePage';
import { Quiz } from './pages/Quiz';

const Router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path:"/login",
            element: <Login />
        },
        {
            path:"/home",
            element: <HomePage />
        },
        {
            path:"/quiz",
            element: <Quiz />
        },
        {
            path:"/signup",
            element: <SignUp />
        },
    ]
}])

export default Router;