const idArea = document.querySelector('#advice-id')
const adviceArea = document.querySelector('#advice')
const adviceButton = document.querySelector('#advice-button')
const advice = async () => {
    fetch('https://api.adviceslip.com/advice')
    .then( (req) => {
        return req.json()
    } )
    .then((json)=>{
        return json.slip
    })
    .then ( (valor) => {
        montarLayout(valor)
    } )
}
function montarLayout(request){
    idArea.innerHTML = request.id
    adviceArea.innerHTML = request.advice
}
adviceButton.addEventListener('click', () => {
    advice()
})