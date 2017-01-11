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
            // "web_links": [
            //     {
            //         "title": "Github repository",
            //         "link": "http://github.com/#"
            //     },
            //     {
            //         "title": "Live demo",
            //         "link": "http://example.com/#"
            //     }
            // ],
            // "logo_link": "./data/logos/company1.gif"
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
            // "web_links": [
            //     {
            //         "title": "Github repository",
            //         "link": "http://github.com/#"
            //     },
            //     {
            //         "title": "Live demo",
            //         "link": "http://example.com/#"
            //     }
            // ],
            // "logo_link": "./data/logos/company1.gif"
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
            // "web_links": [
            //     {
            //         "title": "Github repository",
            //         "link": "http://github.com/#"
            //     },
            //     {
            //         "title": "Live demo",
            //         "link": "http://example.com/#"
            //     }
            // ],
            // "logo_link": "./data/logos/company1.gif"
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
            // "web_links": [
            //     {
            //         "title": "Github repository",
            //         "link": "http://github.com/#"
            //     },
            //     {
            //         "title": "Live demo",
            //         "link": "http://example.com/#"
            //     }
            // ],
            // "logo_link": ""
        }
    ]
};
