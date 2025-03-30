// Available bot responses
// Available bot responses
const botResponses = {
    greeting: [
      "Welcome to our store! How may I assist you today?",
      "Hello! It's a pleasure to have you here. How can I help you?",
      "Hi there! How can I make your shopping experience better?"
    ],
    thanks: [
      "You're welcome! If you need any further assistance, feel free to ask.",
      "I'm happy to help! Let me know if there's anything else I can do for you.",
      "No problem! If you have any more questions, feel free to ask."
    ],
    feedback: [
      "Thank you for your valuable feedback! We appreciate your input.",
      "We're grateful for your feedback! It helps us improve our services.",
      "Your feedback is important to us! We'll take it into consideration."
    ],
    complaint: [
      "I apologize for any inconvenience caused. Please share the details, and we'll resolve the issue promptly.",
      "I'm sorry to hear about your experience. Let us know the specifics, and we'll work to make things right.",
      "We're sorry for the trouble. Please provide more information, and we'll address the issue accordingly."
    ],
    help: [
      "Sure, I'd be delighted to assist you in finding the perfect product. What are you looking for?",
      "Absolutely! Let me know what you need help with, and I'll do my best to guide you.",
      "I'm here to assist you. Please provide more details on the product you're seeking, and I'll offer recommendations."
    ],
    default: [
      "Apologies, but I'm not sure I understand. Could you please rephrase your question?",
      "I'm sorry, I couldn't find a suitable response. Can you please provide more information?",
      "I apologize, but I'm unable to assist with that specific request at the moment."
    ],

    name: [
        "Hello, I am Tars AI, your chatbot assistant",
        "My name is Tars AI, your AI chat bot, ask me anything!",
        "My name is Tars AI, pleasure to meet you!"
    ],

    purpose:[
        "I am here to help you in anyway possible, let me know your question!",
        "Thanks for asking, I am designed to help you in shoping, or any kind ok help, just let me know!"
    ],

    gratitude:[
      "Thank you for your kind words, I am always here to help.",
      "Kind words much appriciated, always here for help, just let me know."
    ],

    myself:[
      "I am good, thanks for asking, how is your day going.",
      "Thank you for askiing, I am doing very good, how are you!"
    ],

    themselves:[
      "Wonderful, I hope you have a good ahead",
      "Its good to know that you are having a good day"
    ]


  };
  
  // Function to get a random response from the botResponses object
  function getRandomResponse(key) {
    const responses = botResponses[key] || botResponses.default;
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
  
  // Rest of the code remains the same
  
  // Get required elements
const chatDisplay = document.getElementById("chat-display");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const resetBtn = document.getElementById("reset-btn");
const aboutBtn = document.getElementById("about-btn");



// Function to add user message to chat display
function addUserMessage(message) {
    const chatDisplay = document.getElementById("chat-display");
    const userMessageContainer = document.createElement("div");
    userMessageContainer.classList.add("message-container");
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("message");
    userMessageElement.classList.add("user-message");
    userMessageElement.textContent = message;
    const timestampElement = document.createElement("div");
    timestampElement.classList.add("timestamp");
    timestampElement.textContent = getCurrentTime();
    userMessageContainer.appendChild(userMessageElement);
    userMessageContainer.appendChild(timestampElement);
    chatDisplay.appendChild(userMessageContainer);
    scrollToBottom(chatDisplay);
  }
  
  // Function to add bot message to chat display
  function addBotMessage(message) {
    const chatDisplay = document.getElementById("chat-display");
    const botMessageContainer = document.createElement("div");
    botMessageContainer.classList.add("message-container");
    const botMessageElement = document.createElement("div");
    botMessageElement.classList.add("message");
    botMessageElement.classList.add("bot-message");
    botMessageElement.textContent = message;
    const timestampElement = document.createElement("div");
    timestampElement.classList.add("timestamp");
    timestampElement.textContent = getCurrentTime();
    botMessageContainer.appendChild(botMessageElement);
    botMessageContainer.appendChild(timestampElement);
    chatDisplay.appendChild(botMessageContainer);
    scrollToBottom(chatDisplay);
  }
  
  // Function to get the current time
  function getCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return time;
  }
  
  // Function to scroll to the bottom of the chat display
  function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
  }
  
  // Rest of the code remains the same
  
// Function to add user message to chat display
function addUserMessage(message) {
  const userMessageElement = document.createElement("div");
  userMessageElement.classList.add("user-message");
  userMessageElement.textContent = message;
  chatDisplay.appendChild(userMessageElement);
}

// Function to add bot message to chat display
function addBotMessage(message) {
  const botMessageElement = document.createElement("div");
  botMessageElement.classList.add("bot-message");
  botMessageElement.textContent = message;
  chatDisplay.appendChild(botMessageElement);
}

// Function to handle user input
function handleUserInput() {
  const userMessage = userInput.value;
  addUserMessage(userMessage);
  userInput.value = "";

  let botMessage;

  // Match user input to appropriate bot response
  if (userMessage.toLowerCase().includes("hi") || userMessage.toLowerCase().includes("hello")) {
    botMessage = getRandomResponse("greeting");
  } else if (userMessage.toLowerCase().includes("thank")) {
    botMessage = getRandomResponse("thanks");
  } else if (userMessage.toLowerCase().includes("feedback")) {
    botMessage = getRandomResponse("feedback");
  } else if (userMessage.toLowerCase().includes("complaint")) {
    botMessage = getRandomResponse("complaint");
  } else if (userMessage.toLowerCase().includes("help")) {
    botMessage = getRandomResponse("help");
  } else if (userMessage.toLowerCase().includes("name")) {
    botMessage = getRandomResponse("name");
  } else if (userMessage.toLowerCase().includes("do")) {
    botMessage = getRandomResponse("purpose");
  } else if (userMessage.toLowerCase().includes('wonderful')) {
    botMessage = getRandomResponse('gratitude')
  } else if (userMessage.toLowerCase().includes('are')) {
    botMessage = getRandomResponse('myself')
  } else if (userMessage.toLowerCase().includes('am')){
    botMessage = getRandomResponse('themselves')
  } else {
    botMessage = getRandomResponse("default");
  } 


  addBotMessage(botMessage);
}

// Function to get a random response from the botResponses object
function getRandomResponse(key) {
  const responses = botResponses[key] || botResponses.default;
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

// Event listener for send button click
sendBtn.addEventListener("click", handleUserInput);

// Event listener for enter key press in the input field
userInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    handleUserInput();
  }
});

// Event listener for reset button click
resetBtn.addEventListener("click", function(event) {
  chatDisplay.innerHTML = ""; // Clear chat display
  addBotMessage("Chat reset. How can I assist you?");
  event.preventDefault();
});

// Event listener for about button click
aboutBtn.addEventListener("click", function(event) {
  addBotMessage("I am an AI chatbot designed to assist you with your shopping queries. How can I help you today?");
  event.preventDefault();
});

// Initial bot greeting
addBotMessage("Hi! How can I help you today?");


// For the about button we have to impliment the for loop.