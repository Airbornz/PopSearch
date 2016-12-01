function searchSpotify(){
	var search = document.getElementById("search").value;
	search = search.split(' ').join('%20');
	chrome.tabs.create({active: true, url: "https://play.spotify.com/search/"+search});
}

function searchTwitter(){
	var search = document.getElementById("search").value;
	search = search.split(' ').join('%20');
	chrome.tabs.create({active: true, url: "https://twitter.com/search?q="+search});
}

function searchYouTube(){
	var search = document.getElementById("search").value;
	search = search.split(' ').join('+');
	chrome.tabs.create({active: true, url: "https://www.youtube.com/results?search_query="+search});
}

function searchWikipedia(){
	var search = document.getElementById("search").value;
	search = search.split(' ').join('+');
	chrome.tabs.create({active: true, url: "https://en.wikipedia.org/wiki/Special:Search?search="+search});
}

function searchDictionary(){
	var search = document.getElementById("search").value;
	search = search.split(' ').join('%20');
	chrome.tabs.create({active: true, url: "http://www.dictionary.com/browse/"+search});
}

function searchSoundCloud(){
	var search = document.getElementById("search").value;
	search = search.split(' ').join('%20');
	chrome.tabs.create({active: true, url: "https://soundcloud.com/search?q="+search});
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('spt');
    // onClick's logic below:
    link.addEventListener('click', function() {
        searchSpotify();
    });
	
	link = document.getElementById('yt');
	// onClick's logic below:
    link.addEventListener('click', function() {
        searchYouTube();
    });
	
	link = document.getElementById('twit');
	// onClick's logic below:
    link.addEventListener('click', function() {
        searchTwitter();
    });
	
	link = document.getElementById('wiki');
	// onClick's logic below:
    link.addEventListener('click', function() {
        searchWikipedia();
    });
	
	link = document.getElementById('dic');
	// onClick's logic below:
    link.addEventListener('click', function() {
        searchDictionary();
    });
	
	link = document.getElementById('cloud');
	// onClick's logic below:
    link.addEventListener('click', function() {
        searchSoundCloud();
    });
	
	link = document.getElementById('air');
	// onClick's logic below:
    link.addEventListener('click', function() {
        chrome.tabs.create({active: true, url: "http://www.airbornz.com"});
    });
});