/** 
    Document   : SCNUNode
    Created on : 2015.10
    Author     : Kevin Zhong
    License    : MIT
    github     : https://github.com/willworks/SCNUNode/ 
    Description: A Node Spider of SCNU Web-Based Education Management System
    Copyright (c) 2015 Kevin Zhong
*/

/**
 * superagent插件
 *
 * superagent-no-cache - prevents caching by including Cache-Control header
 * superagent-prefix - prefixes absolute URLs (useful in test environment)
 * superagent-mock - simulate HTTP calls by returning data fixtures based on the requested URL
 * superagent-mocker — simulate REST API
 * superagent-cache - superagent with built-in, flexible caching
 * 
 */

 /**
  * 教务处验证码接口：http://jwc.scnu.edu.cn/CheckCode.aspx
  */

var http = require("http"), // node http模块引入
    cheerio = require("cheerio"), // 在服务端使用jQuery..
    superagent = require("superagent"),// 简化版ajax api
    fs = require("fs");

superagent
    .post('http://jwc.scnu.edu.cn/access_token')
    .send({
    	__VIEWSTATE:'dDwyODE2NTM0OTg7Oz4W5FwUsee1KqGNW4fFCJkBIcFXCQ==',
    	txtUserName:'20122100012',
    	TextBox2:'kobe6690568zhj@',
    	txtSecretCode:'xya7'
    })
    //.set('X-API-Key', 'foobar')
    .set('Content-type','application/x-www-form-urlencoded')
    .set('Accept', 'application/json')
    .end(function(err, res){
    // Calling the end function will send the request
        if(err){
            console.log(err);
        }else{
            //console.log(JSON.parse(res.text).info);
            console.log(res.text);
            // 文件写入操作
            fs.open('data/res.html', 'a', 0644, function(err,fd){
            	if (err) {
            		throw err;
            	}
            	else{
            		fs.write(fd, res.text, function(err){
            			if (err){
            				throw err;
            			}
            		});
            	}
            });
        }
});