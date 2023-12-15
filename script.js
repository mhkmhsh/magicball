function shakeMagic8Ball() {
    const question = prompt('Ask the 8 ball a question:')
    if (question === null) {
        document.getElementById('response-text').innerText = 'You MUST ask a question'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BADIMAGE'//ADD IMAGE LATER

    }
    if (!question.trim()) {
        alert('ENTER A QUESTION OR ELSE')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "It is certain";
            image = " fix "
            color = "text-success"
            break;
        case 1:
            answer = " Absolutely";
            image = " fix "
            color = "text-success"
            break;
        case 2:
            answer = "Reply hazy try again";
            image = " fix "
            color = "text-info"
            break;
        case 3:
            answer = "Cannot predict now";
            image = " fix "
            color = "text-info"
            break;
        case 4:
            answer = " D A N G E R";
            image = " fix "
            color = "text-danger"
            break;
        case 5:
            answer = "the spirits agree";
            image = " fix "
            color = "text-primary"
            break;
        case 6:
            answer = "signs convey no";
            image = " fix "
            color = "text-danger"
            break;
        case 7:
            answer = "Signs point to certain death";
            image = " fix "
            color = "text-danger"
            break;
        default:

    }
    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('response-image').src = image;
}


