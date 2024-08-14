import Togglebotton from '../Toggle/Toggle'
import './head.css'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
function Head(){
    const passedValues = useContext(ThemeContext);
    console.log(passedValues.theme)
    return(
        <><div id='header' className={passedValues.theme}>
        <h1>devfinder</h1>
        <Togglebotton></Togglebotton>
        </div>
        </>
    )
}
export default Head