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

Discogs.prototype.extra = function(id) {
    message("selected id :" + id);
     var resultJson = http().get("https://api.discogs.com/" + this.type + "s/" + id + "?key=" + this.apiKey + "&secret=" + this.apiSecret);
     var result = JSON.parse(resultJson.body); 
 
    result['images'] =    
        result.map(function(e) { return e.uri; }).join(); 
     
    return result;
}

