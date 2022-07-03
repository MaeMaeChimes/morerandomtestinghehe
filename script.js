function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

		var colors = [
			'#490A3D',
			'#BD1550',
			'#E97F02',
			'#F8CA00',
			'#8A9B0F',
			'#69D2E7',
			'#FA6900',
			'#16a085',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#77B1A9',
			'#73A857'
		];

var quotes = [
	"I alone hold the truth of who I am.", 
	"I am allowed to ask for what I want and what I need.",
	"I am allowed to feel good.",
	"I am capable of balancing ease and effort in my life.",
	"I am good and getting better.",
	"I am growing and I am going at my own pace.",
	"I am in charge of how I feel and I choose to feel happy.",
	"I am loved and worthy.",
	"I am more than my circumstances dictate.",
	"I am held and supported by those who love me.",
	"I am open to healing.",
	"I am optimistic because today is a new day.",
	"I am proof enough of who I am and what I deserve.",
	"I am safe and surrounded by love and support.",
	"I am still learning so it’s okay to make mistakes.",
	"I am understood and my perspective is important.",
	"I am valued and helpful.",
	"I belong here, and I deserve to take up space.",
	"I can be soft in my heart and firm in my boundaries.",
	"I breathe in trust, I exhale doubt.",
	"I breathe in healing, I exhale the painful things that burden my heart.",
	"I can control how I respond to things that are confronting.",
	"I can hold two opposing feelings at once. It means I am processing.",
	"I celebrate the good qualities in others and myself.",
	"I deserve self-respect and a clean space.",
	"I do not have to linger in dark places; there is help for me here.",
	"I embrace change seamlessly and rise to the new opportunity it presents.",
	"I have come farther than I would have ever thought possible, and I'm learning along the way.",
	"I have everything I need to succeed.",
	"I hold wisdom beyond knowledge.",
	"I let go of the things that sit achingly out of reach.",
	"I look forward to tomorrow and the opportunities that await me.",
	"I make time to experience grief and sadness when necessary.",
	"I nourish myself with kind words and joyful foods.",
	"I practice gratitude for all that I have, and all that is yet to come.",
	"I release the fears that do not serve me.",
	"I strive for joy, not for perfection.",
	"I welcome the wisdom that comes with growing older.",
	"I welcome what is, I welcome what comes.",
	"I will allow myself to evolve.",
	"Letting go creates space for opportunities to come.",
	"My body is beautiful in this moment and at its current size.",
	"My feelings deserve names, deserve recognition, deserve to be felt.",
	"My heart knows its own way.",
	"My heart is open to helpfulness from myself and from others.",
	"My life is not a race or competition.",
	"My perspective is unique and important.",
	"My sensitivity is beautiful, and my feelings and emotions are valid.",
	"Saying “no” is an act of self-affirmation, too.",
	"Sometimes the work is resting.",
	"There is something in this world that only I can do. That is why I am here.",
	"Today is an opportunity to grow and learn.",
	"When I forgive myself, I free myself.",
	"When I feel fear, I feed trust.",
	"When I speak my needs, I receive them abundantly.",
	"When I talk to myself as I would a friend, I see all my best qualities and I allow myself to shine.",
	"When I release shame, I move into myself more beautifully."
	];


var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote];
    // currentAuthor = quotes[randomquote][1];

	$(document).ready(function () {
		$('html body').animate({
		// backgroundColor: colors[randomcolor],
		color: colors[randomcolor]
		}, 500);
	    $('#newquote, .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
			$('blockquote footer').animate({ color: colors[randomcolor] }, 500);	
	    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentAuthor);
	    });
    });    
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);
    $('#tweetquote').on('click', function () {
        if (!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }
    });
});
