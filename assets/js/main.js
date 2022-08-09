// Read More
let noOfCharac = 80;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
  if (content.textContent.length < noOfCharac) {
    content.nextElementSibling.style.display = "none";
  }
  else {
    let displayText = content.textContent.slice(0, noOfCharac);
    let moreText = content.textContent.slice(noOfCharac);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
})
function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}
// Read More end


//Client TESTIMONIALS CAROUSEL 
jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
});
//Client TESTIMONIALS CAROUSEL End


//Show More Btn 
$("#showMore").click(function () {
  $("#blog .blog-box:hidden").slice(0, 3).slideDown();
  if ($("#blog .blog-box:hidden").length == 0) {
    $("#showMore").fadeOut("slow");
  }
})
//Show More Btn Ended

//Pagination
const ul = document.querySelector(".wrapper ul");
let afterPages=15;
function elem(allPages, page) {
  let li = '';
  let beforePages = page - 1;
  let afterPages = page + 1;
  let liActive;
  if (page > 1) {
    li += `<li class="btn" onclick="elem(allPages,${page-1})"><i class="fas fa-angle-left"></i></li>`
  }
  for(let pageLength =beforePages;pageLength<=afterPages;pageLength++){
   
   if(pageLength>allPages){
    continue;
   }
   if(pageLength==0){
    pageLength=pageLength+1;
   }
    if(page==pageLength){
      liActive='active';
    }
    else{
      liActive='';
    }
    li+=`<li class="num ${liActive}" onclick="elem(allPages,${pageLength})"><span>${pageLength}</span></li>`
  }
  if(page<allPages){
    li+=`<li class="btn" onclick="elem(allPages,${page+1})"><i class="fas fa-angle-right"></i></li>`
  }
  ul.innerHTML=li;


}
elem(allPages,2)
