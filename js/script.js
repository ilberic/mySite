window.addEventListener('DOMContentLoaded', () => {
    //ссылки в хедере
    let links = document.querySelectorAll('.header__wrapper');
    setTimeout(() => {
        links.forEach((e,i) => {
            setTimeout(() => {
                e.style.opacity = '1';   
            }, 500 * ++i);
        });
    }, 1000);
    //fullpage.js
    
    let titleAbout = document.querySelector('.title_about'),
        titleAboutNew = document.querySelector('.title_about-new'),
        titleWhy = document.querySelector('.title_why'),
        titleWhyNew = document.querySelector('.title_why-new'),
        titleSkills = document.querySelector('.title_skills'),
        titleSkillsNew = document.querySelector('.title_skills-new'),
        titlePortfolio = document.querySelector('.title_portfolio'),
        titlePortfolioNew = document.querySelector('.title_portfolio-new'),
        titleContacts = document.querySelector('.title_contacts'),
        titleContactsNew = document.querySelector('.title_contacts-new'),
        wrapperAbout = document.querySelector('.about__wrapper'),
        wrapperWhy = document.querySelector('.why__wrapper'),
        wrapperSkills = document.querySelector('.skills__wrapper'),
        wrapperPortfolio = document.querySelector('.portfolio__wrapper'),
        wrapperContacts = document.querySelector('.contacts__wrapper');


    $('#fullpage').fullpage({
        //options here
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 1) {
                titleAbout.style.animationName = 'title_hideup';
                titleAboutNew.style.animationName = 'title_showup';
                wrapperAbout.style.animationName = 'wrapper_hideup';
            } else if (destination.index == 2) {
                titleWhy.style.animationName = 'title_hideup';
                titleWhyNew.style.animationName = 'title_showup';
                wrapperWhy.style.animationName = 'wrapper_hideup2';
            } else if (destination.index == 3) {
                titleSkills.style.animationName = 'title_hideup';
                titleSkillsNew.style.animationName = 'title_showup2';
                wrapperSkills.style.animationName = 'wrapper_hideup2';
            } else if (destination.index == 4) {
                titlePortfolio.style.animationName = 'title_hideup';
                titlePortfolioNew.style.animationName = 'title_showup2';
                wrapperPortfolio.style.animationName = 'wrapper_hideup2';
            } else if (destination.index == 5) {
                titleContacts.style.animationName = 'title_hideup';
                titleContactsNew.style.animationName = 'title_showup2';
                wrapperContacts.style.animationName = 'wrapper_hideup2';
            } 
            else {
                titleAbout.style.animationName = '';
                titleAboutNew.style.animationName = '';
                wrapperAbout.style.animationName = '';
                titleWhy.style.animationName = '';
                titleWhyNew.style.animationName = '';
                wrapperWhy.style.animationName = '';
                titleSkills.style.animationName = '';
                titleSkillsNew.style.animationName = '';
                wrapperSkills.style.animationName = '';
                titleContacts.style.animationName = '';
                titleContactsNew.style.animationName = '';
                wrapperContacts.style.animationName = '';
            }
        },
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
    
    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});