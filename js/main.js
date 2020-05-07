function main(){
  skip();
  banner();
  popcookie();
  login();
  sitemap();
  subPosition();
  $(window).resize(function(){
    subPosition();
  });

  // swiper
  var swiper = new Swiper('.swiper-container',{
    slidesPerView:3.9,
    spaceBetween:40,
    loop:true,
    autoplay:{
      delay:3000,
      speed:300,
    }
  });

  $('.git_hub').click(function(){
    location.href='https://github.com/eun210818/megabox';
  });

  var cnt=0;
  $('#prev').click(function(){
    if(cnt>0){
      cnt--;
    }else{
      cnt=3;
    }
    userSlide(cnt);
  });
  $('#next').click(function(){
    if(cnt<3){
      cnt++;
    }else{
      cnt=0;
    }
    userSlide(cnt);
  });
}