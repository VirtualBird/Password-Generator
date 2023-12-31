const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword()
{
    let charactersSelected = selectCharacters();
    let numberOfCharacters = charactersSelected.length;
    
    let generatedString = "";
    let passwordLength = parseInt(document.getElementById('pass-length').value);
    
    if (passwordLength > 99)
    {
        passwordLength = 99;
        document.getElementById('pass-length').value = passwordLength;
    }
    if (passwordLength < 1)
    {
        passwordLength = 1;
        document.getElementById('pass-length').value = passwordLength;
    }
    
    for (let i = 0; i < passwordLength; i++)
    {
        let randomInt = Math.floor(Math.random()*numberOfCharacters);
        let pickChar = charactersSelected[randomInt];
        
        generatedString += pickChar;
    }
    
    console.debug(generatedString);
    
    return generatedString;
}

function selectCharacters()
{
    const charactersAlphabet = characters.slice(0,52);
    const charactersNumbers = characters.slice(52,62);
    const charactersSymbols = characters.slice(62);
    
    let totalChars = charactersAlphabet;
    
    if (document.getElementById("flag-num").checked)
    {
        console.log ("flag-num checked");
        totalChars = totalChars.concat(charactersNumbers);
    }
    
    if (document.getElementById("flag-sym").checked)
    {
        console.log ("flag-sym checked");
        totalChars = totalChars.concat(charactersSymbols);
    }
    
    console.debug(totalChars.length +" of "+ characters.length)
    return totalChars;
}

function createPass(inputStringOfId)
{
    let idEl = document.getElementById(inputStringOfId);
    
    idEl.textContent = generatePassword();
}