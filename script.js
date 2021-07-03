$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(0).fadeOut(); 
    $('body').delay(0).css({'overflow': 'visible'});
  })

function sortear(){

    let res = parseInt(Math.random() * 2)
    console.log(res)

    if (res === 0) {
        window.open('cara-wins.html')
        
    } else {
        window.open('coroa-wins.html')
    }

}

