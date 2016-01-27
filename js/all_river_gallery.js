   $(document).ready(function() {
   $(".cloudcarousel").click(function() {
     var pictureID = this.id;
     $("body").css('background-image', 'url(images/' + pictureID + '.jpg)');
   });
 });
$("#gallery").click(function() {
   $("#carousel").toggle("fade");
 });
 