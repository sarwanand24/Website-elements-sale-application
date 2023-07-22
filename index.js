// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA-pjTYLNGKq-XvAqrgWN_g0-KaCAwraBc",
    authDomain: "css-creatures.firebaseapp.com",
    projectId: "css-creatures",
    storageBucket: "css-creatures.appspot.com",
    messagingSenderId: "899687287440",
    appId: "1:899687287440:web:6f0694b0fa51c684e3e615",
    measurementId: "G-D7H9H1RRJZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
 
  <script>

window.history.pushState(null,null,window.location.href);
window.onpopstate = function(){
  window.history.go(1);
  location.reload(true);
}

    //************************************** SEARCH FUNCTION ********************************************//

function search_css(){

document.getElementById("search-hide").style.display="none";
document.getElementById("searchon").style.display="block";
document.getElementById("plch").style.display="none";
document.getElementById("body").style.position="absolute";
document.getElementById("body").style.overflowX="hidden";

 let input = document.getElementById("searchbar").value;
 input=input.toLowerCase();
 let x = document.getElementsByClassName("element-name");
 let y = document.getElementsByClassName("elements");

 for (var i = 0; i < x.length; i++){

  if (!x[i].innerHTML.toLowerCase().includes(input) ) {
    y[i].style.display="none";
  }

 else{
  y[i].style.display="block";
 }

 }

}
//************************************** SEARCH FUNCTION ENDS ********************************************//

document.getElementById("view1").addEventListener("click", function(){ 
  document.getElementById("search-hide").style.display="none";
document.getElementById("searchon").style.display="block";
document.getElementById("body").style.position="absolute";
})

