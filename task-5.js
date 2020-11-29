const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')

inputRef.addEventListener('input', onInputName)

function onInputName(event){
    if(!event.target.value){
        spanRef.textContent = 'незнакомец'
        return spanRef
    }
    spanRef.textContent = event.target.value
    return spanRef
}