function rendersearchbar(h, barheight, barwidth) {
  $('.searchwrap').remove();
  var winwidth = window.innerWidth;
  var winheight = window.innerHeight;
  
  var height = barheight;
  var width = barwidth;
  if(!height) height = 40;
  if(!width) width = winwidth;
  
  
  var wrap = $('<div class="searchwrap"></div>');
  var form = $('<form class="searchform" method="get" action="search"><div class="search"></div></form>');
  $(wrap).append(form);
  $('body').append(wrap);
  $('.searchwrap')
    .css('top', winheight * h + 'px')
    .css('max-height', height + 'px')
    .css('width', width + 'px')
    .css('overflow', 'hidden');

  var label = $('<label></label>');
  label
    .css('height', height - 8 + 'px')
    .css('width', height - 8 + 'px')
    .css('background-size', (height-8-10) + 'px ' + (height-8-10) + 'px')
    .css('background-position', '4px 6px')
    .attr('id', 'searchbox_label')
    .attr('for', 'searchbox');
    
  var input = $('<input></input>');
  input
    .attr('id', 'searchbox')
    .attr('placeholder', 'Search')
    .attr('name', 'q')
    .attr('type', 'search');
  
  $('.search')
    .css('height', height + 'px')
    .css('padding', '4px ' + width * 0.1 + 'px')
    .append(label)
    .append(input)
    .append('<div class="clear"></div>');
    
  $('#searchbox')
    .css('padding-top', '5px')
    .css('width', ($('.search').width() - $('#searchbox_label').width()) + 'px');
}