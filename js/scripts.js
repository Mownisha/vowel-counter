var counter = function(str) {
  var c=0;
  for( var i=0; i<str.length; i=i+1 ) {

    if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"||str[i]==="A"||str[i]==="E"||str[i]==="I"||str[i]==="O"||str[i]==="U") {
      c+=1;
    }

  }
  return c;
};

$(document).ready(function() {
  $("form#vowel").submit(function(event) {
    event.preventDefault();
    var str=$("input#string").val();
    var count=counter(str);
    $(".string").text(count);
    $("#result1").show();

  });
});
