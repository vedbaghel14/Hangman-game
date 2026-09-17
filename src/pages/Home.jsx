import { Link } from "react-router-dom"
import Button from "../components/Button"
import { useEffect, useState } from "react"

function Home() {

    const [word, setword] = useState('')
    const [wordhint, setwordhint] = useState('')


    async function fetchData() {

        const Data = await fetch('http://localhost:3000/words')
        const words = await Data.json()
        let index = Math.floor(Math.random() * words.length)
        const { wordValue, wordHint } = words[index]
        setword(wordValue)
        setwordhint(wordHint)


    }

    useEffect(() => {

        fetchData()

    }, [])



    return (
        <>
            <Link to='/play' state={{value:word,wordhint:wordhint}}>
                <Button text='Singleplayer' style='success' />
            </Link>

            <Link to='/multiplayer'>
                <Button text='Multiplayer' style='success' />
            </Link>


        </>
    )
}


export default Home