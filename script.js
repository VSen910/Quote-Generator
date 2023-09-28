const apiUrl = 'https://api.quotable.io/quotes/random';
const nextBtn = document.querySelector('.next-btn');
const quoteDiv = document.querySelector('.quote');

const generateQuote = async () => {
  const res = await fetch(apiUrl);
  const data = await res.json();
  if (res.status == 200) {
    // console.log(data);
    const quote = data[0]['content'];
    console.log(quote);
    quoteDiv.textContent = quote;
  } else {
    quoteDiv.textContent = 'An error occured'
  }
};

nextBtn.addEventListener('click', generateQuote);

generateQuote();
