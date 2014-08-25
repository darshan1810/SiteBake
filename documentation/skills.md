data/skills.js
======================
The expected structure of skills.js is described below:  
  
```javascript
var _skills = {
    // Array of all categories to be listed in skills section
    "categories": [
        {
            // Name of the category
            "category_name": "Programming Languages",
            
            // Array of skills in the category
            "topics": [
                "C++",
                "C",
                "Java",
                "Python"
            ]
        },
        
        // The above structure can be repeated multiple times
        {
            "category_name": "Database technologies",
            "topics": [
                "MySQL",
                "Google Datastore (with Objectify)",
                "SQL Server"
            ]
        },
        {
            "category_name": "Web Technologies",
            "topics": [
                "HTML5",
                "CSS3",
                "JavaScript"
            ],
            "sub_categories": [
                {
                    "sub_category_name": "Frameworks",
                    "topics": [
                        "AngularJS",
                        "BootStrap"
                    ]
                }
            ]
        }
    ],
    
    // Array of topic in area of interest (Optional)
    // If present, will be displayed above skills table
    "areas_of_interest": [
        "Programming",
        "Machine learning",
        "AI"
    ]
};
```
  
[Back to README.md](../README.md)