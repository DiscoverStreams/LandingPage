import Vue from 'vue';

export const sidenavToggle = {
  $('#sidenav-toggle').on('click', function() {
    var $sidenav, $this;
    $this = $(this);
    $sidenav = $('.ct-sidenav');
    if ($this.hasClass('open')) {
      $this.removeClass('open');
      return $sidenav.removeClass('open');
    } else {
      $this.addClass('open');
      return $sidenav.addClass('open');
    }
  })
 
}

export const buttonClose ={
  $('.ct-sidenav').find('button.close').on('click', function() {
    $(this).parent().removeClass('open');
    return $('#sidenav-toggle').removeClass('open');
  })
}