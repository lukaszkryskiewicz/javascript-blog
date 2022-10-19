{
  'use strict';
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

    for (const activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);
    console.log('clickedElement (with plus): ' + clickedElement);
    clickedElement.classList.add('active');

    /* [DONE]remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for (const activeArticle of activeArticles) {
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
  };


  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

  const generateTitleLinks = function () {
    console.log('wykonanie funkcji');

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';


    /* for each article */
    let html = ''; //variable to use in 'insert link into titetlList' section!
    const articles = document.querySelectorAll(optArticleSelector);
    for (const article of articles) {
      /* get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);
      /* find the title element */
      const findTitle = article.querySelector(optTitleSelector);
      console.log(findTitle);
      /* get the title from the title element */
      const articleTitle = findTitle.innerHTML;
      console.log(articleTitle);

      /* create HTML of the link */
      const articleHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(articleHTML);

      /* insert link into titleList */
      // titleList.innerHTML = titleList.innerHTML + articleHTML; //first solution
      //titleList.insertAdjacentHTML("beforeend", articleHTML); //insertAdjacentHTML exercise
      //console.log (titleList)
      html = html + articleHTML; //third solution --> final html outside the loop

    }
    titleList.innerHTML = html;
    console.log(html);
    const links = document.querySelectorAll('.titles a');
    console.log(links);
    for (const link of links) {
      link.addEventListener('click', titleClickHandler);
    }

  };

  generateTitleLinks();

  function generateTags() {
    /* find all articles */

    /* START LOOP: for every article: */

    /* find tags wrapper */

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

    /* generate HTML of the link */

    /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

    /* END LOOP: for every article: */
  }

  generateTags();

}
