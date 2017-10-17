// Copyright (c) 2017 Marc Juarez. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

var CENSORED = 'https://www.pinterest.com/';
var CDN = 'https://a248.e.akamai.net/';


// Helper. Return the domain from a URL.
var getDomain = function(url) {
  var link = document.createElement('a');
  link.setAttribute('href', url);
  return link.hostname;
}


// Set the host name of CDN requests to the censored domain. 
chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
  details.requestHeaders.push({
    name: 'Host',
    value: getDomain(CENSORED)
  });
  return {requestHeaders: details.requestHeaders};
},
{urls: [CDN]},
["blocking", "requestHeaders"]);


// Intercept requests to the censored page and redirect them to CDN.
chrome.webRequest.onBeforeRequest.addListener(function (details) {
  return { redirectUrl: CDN };
},
{urls: [CENSORED]},
['blocking']);
