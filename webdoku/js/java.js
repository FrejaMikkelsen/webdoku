

// ------------------------------------------COOKIE CONSENT FORM

//generer cookie ud fra navn, værdi og dage
function setCookie(cname, cvalue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

//sletter cookie efter sat tid

function deleteCookie(cname) {
  const date = new Date();
  date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";  //fortæller at cookie hører til dette site
}

//læser cookie 

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) ==
      0) {
      return c.substring(name.length, c.length); //funktionen leder efter cookie(cname), og returnere hvis den findes
    }
  }
  return "";
}

//cookie consent

function acceptCookieConsent (){
  deleteCookie('klank_efterskole');  //navngivet klank_efterskole, så brugeren kan se det i inspect tool
  setCookie('klank_efterskole', 1, 30);
  document.getElementById("cookieNotice").style.display = "none";

}

//synligheden af cookie, hvis den er accepteret tidligere inden for sat tid hvor cookie gemmes, så vises cookie consent ikke
let cookie_consent = getCookie("klank_efterskole");
if(cookie_consent != ""){
    document.getElementById("cookieNotice").style.display = "none";
}else{
    document.getElementById("cookieNotice").style.display = "block";
}


//---------------------------------------------------------progressbar
let progress = document.getElementById("progressbar"); //fanger elementet progressbar fra mit id i html 
let totalHeight = document.body.scrollHeight - window.innerHeight; //scrollheight - viser hele højden af et element inkl. padding (i dette tilfæde body) og minusser det med innerHeight som er højden af browserens viewport
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100; //Beregning af hvor langt man er på siden med Y-koordinatet og finder ud af hvor langt det er fra de 100%
    progress.style.height = progressHeight + "%";
}

//-----------------------------------------------------------Videocollage
const VideoController = function(isHovering, videoElement)
{
	if (isHovering === true) //hvis man hover på elementet (true) 
    {
        videoElement.play(); //skal videoen afspille
    }
    else if (isHovering === false) //Hvis man ikke hover (false) 
    {
        videoElement.pause(); //skal videoen pauses - hvis så man hover igen, starter filmen fra der hvor den pausede - den starter altså ikke forfra
    }
}

//----------------------------------------------------------Tekstanimation

let observer = new IntersectionObserver((entries, observer) => { //intersectionObserver skal bruges til at observere hvor brugeren er på siden
  for (const entry of entries){ 
    if (entry.isIntersecting){ //hvis 
      installationskunst.innerHTML += ""; //fanger `#mask-`og de paths som kan findes fra id installationskunst
      maling.innerHTML += ""; //fanger `#mask-`og de paths som kan findes fra id maling
      skravering.innerHTML += ""; //fanger `#mask-`og de paths som kan findes fra id skravering
      skulptur.innerHTML += ""; //fanger `#mask-`og de paths som kan findes fra id skulptur
      tegning.innerHTML += ""; //fanger `#mask-`og de paths som kan findes fra id tegning
      const masks = ['installa-i1-1', 'installa-i1-2', 'installa-i1-3', 'installa-n1-1', 'installa-n1-2', 'installa-s1-1', 'installa-t1-1', 'installa-t1-2', 'installa-a1-1', 'installa-l1-1', 'installa-l2-1', 'installa-a2-1', 'installa-t2-1', 'installa-t2-2', 'installa-i2-1', 'installa-i2-2', 'installa-o-1', 'installa-n2-1', 'installa-n2-2', 'installa-s2-1', 'installa-k-1', 'installa-k-2', 'installa-u-1', 'installa-n3-1', 'installa-n3-2', 'installa-s3-1', 'installa-t3-1', 'installa-t3-2', 'maling-m', 'maling-a', 'maling-l', 'maling-i-1', 'maling-i-2', 'maling-n-1', 'maling-n-2', 'maling-g','skravering-s','skravering-k1','skravering-k2','skravering-r1-1','skravering-r1-2','skravering-a','skravering-v','skravering-e','skravering-r2','skravering-i1','skravering-i2', 'skravering-n', 'skravering-g','skulptur-s','skulptur-k1','skulptur-k2','skulptur-u1','skulptur-l','skulptur-p1','skulptur-p2','skulptur-t1','skulptur-t2','skulptur-u2','skulptur-r','tegning-t1','tegning-t2','tegning-e','tegning-g1','tegning-n1','tegning-i1','tegning-i2','tegning-n2','tegning-g2']
/*Alle paths er blevet navngivet "#mask-XX". Animationen er en linear forwards som er stylet i css med samme navn som alle paths id. Da alle paths har #mask i starten kan jeg herunder fange de specielle bogstaver fra ordene som jeg skal bruge i den bestemte class(svg,HTML). Derfor skal jeg ikke skrive #mask foran alle disse ovenfor */

      masks.forEach((mask, index, el) => {
        const id = `#mask-${mask}` //fanger alle id'er med #mask- 
        let path = document.querySelector(id) 
        const length = path.getTotalLength() //finder den totale længde fra strokedasharray og strokedashoffset
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
    })
    }
  };
}, { threshold: 1.0 }); //1 = 100% og betyder at artikel skal være 100% i viewport for at tælle med

const installationskunst = document.getElementById("installationskunst"); //definerer const og henter id elementet fra html-dokumentet - i dette tilfælde fra en svg
const maling = document.getElementById("maling"); //Observerer kun på den artikel som har id maling
const skravering = document.getElementById("skravering");
const skulptur = document.getElementById("skulptur");
const tegning = document.getElementById("tegning");

observer.observe(installationskunst); //observer gør at hvis den observerer denne section "installationskunst", skal animationen til denne section ske
observer.observe(maling); //Observerer kun på den artikel som har id maling
observer.observe(skravering);
observer.observe(skulptur);
observer.observe(tegning);

//Der er problemer med flg. bogstaver: installationskunst første l og skulpturs første u.. disse animerer ikke


AOS.init({ //kalder på AOS animationer "fade up"
  disable: function() { //slå animation fra
    var maxWidth = 800; //til alt under 800px
    return window.innerWidth < maxWidth; 
  }
});


//------------------------------------------ FOOTER CANVAS
function _(selector){
  return document.querySelector(selector);
}
function setup(){
  let canvas = createCanvas(450, 430); //canvas størrelse hvori der kan tegnes - samme størrelse som i HTML (pixels)
  canvas.parent("canvas-wrapper");
  background(255); //sætter baggrunden til at være hvid
}
function mouseDragged(){
  let type = _("#pen-pencil").checked?"pencil":"brush";
  let size = parseInt(_("#pen-size").value); //Finder værdien af det drag-værktøj som er i controls - jo større value, jo større streg-størrelse
  let color = _("#pen-color").value; //her finder den value af den farvepallette som der er i controls-panelet
  fill(color); //skal være udfyldt (eks hvis man bruger pensel, som er lavet med cirkler) med den farve som man har fundet i controls
  stroke(color);//skal have en stroke farve som den man har valgt i controls
  if(type == "pencil"){ 
    line(pmouseX, pmouseY, mouseX, mouseY); //hvis der tegnes med blyanten, tegnes der med linje
  } else {
    ellipse(mouseX, mouseY, size, size); //Hvis der tegnes med pensel, tegnes det med cirkler, hvor størrelsen er defineret i controls
  }
}
_("#reset-canvas").addEventListener("click", function(){ //canvas bliver gendannet, ved at ændre canvas-farven tilbage til den hvide farve på "click" af reset-knappen
  background(255); //Den hvide farve
});
