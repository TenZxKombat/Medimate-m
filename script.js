const chatsContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");

const createMsgElement = (content, className) => {
    const div = document.createElement("div");
    div.classList.add("message", className);
    div.innerHTML = content;
    return div;
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    let userMessage = promptInput.value.trim();
    if (!userMessage) return;

    
    const userMsgHTML = `
        <div class="message-user-message">
            <p class="message-text">${userMessage}</p>
            <img src="robo1.svg.svg" class="avatar">
        </div>
    `;
    const userMsgDiv = createMsgElement(userMsgHTML, "message-user-message");
    chatsContainer.appendChild(userMsgDiv);

    
    promptInput.value = "";

    setTimeout(() => {
        
        const botMsgHTML = `
            <div class="message-bot-message">
                <img src="robo1.svg.svg" class="avatar">
                <p class="message-text">Just a sec...</p>
            </div>
        `;
        const botMsgDiv = createMsgElement(botMsgHTML, "message-bot-message");
        chatsContainer.appendChild(botMsgDiv);
    }, 600);
};


promptForm.addEventListener("submit", handleFormSubmit);