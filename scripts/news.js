'use strict'
const newsContainer = document.getElementById('news-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const pageNum = document.getElementById('page-num');
const pageSize = 5;
let page =1;
let num_pages;
if(currentUser){
      // hidden the prebtn at the first news page
      btnPrev.style.display = 'none';

      // call API to get News
      async function fetData(country, category, pageSize, page) {
            if(category === null){
                  category = 'General';
            }
            if(pageSize === null) {
                  pageSize = 5;
            }
            try{
                  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=275ba93aca13406586b5723cffc9c88f`);
                  if(!response.status === 'ok'){
                        throw new Error('Network response was not ok');
                  };
                  const data = await response.json();
                  num_pages = Math.ceil(data.totalResults/pageSize);
                  console.log(data)
                  displayNews(data);
            }
            catch(error) {
                  console.error('Error fetching data:', error);
                  throw error;
            }
      
      }
      
      fetData('us', currentUser.category, currentUser.pageSize,page);
      // handle next button
      btnNext.addEventListener('click', nextHandle);
      function nextHandle(){
            page +=1;     
            pageNum.textContent = page;
            fetData('us', currentUser.category, currentUser.pageSize,page );
      // hidden nextbtn when we hit the last page
            if(page === num_pages){
                  btnNext.style.display = 'none';
            }
            else{
                  btnPrev.style.display = 'block';
            }
      }

      // handle prev button
      btnPrev.addEventListener('click',prevHandle);
      function prevHandle(){
            page -= 1;
            pageNum.textContent = page;
            fetData('us', currentUser.category, currentUser.pageSize, page);
      // hidden prevbtn when we hit the first page
            if(page === 1){
            btnPrev.style.display = 'none';
            console.log('page pre', page)

            }
            else {
            btnNext.style.display = 'block';
            }
      }

}
else {
      alert('Please Sign Up/Sign In.');
      window.location.assign('../index.html');
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

