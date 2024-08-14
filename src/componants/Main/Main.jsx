import './Main.css'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
function Main(){
    const passedValues = useContext(ThemeContext);
    console.log(passedValues.theme)
    return(
        <>
        <main className={passedValues.theme} >
            <div id='maintop' >
                <img src='../../../public/img/Bitmap.png'/>
                <div className='describetop'>
                    <h3>the Octocat</h3>
                    <label>@octocat</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum, vero in consectetur earum magnam voluptatem ratione? Saepe, id! Sunt.</p>
                </div>
                <label id='date'>joined 25 jon 2011</label>
            </div>
            <div id='follownum' className={passedValues.theme}>
                <div className='num'>
                    <label className='nameofnum'>Repos</label>
                    <label className='follow'id={passedValues.theme}>8</label>
                </div>
                <div className='num'>
                    <label className='nameofnum'>Followers</label>
                    <label className='follow' id={passedValues.theme}>3938</label>
                </div>
                <div className='num'>
                    <label className='nameofnum'>Following</label>
                    <label className='follow'id={passedValues.theme}>9</label>
                </div>
            </div>
            <div id='links'>
                <div className='link'>
                    <img src='/img/003-pin.svg'/>
                    <label>san francisco</label>
                </div>
                <div className='link'>
                    <img src='/img/004-twitter.svg'/>
                    <label>not available</label>
                </div>
                <div className='link'>
                    <img src='/img/002-url.svg'/>
                    <label>https://gothub blog</label>
                </div>
                <div className='link'>
                    <img src='/img/001-office-building.svg'/>
                    <label>@github</label>
                </div>
            </div>
        </main>
        </>
    )
}
export default Main