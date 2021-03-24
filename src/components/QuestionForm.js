import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const isInputError = inputValue.includes('f')



    function checkValue(value) {
        //console.log(inputValue)
       value.includes('f') && alert("🔥 Vous n'avez pas le droit d'utiliser la lettre 'f' ici")
       if (!value.includes('f')) {
        setInputValue(value)
       }
}

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)
                }
            />
            {/*<button onClick={handleClick}>Click</button>*/}
            <button onClick={() => alert("Merci " + inputValue)}> Send 🛫</button>
        </div>
    )
}

/*

function handleClick() {
    console.log('✨ Ceci est un clic ✨')
}
*/

/*
function handleSubmit(e) {
    e.preventDefault()
    const isInputError = e.target['my_input'].value.includes('f')

    alert("Vous n'avez pas le droit d'utiliser la lettre 'f' ici." )
}
*/


export default QuestionForm