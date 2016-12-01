function searchSpotify(){
	var search = document.getElementById("search").value;
	search = search.split(' ').join('%20');
	chrome.tabs.create({active: true, url: "https://play.spotify.com/search/"+search});
}

function searchYouTube(){
	var search = document.getElementById("search").value;
	search = search.split(' ').join('+');
	chrome.tabs.create({active: true, url: "https://www.youtube.com/results?search_query="+search});
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
	
	link = document.getElementById('air');
	// onClick's logic below:
    link.addEventListener('click', function() {
        chrome.tabs.create({active: true, url: "http://www.airbornz.com"});
    });
});