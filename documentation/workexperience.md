data/workexperience.js
======================
The expected structure of workexperience.js is described below:  
  
```javascript
var _workexperience = {
    // Array with each object representing one work position
    "jobs": [
        {
            // Name of the company (Compulsary field)
            "company": "Generic company",
            
            // A short description of the company (tagline) (Optional)
            "companyinfo": "A mobile and cloud company",
            
            // Job title of the position held (Optional)
            "jobtitle": "SDE",
            
            // Location of the job (Optional)
            "location": "Hyderabad, India",
            
            // Durtion for which the job was held (Optional)
            "duration": "Jan, 2010 - March, 2013",
            
            // Is this the current job held (Optional)
            "iscurrentjob": false,
            
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
            
            // Link to logo of company (Optional)
            "logo_link": "./data/logos/company1.gif"
        },
        
        // The above described structure can be repeated multiple times as shown below
        {
            "company": "Second Generic company",
            "companyinfo": "A networking company",
            "jobtitle": "SDE Intern",
            "location": "Chennai, India",
            "duration": "Dec, 2008 - March, 2009",
            "iscurrentjob": false,
            "description": [
                {
                    "type": "bullets",
                    "points": [
                        "orem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sollicitudin ante, vitae pellentesque orci.",
                        "Mauris tempus purus accumsan magna porta dapibus. Phasellus in sapien vel sapien tincidunt mattis.",
                        "Vivamus ultrices leo quis adipiscing rhoncus. Suspendisse sit amet sollicitudin velit, in pretium orci."
                    ]
                },
                {
                    "type": "para",
                    "text": "Mauris tempus purus accumsan magna porta dapibus. Phasellus in sapien vel sapien tincidunt mattis. Cras mattis tristique tellus, sit amet pulvinar neque feugiat vel. Sed adipiscing lobortis fringilla. Nullam facilisis magna ac dolor vulputate, non sodales nulla aliquet. Vivamus magna libero, euismod eget ligula non, egestas dictum tortor. Vivamus tempus lobortis turpis sed tempor."
                }
            ],
            "logo_link": "./data/logos/company2.png"
        }
    ]
};
```