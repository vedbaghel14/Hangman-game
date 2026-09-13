import Stylingfunction from './Stylingfunction.js'

function Button({text, onClickHandler,styletype='fail',type='button'}){
    return <>
    
    <button className={`px-4 py-2 ${Stylingfunction(styletype)} border rounded-lg text-white m-3`} onClick={onClickHandler} type={type}>{text}</button>
    
    </>
}

export default Button