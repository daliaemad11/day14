import './search.css'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
function Search(){
    const passedValues = useContext(ThemeContext);
    console.log(passedValues.theme)
    return(
        <>
        <div id='search' className={passedValues.theme}>
            <img src='/img/Shape 2.png'/>
            <button>search</button>
        </div></>
    )
}
export default Search