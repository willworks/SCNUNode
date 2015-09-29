/** 
    Document   : SCNUNode
    Created on : 2015.10
    Author     : Kevin Zhong
    License    : MIT
    github     : https://github.com/willworks/SCNUNode/ 
    Description: A Node Spider of SCNU Web-Based Education Management System
    Copyright (c) 2015 Kevin Zhong
*/

var http = require("http"), // node http模块引入
    cheerio = require("cheerio"), // 在服务端使用jQuery..
    superagent = require("superagent"),// 简化版ajax api
    // 访问请求配置
    reqGet = {  
        host: 'stackoverflow.com',
        path: '/',
        method: 'GET',
        headers: {
            'Accept': 'text/html'
        }
    },
    data = "";

// 发起请求
request
  .post('/api/pet')
  .send({ name: 'Manny', species: 'cat' })
  .set('X-API-Key', 'foobar')
  .set('Accept', 'application/json')
  .end(function(err, res){
    // Calling the end function will send the request
  });
// PS:node属于C/S通讯，不是B/S，故这种请求，可以跨域
var req = http.request(reqGet, function(res){
    // 设置显示编码
    res.setEncoding("utf8");
    // chunk指的是服务器数据的返回是一段一段的，这个和TCP滑动窗口协议有关，需要使用data串接起来，参照buffer
    res.on('data', function(chunk){
        data += chunk;
    });
    // 响应完毕时间出发，输出返回的全部内容
    res.on('end', function(){
        var $ = cheerio.load(data);
        var items = [];
        $('#question-mini-list .question-summary').each(function (idx, element) {
            var $element = $(element).find('.summary').children().eq(0).find('a');
            //console.log($element.attr('href'));
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });
        console.log(items);
    });
});

// 结束请求
req.end();