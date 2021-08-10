import 'normalize.css';
import './styles/style.scss';

let homepage = document.getElementById('homepage');
let gogoroPage = document.getElementById('gogoro-page');
const introEl = document.querySelector('.oh-hey');
let workPage = document.querySelector('.work-page');


let job = document.querySelectorAll('.job');
let jobEvents = [];
let currentSlideCount = [];
let currentSlide;
let slideCount;
let projects = document.querySelectorAll('.projects');
let secondaryNav = document.querySelectorAll('.secondary-nav');
let closeSecondaryNav = document.querySelector('.close-secondary-nav');
let date = document.querySelector('.date');
let d = new Date();
let beard1 = document.getElementById('beardseason1');
let beard2 = document.getElementById('beardseason2');
let tjbLogo = document.getElementById('james-logo');



// HOMEPAGE
import mags from '../src/img/mags.png';
import clouds from "../src/img/sky_2.mp4";
import hank from "../src/img/hank.mp4";
import cinco from "../src/img/cinco.mp4";

import cinco0 from "../src/img/cinco_0.jpg";
import cinco1 from "../src/img/cinco_1.jpg";
import cinco2 from "../src/img/cinco_2.jpg";
import cinco3 from "../src/img/cinco1.jpg";

import gogoro0 from "../src/img/gogoro_0.jpg";

import gogoro2 from "../src/img/gogoro_dtl_2.jpg";
import gogoro3 from "../src/img/gogoro_dtl_3.png";
import gogoro4 from "../src/img/gogoro_dtl_4.jpg";
import gogoro5 from "../src/img/gogoro_dtl_5.jpg";
import gogoro6 from "../src/img/gogoro_dtl_6.jpg";
import gogoro7 from "../src/img/gogoro_dtl_7.mp4";
import gogoro8 from "../src/img/gogoro_dtl_8.jpg";
import gogoro9 from "../src/img/gogoro_dtl_9.jpg";
import gogoro10 from "../src/img/gogoro_dtl_10.jpg";
import gogoro11 from "../src/img/gogoro_dtl_11.jpg";
import gogoro12 from "../src/img/gogoro_dtl_12.jpg";
import gogoro13 from "../src/img/gogoro_dtl_13.jpg";
import gogoro14 from "../src/img/gogoro_dtl_14.jpg";
import gogoro15 from "../src/img/gogoro_dtl_15.jpg";

import indigo1 from "../src/img/indigo_1.jpg";
import indigo2 from "../src/img/indigo_2.jpg";
import indigo3 from "../src/img/indigo_3.jpg";
import indigo4 from "../src/img/indigo_4.jpg";
import indigo5 from "../src/img/indigo_5.jpg";
import indigo6 from "../src/img/indigo_6.jpg";
import indigo7 from "../src/img/indigo_7.jpg";
import indigo8 from "../src/img/indigo_8.jpg";
import indigo9 from "../src/img/indigo_9.jpg";
import indigo10 from "../src/img/indigo_10.jpg";

import hank1 from "../src/img/hank_1.jpg";
import hank2 from "../src/img/hank_2.jpg";
import hank3 from "../src/img/hank.mp4";
let hank4 = "https://player.vimeo.com/external/365626808.hd.mp4?s=54344f281ab2ee21649e5a62d05f78ceee4dcee3&profile_id=175"
let hank5 = "https://player.vimeo.com/external/365111331.hd.mp4?s=8824d0e9b078367a7c4d30ca9ebc594585b2f6cc&profile_id=174"


let tjb0 = "https://player.vimeo.com/external/165183648.hd.mp4?s=4fd0a6759a63a06b250ce6f821e96fc491520051&profile_id=119";
import tjb1 from "../src/img/tjb_1.jpg";
import tjb2 from "../src/img/tjb_2.jpg";
import tjb3 from "../src/img/tjb_3.jpg";
import tjb4 from "../src/img/tjb_0.jpg";
import tjb5 from "../src/img/james.mp4";

