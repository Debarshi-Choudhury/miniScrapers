var express =require('express');
var path =require('path');
var cheerio=require('cheerio');
var request=require('request');
var fs=require('fs');

var app=express();
var port=8000;

//https://www.indeed.co.in/cmp/Infosys/jobs
var url="https://careers.infosys.com/CareerSite/Aspx/JobsToWeb/JobDescriptionDetail.aspx?Postingguid=0017A477001A1ED785A2E7466D9E9458&LoginType=IL";

request(url,(err,resp,body)=>{

	var $=cheerio.load(body);
	var companyName=$('#ContentPlaceHolder1_lblCompany');
	var companyNameText=companyName.text();
	
	var jobTitle=$('#ContentPlaceHolder1_JobTitle');
	var jobTitleText=jobTitle.text();

	var location=$('#ContentPlaceHolder1_lblPrimaryLocation');
	var locationText=location.text();

	var role=$('#ContentPlaceHolder1_lblRole');
	var roleText=role.text();

	var requirement=$('#ContentPlaceHolder1_lblRequirements');
	var requirementText=requirement.text();

	var responsibility=$('#ContentPlaceHolder1_lblResponsiblities');
	var responsibilityText=responsibility.text();

	var job={
		companyName:companyNameText,
		jobTitle:jobTitleText,
		location:locationText,
		role:roleText,
		requirement:requirementText,
		responsibility:responsibilityText
	}

	//console.log(job);

	console.log('Company Name:\n ',job.companyName);
	console.log('Job Title:\n ',job.jobTitle);
	console.log('Location:\n ',job.location);
	console.log('Role:\n ',job.role);
	console.log('Requirements and Responsibilities:\n ',job.requirement),job.responsibility;

})

app.listen(port);
console.log('server is running on ',port);

