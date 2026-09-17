import { useLocation } from "react-router-dom"
import { useState } from "react";
import PlayViewer from "./PlayViewer";

function Playcontainer() {

    const location = useLocation();
    let { value } = location.state;
    value = value.toUpperCase()
     const [guessedchar, setGuessedchar] = useState([])
    const [step, setStep] = useState(0)
    
    function onClickHandler(event) {

    const char = event.target.value
    

    if (!value.includes(char)) {
        if (step < 8) {
            setStep(step + 1)
        }
        else console.log("You are out of moves")
    }
    setGuessedchar([...guessedchar, char])

}

    
    return (
        <>
            <div>
                <PlayViewer value={value} guessedchar={guessedchar} onClickHandler={onClickHandler} step={step} />
                

            </div>
        </>
    )
}

export default Playcontainer
