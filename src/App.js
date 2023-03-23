import React from 'react';
import './App.scss';
import {BrowserRouter,Routes ,Route  } from 'react-router-dom' 
import {publicRoutes} from './Route/route';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import { createContext } from 'react';
import OnTop from './components/OnTop/OnTop';
import ChatBot from './components/ChatBot/ChatBot';


// import Header from './components/DefaultLayout/Header/Header';
// import Home from "./Page/Home/Home"
// import Successful from "./Page/Successful/Successful"
// import QandA from "./Page/QandA/QandA"
// import Introduce from "./Page/Introduce/Introduce"

export const ThemContext = createContext()
function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            {publicRoutes.map((route,index) => {
              const Page = route.component;
              const Layout = route.layout || DefaultLayout;
              return (
                  <Route 
                    key={index} 
                    path={route.path} 
                    element={
                      <ThemContext.Provider value={route.num}>
                          <Layout >
                              <Page />  
                          </Layout>
                      </ThemContext.Provider>
                    } 
                  />
              )
            })}
          </Routes>
      </BrowserRouter>
      <div className='flexChatBot'>
          <ChatBot/>
          <OnTop/>
      </div>
    </div>
  );
}

export default App;
