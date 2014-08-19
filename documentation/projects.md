data/projects.js
================
The expected structure of projects.js is described below:  
  
```javascript
var _projects = {
    // An array with each object representing one project
    "projects": [
        {
            // Name of the project (Compulsary field)
            "name": "Very Awesome Project",
            
            // Tagline for project (Optional)
            "tagline": "A simple homepge generator",
            
            // Description paragraph (Optional)
            /* It is defined in the form as an array for each paragraph each obect
            in array consists of 2 fields "type" followed by either "text" or "points".
            Thier usage is demonstrated below.
            "type": "para" is used for a regular paragraph
            "type": "bullets" is used for a unordered list
            */
            "description": [
                {
                    "type": "para",
                    "text": "Mauris tempus purus accumsan magna porta dapibus. Phasellus in sapien vel sapien tincidunt mattis. Cras mattis tristique tellus, sit amet pulvinar neque feugiat vel. Sed adipiscing lobortis fringilla. Nullam facilisis magna ac dolor vulputate, non sodales nulla aliquet. Vivamus magna libero, euismod eget ligula non, egestas dictum tortor. Vivamus tempus lobortis turpis sed tempor."
                },
                {
                    "type": "bullets",
                    "points": [
                        "orem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sollicitudin ante, vitae pellentesque orci.",
                        "Mauris tempus purus accumsan magna porta dapibus. Phasellus in sapien vel sapien tincidunt mattis.",
                        "Vivamus ultrices leo quis adipiscing rhoncus. Suspendisse sit amet sollicitudin velit, in pretium orci."
                    ]
                }
            ],
            
            // Duration of the project (Optional)
            "duration": "July, 2014 - Present",
            
            // Links pointing to any hosted components / wikis of the project (Optional)
            "web_links": [
                {
                    // Title of the link
                    "title": "Github repository",
                    
                    // Actual link
                    "link": "http://github.com/#"
                },
                // Multiple link objects can be listed in the array as shown ...
                {
                    "title": "Live demo",
                    "link": "http://example.com/#"
                }
            ],
            
            // Link to a logo of the project (Optional)
            "logo_link": "./data/logos/company1.gif"
        },
        
        // The above object structure can be repeated multiple times as shown
        {
            "name": "Another Project",
            "tagline": "A simple android app",
            "description": [
                {
                    "type": "para",
                    "text": "Mauris tempus purus accumsan magna porta dapibus. Phasellus in sapien vel sapien tincidunt mattis. Cras mattis tristique tellus, sit amet pulvinar neque feugiat vel. Sed adipiscing lobortis fringilla. Nullam facilisis magna ac dolor vulputate, non sodales nulla aliquet. Vivamus magna libero, euismod eget ligula non, egestas dictum tortor. Vivamus tempus lobortis turpis sed tempor."
                },
                {
                    "type": "bullets",
                    "points": [
                        "orem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sollicitudin ante, vitae pellentesque orci.",
                        "Mauris tempus purus accumsan magna porta dapibus. Phasellus in sapien vel sapien tincidunt mattis.",
                        "Vivamus ultrices leo quis adipiscing rhoncus. Suspendisse sit amet sollicitudin velit, in pretium orci."
                    ]
                }
            ],
            "duration": "July, 2013 - Oct, 2013",
            "web_links": [
                {
                    "title": "Github repository",
                    "link": "http://github.com/#"
                },
                {
                    "title": "Live demo",
                    "link": "http://example.com/#"
                }
            ],
            "logo_link": ""
        }
    ]
};
```
  
[Back to README.md](../README.md)