const btn = document.getElementById('search');

const responseContainer = document.getElementById('response-container');


btn.addEventListener('click',function () {

  getPeople();
});

function getPeople() {
  const articleRequest = new XMLHttpRequest();
  let count = 0;
  for (let i=1; i<88; i++) {
    
  let url = `https://swapi.co/api/people/${i}`
  console.log(url)
  articleRequest.open('GET',url);
  }
  articleRequest.onload = addPeople;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function handleError(){
  console.log('se ha presentado un error');
}

function addPeople(){
  const data = JSON.parse(this.responseText);
  
  console.log(data);

  /*articles.forEach(function(news) {
    console.log(news);
    let title = news.headline.main; 
    console.log(title);
    let snippet = news.snippet;
    let url = news.web_url;
    console.log(url);
    
  let link = document.createElement('a');
  link.setAttribute("href", url);
  link.setAttribute("target","_blank");
  link.classList.add('link');
  let ul = document.createElement('ul');
  ul.classList.add('news');
  let liTitle = document.createElement('li');
  liTitle.classList.add('title');
  let liContent = document.createElement('li');
  liTitle.innerText = title;
  liContent.innerText = snippet;
  link.appendChild(ul);
  ul.appendChild(liTitle);
  ul.appendChild(liContent);
  responseContainer.appendChild(link);
});*/

}
