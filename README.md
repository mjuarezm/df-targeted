![DISCLAIMER](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dialog-warning-orange.svg/40px-Dialog-warning-orange.svg.png "experimental")  **experimental - PLEASE BE CAREFUL. Intended for reasearch purposes.**

# df-targeted

This is a minimal chrome extension that shows how to use domain fronting for a specific website. The default values define Akamai as CDN and pinterest.com as the censored page.

Once you install the extension, whenever you visit https://www.pinterest.com, the extension will intercept the HTTP request and redirect it to https://a248.e.akamai.net. This will make the browser set the SNI to a248.e.akamai.net and then the extension will intercept the redirected request to Akamai and set the Host header to www.pinterest.com. The censor will only see a TLS connection to Akamai but the host will be encrypted in the payload. Akamai will decrypt and re-direct (reflect) to pinterest's host.

In principle, this will work with other reflectors. You can set the CDN variable in background.js to any other CDN (see https://trac.torproject.org/projects/tor/wiki/doc/meek) and the CENSORED variable to a page hosted behing *that* CDN.
