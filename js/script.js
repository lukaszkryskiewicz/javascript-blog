{
  'use strict';
  /* document.getElementById('test-button').addEventListener('click', function(){
      const links = document.querySelectorAll('.titles a');
      console.log('links:', links);
    }); */


  const opts = {
    cloudTags: {
      count: 5,
      classPrefix: 'tag-size-',
    },
  };

  const select = {
    all: {
      articles: '.post',
      titles: '.post-title',
    },

    listOf: {
      titles: '.titles',
      tags: '.tags.list',
      authors: '.authors.list',
    },
    article: {
      tags: '.post-tags .list',
      authors: '.post-author',
    },
  };

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

    /* [DONE]find the correct article using the selector (value of 'href' attribute) */
    let correctArticle = document.querySelector(linkAttribute);

    /* [DONE]add class 'active' to the correct article */
    correctArticle.classList.add('active');
  };


  const generateTitleLinks = function (customSelector = '') {

    /* remove contents of titleList */
    const titleList = document.querySelector(select.listOf.titles);
    titleList.innerHTML = '';

    /* for each article */
    let html = ''; //variable to use in 'insert link into titetlList' section!
    const articles = document.querySelectorAll(select.all.articles + customSelector);

    for (const article of articles) {
      /* get the article id */
      const articleId = article.getAttribute('id');
      /* find the title element */
      const findTitle = article.querySelector(select.all.titles);
      /* get the title from the title element */
      const articleTitle = findTitle.innerHTML;
      /* create HTML of the link */
      const articleHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      /* insert link into titleList */
      // titleList.innerHTML = titleList.innerHTML + articleHTML; //first solution
      //titleList.insertAdjacentHTML("beforeend", articleHTML); //insertAdjacentHTML exercise
      //console.log (titleList)
      html = html + articleHTML; //third solution --> final html outside the loop

    }
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    for (const link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };

  generateTitleLinks();

  function calculateTagsParams(tags) {
    const params = { max: 0, min: 99999 };
    for (let tag in tags) {
      console.log(tag + ' is used ' + tags[tag] + ' times');
      params.max = Math.max(params.max, tags[tag]);
      params.min = Math.min(params.min, tags[tag]);
    }
    return params;

  };

  function calculateTagClass(count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax
    const classNumber = Math.floor(percentage * (opts.cloudTags.count - 1) + 1);
    return (opts.cloudTags.classPrefix + classNumber);

  };
  function generateTags() {
    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};
    /* find all articles */
    const articles = document.querySelectorAll(select.all.articles);
    /* START LOOP: for every article: */
    for (const article of articles) {
      /* find tags wrapper */
      const tagsWrapper = article.querySelector(select.article.tags);
      /* make html variable with empty string */
      let html = ' ';
      /* get tags from data-tags attribute */
      const tags = article.getAttribute('data-tags');
      /* split tags into array */
      const articleTagsArray = tags.split(' ');
      /* START LOOP: for each tag */
      for (const tag of articleTagsArray) {
        /* generate HTML of the link */
        const tagHtml = '<li><a href="#tag-' + tag + '"><span> ' + tag + ' </span></a></li>';
        /* add generated code to html variable */
        html = html + tagHtml;
        /* [NEW] check if this link is NOT already in allTags */
        if (!allTags[tag]) {
          /* [NEW] add generated code to allTags object */
          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }
        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
      /* END LOOP: for every article: */
    }
    /* [NEW] find list of tags in right column */
    let tagList = document.querySelector(select.listOf.tags);
    /* [NEW] create variable for all links HTML code */
    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams)
    let allTagsHTML = '';
    /* [NEW] START LOOP: for each tag in allTags: */
    for (let tag in allTags) {
      /* [NEW] generate code of a link and add it to allTagsHTML */
      allTagsHTML += '<li><a class="' + calculateTagClass(allTags[tag], tagsParams) + '" href="#tag-' + tag + '">' + tag + '</a></li>';
    }
    /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;
  }

  generateTags();

  function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    /* START LOOP: for each active tag link */
    for (const activeTag of activeTags) {
      /* remove class active */
      activeTag.classList.remove('active');
      /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const allTagLinks = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each found tag link */
    for (tagLink of allTagLinks) {
      /* add class active */
      tagLink.classList.add('active');
      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags() {
    /* find all links to tags */
    const allTagLinks = document.querySelectorAll('a[href^="#tag-"]');
    /* START LOOP: for each link */
    for (const allTagLink of allTagLinks) {
      /* add tagClickHandler as event listener for that link */
      allTagLink.addEventListener('click', tagClickHandler);
      /* END LOOP: for each link */
    }
  }
  addClickListenersToTags();


  function generateAuthors() {
    /* AUTHOR LIST EXERCISE --> NEW create a new variable allAuthors with an empty object */
    let allAuthors = {};
    /* find all articles */
    const articles = document.querySelectorAll(select.all.articles);
    /* START LOOP: for every article: */
    for (const article of articles) {
      /* find author wrapper */
      const authorWrapper = article.querySelector(select.article.authors);
      /* make html variable with empty string */
      html = '';
      /* get author from data-author attribute */
      const author = article.getAttribute('data-author');
      /* AUTHOR LIST EXERCISE --> CHECK IF AUTHOR IS NOT ALREADY IN OBJECT AND ADD IT OR ADD INCREMENT VALUE*/
      if (allAuthors.hasOwnProperty(author) != 1) {
        allAuthors[author] = 1;
      } else
        allAuthors[author]++;
      /* generate HTML of the link */
      const authorLink = '<a href="#author-' + author + '">' + author + '</a>';
      /* add generated code to html variable */
      html = html + authorLink
      /* insert HTML of all the links into the tags wrapper */
      authorWrapper.innerHTML = html;
      /* END LOOP: for every article: */
    }
    /* AUTHOR LIST EXERCISE --> CREATE HTML CODE AND ADD TO AUTHORLIST ON THE RIGHT SIDE*/
    let authorList = document.querySelector(select.listOf.authors);
    let allAuthorsHTML = '';
    for (let author in allAuthors) {
      allAuthorsHTML += '<li><a href="#author-' + author + '">' + author + ' (' + allAuthors[author] + ')</a></li>';
    }
    authorList.innerHTML = allAuthorsHTML;
  }

  generateAuthors();

  function authorClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "author" and extract author from the "href" constant */
    const author = href.replace('#author-', '');
    /* find all author links with class active */
    const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
    /* START LOOP: for each active author link */
    for (const activeAuthorLink of activeAuthorLinks) {
      /* remove class active */
      activeAuthorLink.classList.remove('active');
      /* END LOOP: for each active tag link */
    }
    /* find all author links with "href" attribute equal to the "href" constant */
    const allAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each found author link */
    for (const authorLink of allAuthorLinks) {
      /* add class active */
      authorLink.classList.add('active');
      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + author + '"]');
  }

  function addClickListenersToAuthors() {
    /* find all links to authors */
    allLinksToAuthors = document.querySelectorAll('a[href^="#author-"]');
    /* START LOOP: for each link */
    for (const linkToAuthor of allLinksToAuthors) {
      /* add authorClickHandler as event listener for that link */
      linkToAuthor.addEventListener('click', authorClickHandler);
      /* END LOOP: for each link */
    }
  }

  addClickListenersToAuthors();
}
