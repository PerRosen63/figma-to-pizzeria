export function createCookieBar() {
    let cookieBar = document.getElementById('cookie');


    function hideCookieBar() {
        cookieBar.style.display = 'none';
    }

    let message = document.createElement('p');
    message.className = 'message';
    message.textContent = 'Välkommen till Georgios Pizzeria! För den bästa upplevelsen på vår hemsida rekommenderar vi att du godkänner cookies.'; 

    let acceptButton = document.createElement('button');
    acceptButton.textContent = 'Acceptera';
    acceptButton.addEventListener('click', hideCookieBar);

    let rejectButton = document.createElement('button');
    rejectButton.textContent = 'Neka';
    rejectButton.addEventListener('click', hideCookieBar);

    cookieBar.appendChild(message);
    cookieBar.appendChild(rejectButton);
    cookieBar.appendChild(acceptButton);

    return hideCookieBar;
    
    
};