$('.owl-carousel').owlCarousel({
    loop:true,
    margin:90,
    responsiveClass:true,
    
    
    
    responsive:{
        0:{
            items:3,
            
            loop:true
        },
        600:{
            items:3,
            
            loop:true
        },
        1000:{
            items:5,
            
            loop:true
        }
    }
})


var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
