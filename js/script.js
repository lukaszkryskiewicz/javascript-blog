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
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (const article of articles) {
      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      console.log(tagsWrapper);
      /* make html variable with empty string */
      let html = ' ';
      /* get tags from data-tags attribute */
      const tags = article.getAttribute('data-tags');
      console.log(tags);
      /* split tags into array */
      const articleTagsArray = tags.split(' ');
      console.log(articleTagsArray);
      /* START LOOP: for each tag */
      for (const tag of articleTagsArray) {
        /* generate HTML of the link */
        const tagHtml = '<li><a href="#tag-' + tag + '"><span> ' + tag + ' </span></a></li>';
        console.log(tagHtml);
        /* add generated code to html variable */
        html = html + tagHtml;
        console.log(html);
        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
      console.log(tagsWrapper);
      /* END LOOP: for every article: */
    }
  }

  generateTags();

  function tagClickHandler(event) {
    /* prevent default action for this event */

    /* make new constant named "clickedElement" and give it the value of "this" */

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    /* make a new constant "tag" and extract tag from the "href" constant */

    /* find all tag links with class active */

    /* START LOOP: for each active tag link */

    /* remove class active */

    /* END LOOP: for each active tag link */

    /* find all tag links with "href" attribute equal to the "href" constant */

    /* START LOOP: for each found tag link */

    /* add class active */

    /* END LOOP: for each found tag link */

    /* execute function "generateTitleLinks" with article selector as argument */
  }

  function addClickListenersToTags() {
    /* find all links to tags */

    /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

    /* END LOOP: for each link */
  }

  addClickListenersToTags();
}
