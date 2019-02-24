


function display(){

  let x = document.getElementsByClassName("hidden")[0].style.display = 'block';
  display(x);

}



/*about toggle*/
function toggleabout() {
  let x = document.getElementById("about-us");
  let y = document.getElementById("services");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = 'none'
    document.getElementById('about-btn').innerHTML = 'Read Less &raquo';
    document.getElementById('service-btn').innerHTML = 'View Services &raquo';
  } else {
    x.style.display = "none";
    document.getElementById('about-btn').innerHTML = 'Read More &raquo';
  }
}

function toggleservices() {
  let y = document.getElementById("about-us");
  let x = document.getElementById("services");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    document.getElementById('service-btn').innerHTML = 'View Less &raquo';
    document.getElementById('about-btn').innerHTML = 'Read More &raquo';
  } else {
    x.style.display = "none";
    document.getElementById('service-btn').innerHTML = 'View Services &raquo';
  }
}





/*scroll*/

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '.row'
})
.setClassToggle('.ft-1','show')
.addTo(controller);
