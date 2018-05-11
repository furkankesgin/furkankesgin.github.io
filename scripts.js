$(window).on('scroll',function () {
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }

})

JsBarcode("#barcode", "1234", {
    format: "pharmacode",
    lineColor: "#0aa",
    width: 4,
    height: 40,
    displayValue: false
});






$( ".cyber" ).hover(
    function() {
        $( "#hidden" ).append( $( "<span><p class='faded wow slideInRight'> &emsp; &emsp; &emsp; &emsp;Our world today is ruled by technology and " +
            "we can’t do without it at all. From booking our flight tickets, to catching up with an old friend," +
            " technology plays an important role in it. However, the same technology may betray you when it’s" +
            " vulnerable and could lead to loss of essential data. Cyber security, alongside physical commercial" +
            " security has thus, slowly and steadily, become one of the most important topics in the business" +
            " industry to be talked about. How many of your friends in the past few years have been scammed by" +
            " the phishing mails, phone calls, and in many other ways?  <br> &emsp; &emsp; &emsp; &emsp;Over the past few years, cyber-attacks " +
            "have gone high in number and more powerful in their nature. So much so that big giants like Target" +
            " and Home Depot compromised their customer’s credit card information due to an attack. It has indeed " +
            "become an everyday news for us when someone’s bank account is drained by some criminal resulting " +
            "them in losing all their money. The global economy suffers a loss of US $400 billion every year " +
            "due to cybercrimes which is why it is important that they must be discussed right now. The cyber" +
            " security is not a subject to be taken lightly any more, be it an individual or a corporation, " +
            "the times are crucial for everyone.</p>\n</span>" ) );
    }, function() {
        $( "#hidden" ).find( "span:last" ).remove();
    }
);

$( "#hidden.faded" ).hover(function() {
    $( "#hidden" ).fadeOut( 30000 );
    $( "#hidden" ).fadeIn( 20000 );})





$( ".vps" ).hover(
    function() {
        $( "#hidden" ).append( $( "<span><p class='faded wow slideInRight'>&emsp; &emsp; &emsp; &emsp;Shared web hosting will soon be a thing of the past. With many hosting companies overselling their servers and piling on as many as thousands of customers on to the same web server, the reliability of their services will soon diminish.\n" +
            "\n" +
            "When hosting on a shared server, your website’s uptime and performance can be impacted by other websites on the same server. What this means is that if your web server happens to also host a 12 year old wanna-be programmer that happens to crash the server, your website will suffer from this as well.\n" +
            "\n" +
            "It’s important to ask yourself if you are willing to take those kinds of risks with your websites, especially if it is used primarily for business.\n" +
            "\n</p>\n</span>" ) );
    }, function() {
        $( "#hidden" ).find( "span:last" ).remove();
    }
);

$( "#hidden.faded" ).hover(function() {
    $( "#hidden" ).fadeOut( 30000 );
    $( "#hidden" ).fadeIn( 20000 );})


