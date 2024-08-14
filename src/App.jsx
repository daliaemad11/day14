import './App.css'
import Head from './componants/head/head'
 import Main from './componants/Main/Main'
import Search from './componants/search/search'
import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext(null);

function App() {
  const passedValues = useContext(ThemeContext);
  const [theme,settheme] = useState("light");

  

  return (
    <>
    <div id='maindiv' className={theme}>
    <div id='body' className={theme}>
    <ThemeContext.Provider value={{theme,settheme}}>
     <Head></Head>
     <Search></Search>
     <Main></Main>
     </ThemeContext.Provider>
     </div>
     </div>
    </>
  )
}

export default App
