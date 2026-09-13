function Textinput({text, type, placeholder, onChangeHandler}) {
    return (
        <>
        <label>
            <div className="text-lg font-sans text-center">{text}</div>
            <input type={type} placeholder={placeholder} className='px-4 py-2 border rounded-md border-gray-300 h-5vh w-full bg-gray-300'  onChange={onChangeHandler}/>
        </label>
        </>
    )


}

export default Textinput