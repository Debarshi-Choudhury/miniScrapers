

var express=require('express');
var path=require('path');
var app=express();
var request=require('request');
var cheerio=require('cheerio');
var fs=require('fs');
var port=8080;


var url='http://www.imdb.com/title/tt1229340/';

request(url,(err,resp,body)=>{
	
	var hold={};
	var $=cheerio.load(body);

	var title=$(".title_wrapper h1").text();
	var releaseYear=$("#titleYear a").text();
	//var communityRating=$(".ratingValue strong span").text();
	var communityRating=$("span[itemprop='ratingValue']").text();

	var hold={
		title,
		releaseYear,
		communityRating,
		url
	};
	console.log("scraped:\n ",hold);
});


app.listen(port,()=>{
	console.log('running server on port',port);
});