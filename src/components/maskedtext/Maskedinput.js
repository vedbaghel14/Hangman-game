

export function getMaskedString(originaltext,guessedchar){
    guessedchar = guessedchar.map(ele => ele.toUpperCase())

    const guessedcharSet = new Set(guessedchar)
    const result = originaltext.toUpperCase().split('').map((ele) => {
        if(guessedcharSet.has(ele)) return ele
        else return '_'
    })

    return result
    
}



