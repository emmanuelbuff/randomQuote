$(document).ready(function(){
  var tweetButton;
  $('#load').click(function(){
    $('#load').text('Fetching...');
        $.ajax({
  cache: false,
  type: "GET",
  url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
  success:function(data){
     $('#ajax').html( "<p>" + data[0].content +  "<p>-" + data[0].title + "</p>");
            $('#load').text('Get another random quote');
    tweetButton = 'https://twitter.com/intent/tweet?text=' + "\"" + data[0].content + "\"" + ' Author: ' + data[0].title ;
      $('#tweet').attr("href", tweetButton);
}
  });
});
});
