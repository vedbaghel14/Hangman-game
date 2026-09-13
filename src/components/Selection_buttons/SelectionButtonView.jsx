


function SelectionButtonView({colorLogic,onClickHandler,guessedCharSet,originalText}){
    const btns = 'QWERTYUIOPASDFGHJKLZXCVBNM'

    
    return (<div>
        {btns.split('').map((ele,idx) => <button
         key={idx}
         value={ele}
         className={`px-4 py-2 m-2 text-md border ${colorLogic({ele})}`}
         onClick={onClickHandler}
         disabled={guessedCharSet.has(ele)}
         >{ele}</button>)}

    </div>)
}

export default SelectionButtonView