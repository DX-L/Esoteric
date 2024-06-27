import './App.css'
// import './layout.scss'
import HomePage from './routes/homepage/HomePage.jsx' 
import WelcomePage from './routes/welcomepage/WelcomePage.jsx'
import SinglePostPage from './routes/singlepostpage/SinglePostPage.jsx'
import SignUp from './routes/signup/SignUp.jsx'
import SignIn from './routes/signin/SignIn.jsx'
import Layout from './routes/layout/Layout.jsx'
import WelLayout from './routes/welcome_layout/welLayout.jsx'
import FavoritePage from './routes/favorite/Favorite.jsx'
import FengShuiPage from './routes/catogories/fengshui/FengShui.jsx'
import AstrologyPage from './routes/catogories/astrology/Astrology.jsx'
import TarotPage from './routes/catogories/tarot/Tarot.jsx'
import ZiweiPage from './routes/catogories/ziwei/Ziwei.jsx'
import BaziPage from './routes/catogories/bazi/Bazi.jsx'
import PsycPage from './routes/catogories/psyc/Psyc.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        
        {
          path: "/home",
          element: <HomePage />
        },
        {
          path: "/:id",
          element: <SinglePostPage />
        },
        {
          path: "/favorite",
          element: <FavoritePage />
        },
        {
          path: "/catogories/fengshui",
          element: <FengShuiPage />
        },
        {
          path: "/catogories/astrology",
          element: <AstrologyPage />
        },
        {
          path: "/catogories/tarot",
          element: <TarotPage />
        },
        {
          path: "/catogories/ziwei",
          element: <ZiweiPage />
        },
        {
          path: "/catogories/bazi",
          element: <BaziPage />
        },
        {
          path: "/catogories/psyc",
          element: <PsycPage />
        }
      

      ]
    },
    { 
      path: "/welcome",
      element: <WelLayout />,
      children: [
        {
          index: true,
          element: <WelcomePage />
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "signin",
          element: <SignIn />,
        }
      ]},
    
  ]);
  
  return (

    <RouterProvider router={router}/>
      
  )
}

export default App
