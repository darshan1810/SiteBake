data/extra.js
================
The expected structure of extra.js is described below:  
  
All fields in the below configuration object are Optional.  
  
```javascript
var _contact = {
    // Array representing all the phone numbers
    "phones": [
        {
            // Title for the number
            "name": "Personal",
            
            // The actual phone number
            "number": "+1 (123) 345 6789"
        },
        
        // The above structure can be repeated multiple times
        {
            "name": "Work",
            "number": "+1 (987) 654 3210"
        }
    ],
    
    // Array representing all the email IDs
    "emails": [
        {
            // Title for the email ID
            "name": "Personal",
            
            // Actual email ID
            "email": "johndoe@example.com"
        },
        
        // The above structure can be repeated multiple times
        {
            "name": "Academic",
            "email": "johndoe@university.edu"
        },
        {
            "name": "Work",
            "email": "johndoe@office.com"
        }
    ],
    
    // Set of all homepages, websites
    "websites": [
        {
            // Title of the website
            "name": "Personal homepage",
            
            // Http/Https link of the website
            "link": "http://www.johndoe.com"
        },
        
        // The above structure can be repeated multiple times
        {
            "name": "Portfolio",
            "link": "http://www.johndoe.com/portfolio"
        }
    ],
    
    // Object representing address of the person
    "address": {
        // Name of the person
        "name": "John Doe",
        
        // 2 lines of address
        "line1": "123 Park Avenue #500",
        "line2": "Sunset blvd",
        
        // City
        "city": "Los Angeles",
        
        // State
        "state": "CA",
        
        // Country
        "country": "USA",
        
        // Some configuration options
        "options": {
            "show_country": false
        }
    }
};
```
  
[Back to README.md](../README.md)