import hanour1 from "../src/img/hanour_1.jpg";
let hanour2 = "https://player.vimeo.com/external/232087024.sd.mp4?s=ebcdc83df4851bdc81ce8ba07320dd7db7bfa22b&profile_id=165";
let hanour3 = "https://player.vimeo.com/external/258123440.hd.mp4?s=78db6a34ee1f185ef44094973107d931b6e8e3a9&profile_id=174";
let hanour4 = "https://player.vimeo.com/external/288994448.sd.mp4?s=a8cf4f50df6992db4d18c5e58ee2c8b6e332480c&profile_id=165";
import hanour5 from "../src/img/hanour_2.jpg";
import hanour6 from "../src/img/hanour_3.jpg";

import nextbit1 from "../src/img/nextbit_1.jpg";
import nextbit2 from "../src/img/nextbit_2.mp4";
import nextbit3 from "../src/img/nextbit_3.jpg";
import nextbit4 from "../src/img/nextbit_4.jpg";
import nextbit5 from "../src/img/nextbit_5.png";
import nextbit6 from "../src/img/nextbit_6.jpg";
import nextbit7 from "../src/img/nextbit_7.jpg";
import nextbit8 from "../src/img/nextbit_8.jpg";
import nextbit9 from "../src/img/nextbit_9.jpg";
import nextbit10 from "../src/img/nextbit_10.jpg";
import nextbit11 from "../src/img/nextbit_11.jpg";
import nextbit12 from "../src/img/nextbit_12.jpg";
import nextbit13 from "../src/img/nextbit_13.mp4";
import nextbit14 from "../src/img/nextbit_14.jpg";
import nextbit15 from "../src/img/nextbit_15.jpg";
import nextbit16 from "../src/img/nextbit_16.jpg";
import nextbit17 from "../src/img/nextbit_17.jpg";
import nextbit18 from "../src/img/nextbit_18.jpg";

import quik1 from "../src/img/quik1.jpg";
import quik2 from "../src/img/quik2.jpg";
import quik3 from "../src/img/quik3.png";

import bg1 from "../src/img/bg1.jpg";
import bg2 from "../src/img/bg2.jpg";
import bg3 from "../src/img/bg3.jpg";

import banjo1 from "../src/img/banjo1.jpg";
import banjo2 from "../src/img/banjo2.jpg";
import banjo3 from "../src/img/banjo3.jpg";
import banjo4 from "../src/img/banjo4.jpg";
import banjo5 from "../src/img/banjo5.mp4";
import banjo6 from "../src/img/banjo6.mp4";
import banjo7 from "../src/img/banjo7.jpg";
import banjo8 from "../src/img/banjo8.jpg";
import banjo9 from "../src/img/banjo9.jpg";

import rc0 from "../src/img/rc_content_0.mp4";
import rc1 from "../src/img/rc_content_1.mp4";
import rc2 from "../src/img/rc_content_2.mp4";
import rc3 from "../src/img/rc_content_3.jpg";
import rc4 from "../src/img/rcfwd1.jpg";
import rc5 from "../src/img/rcfwd2.jpg";
import rc6 from "../src/img/rcfwd3.jpg";
import rc7 from "../src/img/rcglip.jpg";
import rcBalance1 from "../src/img/rc_balance_1.mp4";
import rcBalance2 from "../src/img/rc_balance_2.mp4";
import rc8 from "../src/img/rc_keyart_1.jpg";
import rc9 from "../src/img/rc_keyart_2.jpg";

// import fig0 from "../src/img/fig_0.jpg";
// import fig1 from "../src/img/fig_1.jpg";
// import fig2 from "../src/img/fig_2.jpg";
// import fig3 from "../src/img/fig_3.jpg";
// import fig4 from "../src/img/fig_4.jpg";
// import fig5 from "../src/img/fig_5.jpg";
// import fig6 from "../src/img/fig_6.jpg";
// import fig7 from "../src/img/fig_7.jpg";

import hora0 from "../src/img/hora_0.jpg";
import hora1 from "../src/img/hora_1.jpg";
import hora2 from "../src/img/hora_2.jpg";
let hora3 = 'https://player.vimeo.com/external/167498190.hd.mp4?s=091c3e983743f4596e12cd96fab817112b4b32bf&profile_id=119';
let hora4 = 'https://player.vimeo.com/external/165376142.hd.mp4?s=81c1496a030ac87802a95df3da50f6cec7ff59fb&profile_id=174';
let hora5 = 'https://player.vimeo.com/external/167500442.hd.mp4?s=f934a9db1f0b95530442e2931891572d18c2b347&profile_id=119';

