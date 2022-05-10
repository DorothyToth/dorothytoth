
    console.log("is this working??");

    console.log("Yes it is!!");



$(document).ready(function(){

  // $("div").on('click', function () {
  //   var idName = '#' + $(this).attr('id');
  //   if (idName == '#travel') {
  //     window.open("files/CS-GoTogether-Mobile-App.pdf", '_blank');
  //   }
  //   else if (idName == '#final') {
  //     window.open("#", '_blank');
  //   }
  //   else if (idName == '#education') {
  //     window.open('files/CS-Dept-of-Ed-Website-Redesign.pdf', '_blank');
  //   }
  //   else if (idName == '#garden') {
  //     window.open("files/CS-Horticare-Garden-Care-Mobile-App.pdf", '_blank');
  //   }
  //   else if (idName == '#health') {
  //     window.open("files/CS-SCFMN-Website-Redesign.pdf", '_blank');
  //   }
  //   else if (idName == '#food') {
  //     window.open("#", '_blank');
  //   }
  //   if (acceptableInput) {
  //     scrollLocation(idName);
  //   }
  // })

    // Add smooth scrolling to all links
    $(".navLink").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  