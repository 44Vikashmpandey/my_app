import PageNotFound from "../component/pageNotFound"
import About from "../views/about"
import Amdin from "../views/admin"
import DashBoard from "../views/dashboard"
import Home from "../views/home" 

const TestRouting = [
    {
        path : '/',
        component: <Home />
    },
    {
        path : '/admin/:id/:name',
        component: <Amdin />
    },
    {
        path : '/home',
        component: <Home />
    },
    {
        path : '/about',
        component: <About />
    },
    {
        path : '/dashboard',
        component: <DashBoard />
    },
    {
        path : '/page-not-found',
        component: <PageNotFound />
    }
]

export default TestRouting 