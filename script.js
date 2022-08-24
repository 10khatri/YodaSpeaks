var inputContainer = document.querySelector(".input-container");
var translateBtn = document.querySelector(".btn-translate");
var outputContainer = document.querySelector(".output-container");

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function errorHandler(error) {
  console.log("error occured ", error);
  alert("opps!! something went wrong with server...ty again later");
}

function getTranslationUrl(text) {
  return serverURL + "?" + "text=" + text
}

translateBtn.addEventListener("click", () => {
  inputText = inputContainer.value;
  fetch(getTranslationUrl(inputText)).then(response => response.json()).then(json => {
    var translatedText = json.contents.translated;
    outputContainer.innerHTML = translatedText;
  }).catch(errorHandler)

})

