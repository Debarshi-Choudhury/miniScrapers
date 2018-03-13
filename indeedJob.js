var express =require('express');
var path =require('path');
var cheerio=require('cheerio');
var request=require('request');
var fs=require('fs');

var app=express();
var port=8000;

//https://www.indeed.co.in/cmp/Infosys/jobs
var url="https://www.indeed.co.in/viewjob?jk=5d7b6052d18dfa19&tk=1c8ck1nvs931mcf7&from=serp&alid=3&advn=357631224894577";

request(url,(err,resp,body)=>{

	var $=cheerio.load(body);
	var companyName=$('.company');
	var companyNameText=companyName.text();
	
	var jobTitle=$('.jobtitle font');
	var jobTitleText=jobTitle.text();

	var jobSummary=$('#job_summary');
	var jobSummaryText=jobSummary.text();

	var job={
		companyName:companyNameText,
		jobTitle:jobTitleText,
		jobSummary:jobSummaryText
	}

	//console.log(job);

	console.log('Company Name:\n ',job.companyName);
	console.log('Job Title:\n ',job.jobTitle);
	console.log('Summary:\n ',job.jobSummary);
	
})

app.listen(port);
console.log('server is running on ',port);