// GOGORO CONTENT
let workdtlGogoro2 = {
  image: gogoro2,
  altText: "gogoro scooters",
  info: "Cinco created Gogoro's original brand platform and visual identity. Since then we have helped position and create identities for new products including the S.",
};
let workdtlGogoro3 = {
  image: gogoro10,
  altText: "gogoro scooter",
  info: '',
};
let workdtlGogoro4 = {
  image: gogoro11,
  altText: "G1 Scooter Parts",
  info: '',
};
let workdtlGogoro5 = {
  image: gogoro3,
  altText: "Gogoro Flagship Store",
  info: '',
};
let workdtlGogoro6 = {
  image: gogoro13,
  altText: "Gogoro Flagship Store",
  info: '',
};
let workdtlGogoro7 = {
  image: gogoro4,
  altText: "Gogoro Flagship Store",
  info: '',
};
let workdtlGogoro8 = {
  image: gogoro5,
  altText: "Gogoro Flagship Store",
  info: '',
};
let workdtlGogoro9 = {
  image: gogoro6,
  altText: "Gogoro Flagship Store",
  info: '',
};
let workdtlGogoro10 = {
  image: gogoro7,
  altText: "Gogoro Network",
  info: 'In 2019 we worked with the Gogoro team on updating their brand architecture and introducing new sub brands. ',
};
let workdtlGogoro11 = {
  image: gogoro8,
  altText: "Gogoro Network",
  info: '',
};
let workdtlGogoro12 = {
  image: gogoro9,
  altText: "Gogoro Network",
  info: '',
};
let workdtlGogoro13 = {
  image: gogoro15,
  altText: "GoShare",
  info: '',
};
let workdtlGogoro14 = {
  image: gogoro14,
  altText: "GoShare",
  info: '',
};


// CINCO CONTENT
let workdtlCinco1 = {
  image: cinco1,
  altText: "Cinco Design",
  info: '',
};
let workdtlCinco2 = {
  image: cinco0,
  altText: "Cinco Design",
  info: '',
};
let workdtlCinco3 = {
  image: cinco2,
  altText: "Cinco Design",
  info: '',
};
let workdtlCinco4 = {
  image: cinco,
  altText: "Cinco Design",
  info: '',
};

// HANK CONTENT
let workdtlHank1 = {
  image: hank1,
  altText: "Hank PDX",
  info: '',
};
let workdtlHank2 = {
  image: hank4,
  altText: "Hank PDX",
  info: '',
};
let workdtlHank3 = {
  image: hank3,
  altText: "Hank PDX",
  info: '',
};
let workdtlHank4 = {
  image: hank5,
  altText: "Hank PDX",
  info: '',
};
let workdtlHank5 = {
  image: hank1,
  altText: "Hank PDX",
  info: '',
};


// TJB CONTENT
let workdtlTjb1 = {
  image: tjb0,
  altText: "The James Brand",
  info: '',
};
let workdtlTjb2 = {
  image: tjb3,
  altText: "The James Brand",
  info: '',
};
let workdtlTjb3 = {
  image: tjb1,
  altText: "The James Brand",
  info: '',
};
let workdtlTjb4 = {
  image: tjb4,
  altText: "The James Brand",
  info: '',
};
let workdtlTjb5 = {
  image: tjb2,
  altText: "The James Brand",
  info: '',
};

