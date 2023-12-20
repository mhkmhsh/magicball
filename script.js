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
            image = " https://fastly.picsum.photos/id/132/1600/1066.jpg?hmac=1_mTFZ5h9vD7KusK2V8WDYh_N7yZNXKeKeXIYO0OlZA"
            color = "text-success"
            break;
        case 1:
            answer = " Absolutely";
            image = " https://fastly.picsum.photos/id/152/3888/2592.jpg?hmac=M1xv1MzO9xjf5-tz1hGR9bQpNt973ANkqfEVDW0-WYU "
            color = "text-success"
            break;
        case 2:
            answer = "Reply hazy try again";
            image = " https://fastly.picsum.photos/id/166/1280/720.jpg?hmac=w7NFsk0bL2IjWSdLJy0Ymow0MFw6n2BCjPYhJCgEjXs"
            color = "text-info"
            break;
        case 3:
            answer = "Cannot predict now";
            image = "https://fastly.picsum.photos/id/172/2000/1325.jpg?hmac=TFUTObVbAAdA2B5wwLRdjkDb67ohfqhvOtiTdqYdaN0"
            color = "text-info"
            break;
        case 4:
            answer = " D A N G E R";
            image = "https://fastly.picsum.photos/id/209/1920/1280.jpg?hmac=VkEKEKhTEKOSFL4n-N4aLnbGGpV5hxuCs2tx_ny4y5g"
            color = "text-danger"
            break;
        case 5:
            answer = "the spirits agree";
            image = " https://fastly.picsum.photos/id/190/2048/1365.jpg?hmac=NWS1_X_JJ-Edi-9SZRhNwHyjKt1nECckxrGLS8_idjY"
            color = "text-primary"
            break;
        case 6:
            answer = "signs convey no";
            image = "https://fastly.picsum.photos/id/254/4272/2848.jpg?hmac=6WNs3ouhDbyW9Tz4SVY_zNji9jH2g6oX_5j8dZhjCvo"
            color = "text-danger"
            break;
        case 7:
            answer = "Signs point to certain death";
            image = " https://fastly.picsum.photos/id/928/5000/3333.jpg?hmac=yXKJh0-fbJR-jaJrS_vAeKb3lUS5O_sNSKDXV0L7dBk "
            color = "text-danger"
            break;
        default:

    }
    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('response-image').src = image;
}


