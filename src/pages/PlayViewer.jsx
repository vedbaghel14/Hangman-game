
import Maskedview from "../components/maskedtext/Maskedview";
import SelectionButtonContainer from "../components/Selection_buttons/SelectionbuttonContainer";
import HangmanImage from '../components/HangMan/Hangman'


function PlayViewer({value,guessedchar,onClickHandler,step}){

    return (<>
        <HangmanImage step={step}/>
        <Maskedview text={value} guessedchar={guessedchar} />
        <SelectionButtonContainer originalText={value} guessedchar={guessedchar} onClickHandler={onClickHandler} />

    
    </>)
}




export default PlayViewer