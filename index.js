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
var http = require("http"), // node http模块引入
    cheerio = require("cheerio"), // 在服务端使用jQuery..
    superagent = require("superagent");// 简化版ajax api

request
    .post('/api/pet')
    .send({ name: 'Manny', species: 'cat' })
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end(function(err, res){
    // Calling the end function will send the request
        if(err){
            console.log(err);
        }else{
            console.log(res);
        }
});