document.getElementById("view2").addEventListener("click", function(){ 
  document.getElementById("search-hide").style.display="none";
document.getElementById("searchon").style.display="block";
document.getElementById("body").style.position="absolute";
})

     var slidem1 = document.getElementById("motion");
     var slides1 = document.getElementById("static");
     var hanimate = document.getElementById("h1");
     var hanimate2 = document.getElementById("h2");
     var b1 = document.getElementById("ss1");
     var b2 = document.getElementById("ss2");
     var b3 = document.getElementById("ss3");
     var b4 = document.getElementById("ss4");
     var b5 = document.getElementById("ss5");
     var b6 = document.getElementById("ss6");
     var d1 = document.getElementById("mc1");
     var d2 = document.getElementById("mc2");
     var d3 = document.getElementById("mc3");
     var d4 = document.getElementById("mc4");
     var d5 = document.getElementById("mc5");
     var d6 = document.getElementById("mc6");
     const csscode = document.querySelectorAll(".csscodes2");
     var admotion1 =  document.getElementById("a1");
     var admotion2 =  document.getElementById("a2");
     var admotion8i =  document.getElementById("a8i");
     var admotion8ii =  document.getElementById("a8ii");

    document.getElementById("motion").addEventListener("click", function(){ 
        slidem1.classList.add("motion");
        slides1.classList.add("staticrev");
        slidem1.classList.remove("motionrev");
        slides1.classList.remove("static2");
        hanimate.classList.add("hani2");
        hanimate.classList.remove("hani");
        hanimate2.classList.add("hani2");
        hanimate2.classList.remove("hani");
        b1.classList.add("scroll-boxstyle");
        b2.classList.add("scroll-boxstyle");
        b3.classList.add("scroll-boxstyle");
        b4.classList.add("scroll-boxstyle");
        b5.classList.add("scroll-boxstyle");
        b6.classList.add("scroll-boxstyle");
        d1.classList.add("scroll-boxstyle");
        d2.classList.add("scroll-boxstyle");
        d3.classList.add("scroll-boxstyle");
        d4.classList.add("scroll-boxstyle");
        d5.classList.add("scroll-boxstyle");
        d6.classList.add("scroll-boxstyle");

        csscode.forEach(element => {
               element.style.display = "block";
        })


       admotion1.classList.add("ad1");
       admotion2.classList.add("ad2");
       admotion8i.classList.add("ad8i");
       admotion8ii.classList.add("ad8ii");
    })

    document.getElementById("static").addEventListener("click", function(){ 
        slidem1.classList.remove("motion");
        slides1.classList.remove("staticrev");
        slidem1.classList.add("motionrev");
        slides1.classList.add("static2");
        hanimate.classList.add("hani");
        hanimate.classList.remove("hani2");
        hanimate2.classList.add("hani");
        hanimate2.classList.remove("hani2");
        b1.classList.remove("scroll-boxstyle");
        b2.classList.remove("scroll-boxstyle");
        b3.classList.remove("scroll-boxstyle");
        b4.classList.remove("scroll-boxstyle");
        b5.classList.remove("scroll-boxstyle");
        b6.classList.remove("scroll-boxstyle");
        d1.classList.remove("scroll-boxstyle");
        d2.classList.remove("scroll-boxstyle");
        d3.classList.remove("scroll-boxstyle");
        d4.classList.remove("scroll-boxstyle");
        d5.classList.remove("scroll-boxstyle");
        d6.classList.remove("scroll-boxstyle");

        csscode.forEach(element => {
               element.style.display = "none";
        })
    
        admotion1.classList.remove("ad1");
        admotion2.classList.remove("ad2");
        admotion8i.classList.remove("ad8i");
       admotion8ii.classList.remove("ad8ii");
    })

    //****************************CSS CODES DISPLAY*****************************//
    document.getElementById("ss1").addEventListener("click", function(){
        document.getElementById("c1").style.display = "block";
    })
    document.getElementById("cross1").addEventListener("click", function(){
        document.getElementById("c1").style.display = "none";
    })

    document.getElementById("ss2").addEventListener("click", function(){
        document.getElementById("c2").style.display = "block";
    })
    document.getElementById("cross2").addEventListener("click", function(){
        document.getElementById("c2").style.display = "none";
    })

    document.getElementById("ss3").addEventListener("click", function(){
        document.getElementById("c3").style.display = "block";
    })
    document.getElementById("cross3").addEventListener("click", function(){
        document.getElementById("c3").style.display = "none";
    })

    document.getElementById("ss4").addEventListener("click", function(){
        document.getElementById("c4").style.display = "block";
    })
    document.getElementById("cross4").addEventListener("click", function(){
        document.getElementById("c4").style.display = "none";
    })

    document.getElementById("ss5").addEventListener("click", function(){
        document.getElementById("c5").style.display = "block";
    })
    document.getElementById("cross5").addEventListener("click", function(){
        document.getElementById("c5").style.display = "none";
    })

    document.getElementById("ss6").addEventListener("click", function(){
        document.getElementById("c6").style.display = "block";
    })
    document.getElementById("cross6").addEventListener("click", function(){
        document.getElementById("c6").style.display = "none";
    })

    document.getElementById("mc1").addEventListener("click", function(){
        document.getElementById("c7").style.display = "block";
    })
    document.getElementById("cross7").addEventListener("click", function(){
        document.getElementById("c7").style.display = "none";
    })

    document.getElementById("mc2").addEventListener("click", function(){
        document.getElementById("c8").style.display = "block";
    })
    document.getElementById("cross8").addEventListener("click", function(){
        document.getElementById("c8").style.display = "none";
    })

    document.getElementById("mc3").addEventListener("click", function(){
        document.getElementById("c9").style.display = "block";
    })
    document.getElementById("cross9").addEventListener("click", function(){
        document.getElementById("c9").style.display = "none";
    })

    document.getElementById("mc4").addEventListener("click", function(){
        document.getElementById("c10").style.display = "block";
    })
    document.getElementById("cross10").addEventListener("click", function(){
        document.getElementById("c10").style.display = "none";
    })

    document.getElementById("mc5").addEventListener("click", function(){
        document.getElementById("c11").style.display = "block";
    })
    document.getElementById("cross11").addEventListener("click", function(){
        document.getElementById("c11").style.display = "none";
    })

    document.getElementById("mc6").addEventListener("click", function(){
        document.getElementById("c12").style.display = "block";
    })
    document.getElementById("cross12").addEventListener("click", function(){
        document.getElementById("c12").style.display = "none";
    })

    //**************************** CSS CODES DISPLAY OF ALL *****************************
    document.getElementById("s1").addEventListener("click", function(){
        document.getElementById("c1").style.display = "block";
    })

    document.getElementById("s2").addEventListener("click", function(){
        document.getElementById("c3").style.display = "block";
    })

    document.getElementById("s3").addEventListener("click", function(){
        document.getElementById("c4").style.display = "block";
    })

    document.getElementById("s4").addEventListener("click", function(){
        document.getElementById("c5").style.display = "block";
    })

    document.getElementById("s5").addEventListener("click", function(){
        document.getElementById("c6").style.display = "block";
    })

    document.getElementById("s6").addEventListener("click", function(){
        document.getElementById("c7").style.display = "block";
    })

    document.getElementById("s7").addEventListener("click", function(){
        document.getElementById("c9").style.display = "block";
    })

    document.getElementById("s8").addEventListener("click", function(){
        document.getElementById("c10").style.display = "block";
    })

    document.getElementById("s9").addEventListener("click", function(){
        document.getElementById("c11").style.display = "block";
    })

    document.getElementById("s10").addEventListener("click", function(){
        document.getElementById("c12").style.display = "block";
    })

    document.getElementById("s11").addEventListener("click", function(){
        document.getElementById("c13").style.display = "block";
    })
    document.getElementById("cross13").addEventListener("click", function(){
        document.getElementById("c13").style.display = "none";
    })

    document.getElementById("s12").addEventListener("click", function(){
        document.getElementById("c14").style.display = "block";
    })
    document.getElementById("cross14").addEventListener("click", function(){
        document.getElementById("c14").style.display = "none";
    })

    document.getElementById("s13").addEventListener("click", function(){
        document.getElementById("c15").style.display = "block";
    })
    document.getElementById("cross15").addEventListener("click", function(){
        document.getElementById("c15").style.display = "none";
    })

    document.getElementById("s14").addEventListener("click", function(){
        document.getElementById("c16").style.display = "block";
    })
    document.getElementById("cross16").addEventListener("click", function(){
        document.getElementById("c16").style.display = "none";
    })

    document.getElementById("s15").addEventListener("click", function(){
        document.getElementById("c17").style.display = "block";
    })
    document.getElementById("cross17").addEventListener("click", function(){
        document.getElementById("c17").style.display = "none";
    })

    document.getElementById("s16").addEventListener("click", function(){
        document.getElementById("c18").style.display = "block";
    })
    document.getElementById("cross18").addEventListener("click", function(){
        document.getElementById("c18").style.display = "none";
    })

    document.getElementById("s17").addEventListener("click", function(){
        document.getElementById("c19").style.display = "block";
    })
    document.getElementById("cross19").addEventListener("click", function(){
        document.getElementById("c19").style.display = "none";
    })
