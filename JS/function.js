$(document).ready(function(){
  $("img").click(function(){
  var t = $(this).attr("src");
  $(".img-gal").html("<img src='"+t+"' class='modal-img'>");
  $("#myModal").modal();
});

$("video").click(function(){
  var v = $("video > source");
  var t = v.attr("src");
  $(".img-gal").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
  $("#myModal").modal();
});
});//EOF Document.ready



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
.setClassToggle('.row','show')
.addTo(controller);
