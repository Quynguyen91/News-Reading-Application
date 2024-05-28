'use strict';

if(currentUser) {
const newsContainer = document.getElementById('news-container');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const pageNum = document.getElementById('page-num');
const inputSearch = document.getElementById('input-query');
const searchBtn = document.getElementById('btn-submit');
const hiddenBtns = document.querySelector('.pagination');
const pagination = document.querySelector('.pagination');
const pageSize = 5;
let page =1;
let num_pages;

pagination.style.display = 'none';
function validate() {
      if(inputSearch.value.trim().length === 0) {
            hiddenBtns.style.display = 'none';
            alert('Please enter a word to search.');
      }
      else {
            hiddenBtns.style.display = 'flex';
      }
      
}

async function fetData(keyword, page) {
      if(pageSize === null) {
            pageSize = 5;
      }
      try{
            const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=relevancy&pageSize=${currentUser.pageSize}&page=${page}&apiKey=275ba93aca13406586b5723cffc9c88f`);
            if(!response.status === 'ok'){
                  hiddenBtns.style.display = 'none';
                  throw new Error('Network response was not ok');
            };
            const data = await response.json();
            if(data.totalResults === 0) {
                  pagination.style.display = 'none';
            }
            num_pages = Math.ceil(data.totalResults/currentUser.pageSize);

            // if there is only 1 page, we will hidden the btn pre and next
            if(num_pages === 1) {
                  btnNext.style.display = 'none';
                  btnPrev.style.display = 'none';
                  pageNum.style.display = 'none';
            }
            else {
                  btnNext.style.display = 'block';
                  btnPrev.style.display = 'block';
                  pageNum.style.display = 'block';
            }
            displayNews(data);
            console.log('num pages',num_pages)
      }
      catch(error) {
            console.error('Error fetching data:', error);
            throw error;
      }

}

function searchHandle() {
      validate();
      // hidden the prebtn at the first news page
      btnPrev.style.display = 'none';
      // call API to get News
      fetData(inputSearch.value, page)
    
}
searchBtn.addEventListener('click', searchHandle);

// handle next button
btnNext.addEventListener('click', nextHandle);
function nextHandle(){
      page +=1;     
      pageNum.textContent = page;
      fetData(inputSearch.value, page);
// hidden nextbtn when we hit the last page
      if(page === num_pages){
            btnNext.style.display = 'none';
      }
      else{
            btnPrev.style.display = 'flex';
      }
}

// handle prev button
btnPrev.addEventListener('click',prevHandle);
function prevHandle(){
      page -= 1;
      pageNum.textContent = page;
      fetData(inputSearch.value, page);
// hidden prevbtn when we hit the first page
      if(page === 1){
      btnPrev.style.display = 'none';
      console.log('page pre', page)

      }
      else {
      btnNext.style.display = 'flex';
      }
}


// display news for user
function displayNews(data) {
      let html = '';
      data.articles.forEach(article => {
            if(article.content == '[Removed]'){
                  return;
            }
            html += `<div class="card flex-row flex-wrap">
                        <div class="card mb-3" style="">
                        <div class="row no-gutters">
                                    <div class="col-md-4">
                                    <img src=${article.urlToImage ? article.urlToImage : '../img/no_Image.jpg'} class="card-img" alt="MIT researchers uncover ‘unpatchable’ flaw in Apple M1 chips - TechCrunch">
                                    </div>
                                    <div class="col-md-8">
                                          <div class="card-body">
                                          <h5 class="card-title">${article.title}</h5>
                                                <p class="card-text">${article.description}</p>
                                                <a href=${article.url} class="btn btn-primary">View</a>
                                                </div>
                                    </div>
                              </div>
                              </div>
                  </div>`
            });
      newsContainer.innerHTML = html;
}
}