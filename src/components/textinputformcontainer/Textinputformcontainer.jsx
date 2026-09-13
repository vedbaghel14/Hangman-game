import { useState } from "react";
import Textinputform from "../textinputform/Textinputform";
import { useNavigate } from "react-router-dom";

function Textinputformcontainer(){
const navigate = useNavigate();
const [type,setType] = useState('password');
const [value,setValue] = useState('');

function onSubmitHandler(event){
    event.preventDefault();
    if(value) navigate('/play',{
        state:{value}
    })
        
}

function onClickHandler(){
    if(type==='password') setType('text')
    else setType('password')
}

function onChangeHandler(event){
    setValue(event.target.value);
}

    return(
        <>
            <Textinputform inputType={type} onClickHandler={onClickHandler} onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} />
        </>
    )
}

export default Textinputformcontainer;