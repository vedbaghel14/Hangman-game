
import Maskedview from "../components/maskedtext/Maskedview";
import SelectionButtonContainer from "../components/Selection_buttons/SelectionbuttonContainer";


function PlayViewer({value,guessedchar,onClickHandler}){

    return (<>

        <Maskedview text={value} guessedchar={guessedchar} />
        <SelectionButtonContainer originalText={value} guessedchar={guessedchar} onClickHandler={onClickHandler} />

    
    </>)
}




export default PlayViewer