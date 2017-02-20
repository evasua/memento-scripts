function Discogs (apiKey , apiSecret, type) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.type = type;
}

Discogs.prototype.search = function(query) {
  var result = http().get("https://api.discogs.com/database/search?q=" + encodeURIComponent(query) + "&key=" + this.apiKey + "&secret=" + this.apiSecret + "&type=" + this.type);
  var json = JSON.parse(result.body);
  return json.results;  
}

Discogs.prototype.barcode = function(code) {
  var result = http().get("https://api.discogs.com/database/search?barcode=" + encodeURIComponent(code) + "&key=" + this.apiKey + "&secret=" + this.apiSecret + "&type=" + this.type);
  var json = JSON.parse(result.body);
  return json.results;  
}

Discogs.prototype.extra = function(id) {
     var resultJson = http().get("https://api.discogs.com/" + this.type + "s/" + id + "?key=" + this.apiKey + "&secret=" + this.apiSecret);
     var result = JSON.parse(resultJson.body); 
    result['images'] =    
        result.images.map(function(e) { return e.uri; }).join(); 
    result['videos'] =    
        result.videos.map(function(e) { return e.uri; }).join();     
    result['artists'] =    
        result.artists.map(function(e) { return e.name; }).join();   
   result['tracklist'] =    
        result.tracklist.map(function(e) { return e.position + ". " + e.title + " " + e.duration; }).join("\n");     
    result['styles'] =    
        result.styles.join();     
    result['genres'] =    
        result.genres.join();        
    return result;
}

