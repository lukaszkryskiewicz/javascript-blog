{ 'use strict';
/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */
const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

  /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

  /* [DONE] add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);
    console.log('clickedElement (with plus): ' + clickedElement);
    clickedElement.classList.add('active');

  /* [DONE]remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }

  /* [DONE] get 'href' attribute from the clicked link */
    let linkAttribute = clickedElement.getAttribute('href');
    console.log(linkAttribute);

  /* [DONE]find the correct article using the selector (value of 'href' attribute) */
    let correctArticle = document.querySelector(linkAttribute);
    console.log(correctArticle);

  /* [DONE]add class 'active' to the correct article */
    correctArticle.classList.add('active');
}


const links = document.querySelectorAll('.titles a');
for (let link of links){
    link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks () {
    console.log('wykonanie funkcji');

  /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';


  /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    for (let article of articles){
    /* get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);
    /* find the title element */
      const findTitle = article.querySelector(optTitleSelector);
      console.log(findTitle)
    /* get the title from the title element */
    const articleTitle = findTitle.innerHTML;
    console.log(articleTitle);

    /* create HTML of the link */

    /* insert link into titleList */


    }

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */


}

generateTitleLinks();

}