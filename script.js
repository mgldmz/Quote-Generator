let apiQuotes = [];



// Show new quote
function newQuote(){
    // Pick a random   quote
    const quote= apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}


/* Get Quotes From API */


/* APIs:
https://quotes-react.netlify.app/
https://type.fit/api/quotes*/

async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes= await response.json();
        newQuote();
    } catch(error){
        // Catch Error Here
        //console.log(error);

    }
}

//On Load
getQuotes();