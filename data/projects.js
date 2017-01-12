var _projects = {
    "projects": [
        {
            "name": "Per process system vector table",
            "tagline": "Kernel programming to make system calls in Linux dynamic",
            "description": [
                {
                    "type": "para",
                    "text": "Developed a Linux kernel-based system to support per-process system call vectors."
                },

                {
                    "type": "bullets",
                    "points": [
                        "Modified Linux kernel 4.6.0 to enable dynamic loading and unloading of system call vector tables as modules.",
                        "Intercepted system calls; which allowed system users to override system calls and use a different set of system calls per process",
                        "Handled special cases of vector table inheritance, e.g. clone"
                    ]
                }
            ],
            "duration": "November, 2016 - December, 2016",
        },
        {
            "name": "Automated ROP chain payload generator and tester",
            "tagline": "ROP chain payload exploit generator to automate Buffer Overflow attacks",
            "description": [
                {
                    "type": "para",
                    "text": "Developed a Linux x86 binary file analyzer tool which generates exploits."
                },

                {
                    "type": "bullets",
                    "points": [
                        "Scanned Linux x86 binary files to find ret2libc and ROP gadgets",
                        "Generated exploits which would create input strings from chained ROP gadgets",
                        "Made the exploit program stack executable, thereby allowing any user to add any additional payload"
                    ]
                }
            ],
            "duration": "August, 2016 - November, 2016",
        },
        {
            "name": "Election Result Prediction using Data Mining and Sentiment Analysis",
            "tagline": "Predicted Donald Trump in March 2016",
            "description": [
                {
                    "type": "para",
                    "text": "Ran sentiment analysis on internet scrapped public opinion to predict election outcomes."
                },

                {
                    "type": "bullets",
                    "points": [
                        "Streamed and dumped tweets filtered with candidate names, for US presidential election.",
                        "Created a labelled dataset using a combination of Intensity Polarizer (Vader) and Manual labelling on clustered data.",
                        "Trained and compared performance of text based classifiers on the labelled dataset.",
                    ]
                }
            ],
            "duration": "August, 2015 - March, 2016",
        },
        {
            "name": "KaliDroid",
            "tagline": "A penetration testing Android app",
            "description": [
                {
                    "type": "para",
                    "text": "Ported popular Kali Linux tools, for network based penetration testing for Android phones having root access."
                },
                
                {
                    "type": "bullets",
                    "points": [
                        "Cross compiled Linux based tools for the Android Linux kernel.",
                        "Provided python based tools with SL4A (Scripting Layer for Android).",
                        "Provided Android GUI wrapper, for quick and simple execution of the pen-testing tools."
                    ]
                }
            ],
            "duration": "July, 2013 - Oct, 2013",
        },
        {
            "name": "Dermibot",
            "tagline": "Skin disease detection Android application using machine learning.",
            "description": [
                {
                    "type": "para",
                    "text": "Developed an Android application to take text based parameters and click pictures as" +
                    " image inputs to predict likelihood of skin diseases, aimed at usage in rural India where" +
                    " medical resources are hard to find."
                },
                {
                    "type": "bullets",
                    "points": [
                        "Collected images from visiting patients at SGS Medical college",
                        "Trained a backpropagation neural network on text based input parameters; the disease symptoms",
                        "Chained an online image classifier API - Metamind to classify clicked pictures",
                        "Fetched results of both the text and image based classifiers and combined their predictions to" +
                        "generate disease prediction reports",
                        "The application is undergoing clinical trials at Seth GS Medical College, Mumbai"
                    ]
                }
            ],
            "duration": "June, 2015 - December, 2015",
        },
        {
            "name": "Patient Information System",
            "tagline": "Patient Information System for Skin & Vitiligo Department, KEM Hospital, Mumbai",
            "description": [
                {
                    "type": "para",
                    "text": "Developed and deployed an Intranet portal to collect and store patient information in KEM" +
                    " Hospital in Mumbai."
                },
                {
                    "type": "bullets",
                    "points": [
                        "Visited the deployment site to collect requiremnts",
                        "Designed the front-end and back-end of an information system web portal using Django" +
                        " framework",
                        "Deployed the portal on KEM Hospital's intranet",
                        "Mentored junior students in Web development, and trained them to provide maintenance" +
                        " for the portal"
                    ]
                }
            ],
            "duration": "November, 2015 - January, 2016",
        },
    ]
};
