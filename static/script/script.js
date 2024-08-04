

function changeMenu(x) {
    x.classList.toggle("change");
}

$(document).ready(function(){
    $("#burgerIcon").click(function(){
        $("#navContainer").slideToggle(400);
    });
});

function setupTypedReplace() {
    // the text node to type in
    var typed_class = 'typed-replaced';
  
    // the original text content to replace, but also use
    var replace_text = 'Software developer';
  
    var options = {
      strings: ['Data scientist', 'Teacher', 'Athlete', replace_text], // existing text goes at the end
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
      smartBackspace: false,
      cursorChar: '|',
      attr: null
    };
  
    // clear out the existing text gracefully then setup the loop
    new Typed('.' + typed_class, {
      strings: [replace_text, ''],
      backSpeed: options.backSpeed,
      backDelay: options.backDelay,
      cursorChar: options.cursorChar,
      attr: options.attr,
      startDelay: 700,
      onComplete: function (t) {
        // existing text has now been removed so let's actually clear everything out
        // and setup the proper Typed loop we want. If we don't do this, the original
        // text content breaks the flow of the loop.
        t.destroy();
        document.getElementsByClassName(typed_class)[0].textContent = '';
        new Typed('.' + typed_class, options);
      }
    });
  }
  
  setupTypedReplace();