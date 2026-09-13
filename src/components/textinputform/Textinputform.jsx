import Textinput from "../textinput/Textinput"
import Button from "../Button"

function Textinputform({onClickHandler,onSubmitHandler,inputType,onChangeHandler}){


    return(
        <>
        <form onSubmit={onSubmitHandler}>
            <Textinput type={inputType} placeholder='Enter your word here' text='Enter your word'  onChangeHandler={onChangeHandler}/>
            <Button text={(inputType=='password')?'show':'hide'} onClickHandler={onClickHandler} styletype='warn'/>
            <Button text='SUBMIT' styletype='success' type="submit" />
        </form>
        </>
    )
}

export default Textinputform