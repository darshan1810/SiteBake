data/education.md
=================
The expected structure of education.js is described below:  
  
```javascript
var _education = {
    // Array with each object describing one of the institutions
    "institutions": [
        {
            // Name of the institution (Compulsary)
            "name": "University of Metropolis",
            
            // Role of the intitution (High School, College, etc.) (Optional)
            "role": "Graduate school",
            
            // Degree obtained (Optional)
            "degree": "Master of Science",
            
            // Major (Optional)
            "major": "Computer Science",
            
            // Minor (Optional)
            "minor": "",
            
            // Duration of attendance (Optional)
            "duration": "September, 2014 - Present",
            
            // GPA achieved (Optional)
            "gpa": "3.7",
            
            // Location of the institution (Optional)
            "location": "Los Angeles, CA",
            
            // Courses taken as a String array (Optional)
            "courses": [
                "Networks",
                "Data Mining",
                "Algorithms"
            ],
            
            // Link to site of the institution (Optional)
            "link": "http://www.example.com",
            
            // Link to logo of institution (Optional)
            "logo_link": "./data/logos/institute1.png"
        },
        
        // The above described structure can be repeated multiple times as shown below
        {
            "name": "Institute of Technology",
            "role": "Undergraduate institution",
            "degree": "Bachelor of Engineering",
            "major": "Computer Engineering",
            "minor": "",
            "duration": "July, 2010 - July, 2014",
            "gpa": "3.9",
            "location": "Mumbai, India",
            "courses": [
                "Databases",
                "Operating Systems",
                "Algorithms"
            ]
        },
        {
            "name": "Sprinfield High",
            "role": "High school",
            "degree": "",
            "major": "",
            "minor": "Computer Science",
            "duration": "May, 2008 - May, 2010",
            "gpa": "91 %",
            "location": "Mumbai, India",
            "courses": []
        }
    ]
};
```
  
[Back to README.md](../README.md)