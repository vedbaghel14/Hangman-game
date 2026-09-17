import { useState } from "react";
import Textinputform from "../textinputform/Textinputform";
import { useNavigate } from "react-router-dom";

function Textinputformcontainer() {
    const navigate = useNavigate();
    const [type, setType] = useState('password');
    const [value, setValue] = useState('');
    const[wordhint, setWordHint] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();
        if (value) navigate('/play', {
            state: { value, wordhint }
        })

    }

    function onClickHandler() {
        if (type === 'password') setType('text')
        else setType('password')
    }

    function onChangeHandler2(event) {
        setWordHint(event.target.value);
    }

    function onChangeHandler1(event) {
        setValue(event.target.value);
    }

    return (
        <>
            <Textinputform inputType={type}
                onClickHandler={onClickHandler}
                onSubmitHandler={onSubmitHandler}
                onChangeHandler={onChangeHandler1}
                onChangeHandler2={onChangeHandler2} />
        </>
    )
}

export default Textinputformcontainer;