//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_imageinfo.py

    MediaWiki Action API Code Samples
    Demo of `Imageinfo` module: Get information about an image file.

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    format: "json",
    prop: "imageinfo",
    titles: "File:Billy Tipton.jpg"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});
