import './Toggle.css'
import { ThemeContext } from '../../App';
import { useContext } from 'react';
   
function Togglebotton(){
    const theme = useContext(ThemeContext)
        function HandleChange(event) {
            let newvalue;
            if (event.target.checked == false) {
                newvalue="light"
          } else {
            newvalue="dark"
          }
          theme.settheme(newvalue)
        }
    return(
<>
        
   <label className="switch">
    
   <input type="checkbox"  onChange={HandleChange} />
   <span className="slider round"  ></span>
    </label>
</>

        // <><div id='mood'>
        // <button className="switch" onClick={HandleChange}></button>
        // <img src='/img/moon.svg'/>
        // </div>
        // </>
    )
}
export default Togglebotton