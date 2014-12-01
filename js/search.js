// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) 
{
    var responseString = JSON.stringify(response, '', 2);
    var nodeObject = JSON.parse(responseString);
    console.log(nodeObject);
    var test = nodeObject.items[0];
    console.log(test);

}
{
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyAon54hwMdhITRKwPtc4-peI2LclwI5pR4');

    search();
}

function search() {
    var request = gapi.client.youtube.search.list({
        part: 'snippet',   
        q: ''
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
    console.log(response);
}
{
console.log("hello world");
}

