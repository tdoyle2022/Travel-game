import App from './App'
import { createBrowserRouter } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { HomePage } from './pages/HomePage';
import { Quiz } from './pages/Quiz';
import { QuizCategories } from './pages/QuizCategories';
import { CountriesList } from './pages/CountriesList';
import { CapitalsList } from './pages/CapitalsList';
import { ScoreList } from './pages/ScoreList';
import { CountryDetails } from './components/CountryDetails'

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
        {
            path:"/quizcategories",
            element: <QuizCategories />
        },
        {
            path:"/countrieslist",
            element: <CountriesList />
        },
        {
            path:"/capitalslist",
            element: <CapitalsList />
        },
        {
            path:"/scorelist",
            element: <ScoreList />
        },
        {
            path:"/countries/:name",
            element: <CountryDetails />
        },
    ]
}])

export default Router;