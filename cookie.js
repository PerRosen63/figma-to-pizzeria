export function createCookieBar() {
    let cookieBar = document.getElementById('cookie');


    function hideCookieBar() {
        cookieBar.style.display = 'none';
    }

    let message = document.createElement('p');
    message.className = 'message';
    message.textContent = 'Välkommen till Georgios Pizzeria! För den bästa upplevelsen på vår hemsida rekommenderar vi att du godkänner cookies.'; 


    let buttonTextAccept = document.createElement('h4');
    buttonTextAccept.textContent = 'Acceptera';

    let acceptButton = document.createElement('button');
    acceptButton.id = 'acceptButton';
    acceptButton.appendChild(buttonTextAccept);
    acceptButton.addEventListener('click', hideCookieBar);

    let buttonTextReject = document.createElement('h4');
    buttonTextReject.textContent = 'Neka';

    let rejectButton = document.createElement('button');
    rejectButton.id = 'rejectButton';
    rejectButton.appendChild(buttonTextReject);
    rejectButton.addEventListener('click', hideCookieBar);

    cookieBar.appendChild(message);
    cookieBar.appendChild(rejectButton);
    cookieBar.appendChild(acceptButton);

    return hideCookieBar;
    
    
};