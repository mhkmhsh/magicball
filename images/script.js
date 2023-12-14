function shakeMagic8Ball(){
const question = prompt('Ask the 8 ball a question:')
if ( question === null) {
document.getElementById('response-text').innerText = 'You MUST ask a question'
document.getElementById('response-text').classList = 'text-danger'
document.getElementById('response-image').src = '#BADIMAGE'//ADD IMAGE LATER
}
if(!question.trim()){
    alert('ENTER A QUESTION OR ELSE')
    return
}


}