// NEXTBIT CONTENT
let workdtlNext1 = {
  image: nextbit2,
  altText: "Nextbit",
  info: '',
};
let workdtlNext2 = {
  image: nextbit3,
  altText: "Nextbit",
  info: '',
};
let workdtlNext3 = {
  image: nextbit4,
  altText: "Nextbit",
  info: '',
};
let workdtlNext4 = {
  image: nextbit5,
  altText: "Nextbit",
  info: '',
};
let workdtlNext5 = {
  image: nextbit6,
  altText: "Nextbit",
  info: '',
};
let workdtlNext6 = {
  image: nextbit7,
  altText: "Nextbit",
  info: '',
};
let workdtlNext7 = {
  image: nextbit8,
  altText: "Nextbit",
  info: '',
};
let workdtlNext8 = {
  image: nextbit9,
  altText: "Nextbit",
  info: '',
};
let workdtlNext9 = {
  image: nextbit10,
  altText: "Nextbit",
  info: '',
};
let workdtlNext10 = {
  image: nextbit11,
  altText: "Nextbit",
  info: '',
};
let workdtlNext11 = {
  image: nextbit12,
  altText: "Nextbit",
  info: '',
};
let workdtlNext12 = {
  image: nextbit13,
  altText: "Nextbit",
  info: '',
};
let workdtlNext13 = {
  image: nextbit14,
  altText: "Nextbit",
  info: '',
};

// HORA CONTENT
let workdtlHora1 = {
  image: hora1,
  altText: "Hora",
  info: '',
};
let workdtlHora2 = {
  image: hora3,
  altText: "Hora",
  info: '',
};
let workdtlHora3 = {
  image: hora2,
  altText: "Hora",
  info: '',
};
let workdtlHora4 = {
  image: hora4,
  altText: "Hora",
  info: '',
};
let workdtlHora5 = {
  image: hora5,
  altText: "Hora",
  info: '',
};

// SACRED FIG CONTENT
// let workdtlFig1 = {
//   image: fig1,
//   altText: "The Sacred Fig",
//   info: '',
// };
// let workdtlFig2 = {
//   image: fig2,
//   altText: "The Sacred Fig",
//   info: '',
// };
// let workdtlFig3 = {
//   image: fig3,
//   altText: "The Sacred Fig",
//   info: '',
// };
// let workdtlFig4 = {
//   image: fig4,
//   altText: "The Sacred Fig",
//   info: '',
// };
// let workdtlFig5 = {
//   image: fig5,
//   altText: "The Sacred Fig",
//   info: '',
// };

// RINGCENTRAL CONTENT
let workdtlRing1 = {
  image: rc0,
  altText: "RingCentral",
  info: 'Our first step towards designing for scale and improved performance is to create the tools we need for production — a design system, content library & templates. We also rebuilt internal processes from the ground up.',
};
let workdtlRing2 = {
  image: rc1,
  altText: "RingCentral",
  info: 'RingCentral’s reliance on found imagery made it difficult to differentiate and create trust. We worked with Cinco Design to create a strategy and repeatable process for working with top photographers and illustrators to build a stockpile of premium content.',
};
let workdtlRing3 = {
  image: rc2,
  altText: "RingCentral",
  info: '',
};
let workdtlRing4 = {
  image: rc3,
  altText: "RingCentral",
  info: '',
};
let workdtlRing5 = {
  image: rc5,
  altText: "RingCentral",
  info: 'Here is everywhere was RingCentral’s first ever global kick off with more than 7,000 employees in attendance. We helped align on a theme and created an identity and campaign to support it. ',
};
let workdtlRing6 = {
  image: rc4,
  altText: "RingCentral",
  info: '',
};
let workdtlRing7 = {
  image: rc7,
  altText: "RingCentral",
  info: "Identity and go to market for Glip—RingCentral's first freemium product.",
};
let workdtlRing8 = {
  image: rcBalance1,
  altText: "RingCentral",
  info: "RingCentral's all in one solution helps people balance their hetic (and mixed) home and work lives. We created a campaign that put a spotlight on how we help people handle it all at once.",
};
// let workdtlRing9 = {
//   image: rc8,
//   altText: "RingCentral",
//   info: "The visual asset creator is another tool we made to help us scale and diversify content on our blog and social media. It allows anyone on our marketing team (without support of the design team) to configure key art for their project.",
// };
// let workdtlRing10 = {
//   image: rc9,
//   altText: "RingCentral",
//   info: "",
// };



