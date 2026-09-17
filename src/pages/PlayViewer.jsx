
import Maskedview from "../components/maskedtext/Maskedview";
import SelectionButtonContainer from "../components/Selection_buttons/SelectionbuttonContainer";
import HangmanImage from '../components/HangMan/Hangman'


function PlayViewer({value,guessedchar,onClickHandler,step,wordhint}){

    return (<>
        <strong className="text-2xl text-green-600">HINT: {wordhint.toUpperCase()}</strong>
        <HangmanImage step={step}/>
        <Maskedview text={value} guessedchar={guessedchar} />
        <SelectionButtonContainer originalText={value} guessedchar={guessedchar} onClickHandler={onClickHandler} />

    
    </>)
}




export default PlayViewer