import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import { AppLayout  } from './components/layout/AppLayout.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Contact } from './pages/Contact.jsx'
import { Country } from './pages/Country.jsx'
import { Errorpage } from './pages/Errorpage.jsx'
import { CountryDetails } from './components/layout/CountryDetails.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement:<Errorpage/>,
    children:  [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "about",
      element: <About/>, 
    },
    {
      path: "contact",
      element: <Contact/>,
    },
    {
      path: "Country",
      element: <Country/>,
    },
    {
      path: "Country/:id",
      element: <CountryDetails/>,
    },
  ]
  }
 
]);

function App() {

  return (
    <>
      <RouterProvider router = {router} ></RouterProvider> 
       
    </>
  )
}

export default App;