document.addEventListener("DOMContentLoaded", () => {

  if (workPage) {

    let workImages = document.querySelectorAll('.work-images');
    let caseStudy = workPage.id;

    let cincoWork = [workdtlCinco1, workdtlCinco2, workdtlCinco3, workdtlCinco4];
    let hankWork = [workdtlHank1, workdtlHank2, workdtlHank3, workdtlHank4, workdtlHank5];
    let gogoroWork = [workdtlGogoro2, workdtlGogoro3, workdtlGogoro4, workdtlGogoro5, workdtlGogoro6, workdtlGogoro7, workdtlGogoro8, workdtlGogoro9, workdtlGogoro10, workdtlGogoro11, workdtlGogoro12, workdtlGogoro13, workdtlGogoro14]
    let tjbWork = [workdtlTjb1, workdtlTjb2, workdtlTjb3, workdtlTjb4, workdtlTjb5];
    let nextbitWork = [workdtlNext1, workdtlNext2, workdtlNext3, workdtlNext4, workdtlNext5, workdtlNext6, workdtlNext7, workdtlNext8, workdtlNext9, workdtlNext10, workdtlNext11, workdtlNext12, workdtlNext13];
    let horaWork = [workdtlHora1, workdtlHora2, workdtlHora3, workdtlHora4, workdtlHora5];
    // let figWork = [workdtlFig1, workdtlFig2, workdtlFig3, workdtlFig4, workdtlFig5];
    let ringcentralWork = [workdtlRing1, workdtlRing2, workdtlRing3, workdtlRing4, workdtlRing5, workdtlRing6, workdtlRing7, workdtlRing8];







    setTimeout(function() {
      introEl.style.display = 'none';
    }, 3000);

    const injectWork = (client) => {
        for (var i = 0; i < client.length; i++) {
          let workContent = document.createElement("div");
          workContent.className = "work-content";
          workImages[0].appendChild(workContent);

          if (client[i].info.length !== 0) {
            let workInfoContainer = document.createElement("div");
            workInfoContainer.className = "work-info";
            workContent.appendChild(workInfoContainer);
            let workInfoContent = document.createElement("p");
            workInfoContainer.appendChild(workInfoContent);
            let textNode = document.createTextNode(client[i].info);
            workInfoContent.appendChild(textNode);
            let btn = document.createElement("BUTTON");
            btn.innerHTML = "info";
            btn.className = "info-btn"
            workContent.appendChild(btn);
          }

          if (client[i].image.endsWith(".jpg") | client[i].image.endsWith(".png") | client[i].image.endsWith(".gif")) {
            let img = document.createElement("img");
            img.src = client[i].image;
            img.setAttribute('class','work-dtl');
            img.setAttribute("alt", client[i].altText);
            workContent.appendChild(img);
          } else {
            let video = document.createElement("video");
            video.src = client[i].image;
            video.setAttribute('playsinline', '');
            video.setAttribute("alt", client[i].altText);
            video.muted = true;
            video.autoplay = true;
            video.loop = true;
            video.setAttribute('class','work-dtl');
            workContent.appendChild(video);
          }
        }
    }

    if (caseStudy == 'gogoro-page') {
      injectWork(gogoroWork);
    } else if (caseStudy == 'indigo-page') {
      injectWork(indigoWork);
    } else if (caseStudy == 'hanour-page') {
      injectWork(hanourWork);
    } else if (caseStudy == 'tjb-page') {
      injectWork(tjbWork);
    } else if (caseStudy == 'hank-pdx-page') {
      injectWork(hankWork);
    } else if (caseStudy == 'cinco-design-page') {
      injectWork(cincoWork);
    } else if (caseStudy == 'nextbit-page') {
      injectWork(nextbitWork);
    } else if (caseStudy == 'ringcentral-page') {
      injectWork(ringcentralWork);
    } else if (caseStudy == 'thesacredfig-page') {
      injectWork(figWork);
    } else if (caseStudy == 'hora-page') {
      injectWork(horaWork);
    }

    let infoBtn = document.querySelectorAll('.info-btn');

    for (var i = 0; i < infoBtn.length; i++) {
      infoBtn[i].addEventListener('click',function(e) {

        if (e.target.parentElement.classList.contains('dtl-open')) {
          e.target.parentElement.classList.remove('dtl-open');
          e.target.innerHTML = 'info';
        } else {
          e.target.parentElement.classList.add('dtl-open');
          e.target.innerHTML = 'close';
          // Scroll to the top of the image
          let workHeader = document.querySelector('.work-header');
          let workHeaderHeight = workHeader.offsetHeight;
          let scrollUpTo = e.target.parentNode.offsetTop - workHeaderHeight + 1;
          window.scrollTo(0, scrollUpTo);
        }
      });
    };


  };

  // FIX SAFARI BACK SWIPE BUG
  window.onpageshow = function(event) {
    if (event.persisted) {
      window.location.reload();
    }
  };

  if (homepage) {

    let timeEl = document.querySelector('.time');

    function time() {
      var d = new Date();
      var s = d.getSeconds();
      var m = d.getMinutes();
      var h = d.getHours();

      if (s < 10) {
        s = '0' + s;
      }
      if (m < 10) {
        m = '0' + m;
      }

      function minTwoDigits(s) {
        return (s < 10 ? '0' : '') + s;
      }
      timeEl.textContent = h + ":" + m + ":" + s;
    }

    setInterval(time, 1000);

    if (window.location.search == '?back=true') {
      introEl.style.display = 'none';

      setTimeout(function() {
        window.history.replaceState({}, document.title, "/");
      }, 500);
    } else {
      // Initial starting place
      location.hash = "hi";
      setTimeout(function() {
        introEl.style.display = 'none';
      }, 3000);
    }

    let workLink = document.querySelectorAll('.link-to-work');

    for (var i = 0; i < workLink.length; i++) {
      workLink[i].addEventListener('click',function(e) {
        e.preventDefault();
        homepage.classList.add('out');
        let destination = this.href;
        setTimeout(function() {
          window.location = destination;
        }, 400);
      });
    }

    // IMAGES AND VIDEOS
    var rcBlock = document.getElementById('ringcentral-first');
    rcBlock.src = rcBalance2;

    // var figBlock = document.getElementById('thesacredfig-fist');
    // figBlock.src = fig0;

    var hankBlock = document.getElementById('hank');
    hankBlock.src = hank;

    var cincoBlock = document.getElementById('cinco');
    cincoBlock.src = cinco;

    var nextbitBlock = document.getElementById('nextbit-fist');
    nextbitBlock.src = nextbit1;


    var horaBlock = document.getElementById('hora-fist');
    horaBlock.src = hora0;

    const portfolioSection = document.querySelectorAll('.portfolio-section');

    // display portfolio link
    const portfolioSectionHover = () => {
      Array.prototype.forEach.call(portfolioSection, (el, i) => {
        portfolioSection[i].addEventListener('mouseover', () => {
          const activeCursor = el.querySelector('.cursor-follow');
          activeCursor.classList.add('active');
        });
        portfolioSection[i].addEventListener('mouseout', () => {
          const activeCursor = el.querySelector('.cursor-follow');
          activeCursor.classList.remove('active');
        });
      });
    };

    // portfolio link follow cursor
    document.addEventListener('mousemove', (e) => {
      const activePortfolioHover = document.querySelectorAll('.cursor-follow.active');
      Array.prototype.forEach.call(activePortfolioHover, (el) => {
        let offsetRight =  window.innerWidth - e.screenX;
        if (offsetRight > el.offsetWidth + 100) {
          el.setAttribute('style', `left: ${e.pageX + 30}px; top: ${e.pageY - el.parentElement.offsetTop - 20}px;`);
        } else {
          el.setAttribute('style', `left: ${e.pageX - el.offsetWidth - 100}px; top: ${e.pageY - el.parentElement.offsetTop - 20}px;`);
        }
      });
    });

    const me = document.querySelector('.me');
    const hoverFamily = document.querySelector('.bio-images');

    // show family on ae hover
    const meHover = () => {
      me.addEventListener('mouseover', () => {
        hoverFamily.classList.add('active');
      });
      me.addEventListener('mouseout', () => {
        hoverFamily.classList.remove('active');
      });
    };

    meHover();
    portfolioSectionHover();

  }


});
