import SelectionButtonView from "./SelectionButtonView"

function SelectionButtonContainer({originalText,guessedchar,onClickHandler}){
    const originalTextSet = new Set(originalText.toUpperCase().split(''))
    const guessedcharSet = new Set(guessedchar)
    

    function colorLogic(letter){

        if(guessedcharSet.has(letter.ele)) return originalTextSet.has(letter.ele)?'bg-green-700':'bg-red-700'

        return 'bg-blue-400'
    }
    
    return (<>
        <SelectionButtonView colorLogic={colorLogic} onClickHandler={onClickHandler} guessedCharSet={guessedcharSet} originalText={originalText}/>
    </>)
}

export default SelectionButtonContainer