import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../../Pages/Home'
import About from '../About'
import Carousel from '../Carousel'
import Faqs from '../Faqs'
import Featured from '../Featured'
import Footer from '../Footer'
import TabBar from '../TabBar'
import NotFound from '../NotFound'
import ThemeContext from '../Context'
import '../../css/tailwind.css'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: < Home / > },
        { path: '/About', element: < About / > },
        { path: '/Carousel', element: < Carousel / > },
        { path: '/Faqs', element: < Faqs / > },
        { path: '/Footer', element: < Footer / > },
        {path: 'TabBar', element: <TabBar />},
        { path: '/*', element: < NotFound / > },
    ])

    return routes
}

const App = () => {
    return ( <
        BrowserRouter >
        <
        Navbar / >
        <
        AppRoutes / >
        <
        /BrowserRouter>
    )
}

export default App