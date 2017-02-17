function Discogs (apiKey , apiSecret) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
}

Discogs.prototype.search = function(type , query) {
  var result = http().get("https://api.discogs.com/database/search?q=" + query + "&key=" + this.apiKey + "&secret=" + this.apiSecret + "&type=" + type);
  var json = JSON.parse(result.body);
  return json.results;  
}


