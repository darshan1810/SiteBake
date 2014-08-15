Personal Homepage Creator
=========================
A quick way for professionals to generate a personal homepage that they can then host thenselves.
  
The user can edit the JSON config files in the data folder to list the finer points of their profile. When run, the site uses the provided info and displays it in a clean and effective manner.  
  
Built with responsive design in mind. The generated site looks good on desktop, iPad and phones.  
  
Can be customized by replacing the provided bootstrap.min.css file with different theme.
###Live Demo
You can see a live demo of the generted site with dummy data [here](http://sumitgouthaman.github.io/PersonalHomepage)  
###JSON File structure
####data/bio.js
```javascript
var _bio = {
    // User's name (Compulsary field)
    "name": "John Doe", 
    
    // User's tagline (Optional)
    "tagline": "Your tagline here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    
    // About me paragraph (Optional)
    /* It is defined in the form as an array for each paragraph each obect
    in array consists of 2 fields "type" followed by either "text" or "points".
    Thier usage is demonstrated below.
    "type": "para" is used for a regular paragraph
    "type": "bullets" is used for a unordered list
    */
    "aboutme": [
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
        },
        {
            "type": "para",
            "text": "Mauris tempus purus accumsan magna porta dapibus. Phasellus in sapien vel sapien tincidunt mattis. Cras mattis tristique tellus, sit amet pulvinar neque feugiat vel. Sed adipiscing lobortis fringilla. Nullam facilisis magna ac dolor vulputate, non sodales nulla aliquet. Vivamus magna libero, euismod eget ligula non, egestas dictum tortor."
        }
    ],
    
    // Resume link of user (Option).
    // Link to resume will not be shown if this is left empty
    "resumelink": "http://example.com/resume",
    
    // Default email of user (Option).
    // If set, displays a link to email the user using default email client
    "default_email": "mail@example.com"
};
```

-- More config file structures coming soon --
###Built with
* Angular JS
* Twitter Bootstrap