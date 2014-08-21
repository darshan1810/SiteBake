data/webpresence.js
======================
The expected structure of webpresence.js is described below:  
  
```javascript
var _webpresence = {

    // Links to 6 predefined sites with in-bilt logos
    // Optional
    // Keeping any site empty or omitting the field will remove it from 
    // the listing.
    "facebook": "http://facebook.com/example",
    "googleplus": "http://plus.google.com/+example",
    "linkedin": "http://in.linkedin.com/example",
    "twitter": "http://twitter.com/example",
    "github": "http://github.com/example",
    "quora": "http://quora.com/example",
    
    // Custom sites of the user's choosing
    "custom": [
        {
            // Title to be displayed (Optional, if logo is defined)
            "title": "Custom Site",
            
            // Link to site (Compulsary field)
            "link": "http://example.com",
            
            // Logo of the site (Optional. If missing, a generic logo will 
            // be used)
            "logo": "./data/logos/custom_logo.gif"
        },
        
        // The above structure can be repeated multiple times
        {
            "title": "Custom Site 2",
            "link": "http://example.com"
        }
    ]
};
```
  
[Back to README.md](../README.md)