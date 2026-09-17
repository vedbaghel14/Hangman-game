import './hangman.css'
import level1 from '../images/hangman-1.svg'
import level2 from '../images/hangman-2.svg'
import level3 from '../images/hangman-3.svg'
import level4 from '../images/hangman-4.svg'
import level5 from '../images/hangman-5.svg'
import level6 from '../images/hangman-6.svg'
import level7 from '../images/hangman-7.svg'
import level8 from '../images/hangman-8.svg'



const images = [level1,level2,level3,level4,level5,level6,level7,level8]

function Hangman({step}){

    return (
        <div className='h-[300px] w-[200px] hangman'>
            <img src={(step>=images.length)?images[images.length -1]:images[step]}/>
        </div>
    )

}

export default Hangman
