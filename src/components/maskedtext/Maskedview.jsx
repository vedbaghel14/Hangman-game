import Popup from '../popup/Popup';
import {getMaskedString} from './Maskedinput';
import { useNavigate } from 'react-router-dom';


function Maskedview({text,guessedchar}){
    const navigate = useNavigate()
    const maskedString = getMaskedString(text,guessedchar);
    function handlepopup(){
        let isTrue = 'true';
       for(let i=0;i<maskedString.length;i++){
        if(maskedString[i]=='_') isTrue = 'false';
       }
       return isTrue
    }

    function onRestart(){
        navigate('/')
    }

    return (
    <>
        <Popup isVisible={handlepopup} score={100} onRestart={onRestart}/>
        
        <div className='text-center mb-5'>
            {maskedString.map((ele,idx) => <span key={idx} className='mx-2 '>{ele}</span>)}
        </div>
    </>
    )
}

export default Maskedview