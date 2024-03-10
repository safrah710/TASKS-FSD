//task 4
//1.create your own resume data in json format
/*
{
  "name": "John Doe",
  "address": "123 Main Street, Cityville, State 12345",
  "phone": "555-1234",
  "email": "john.doe@example.com",
  "education": [
    {
      "degree": "Bachelor's in Computer Science",
      "school": "University of Tech",
      "graduation_year": 2020
    }
  ],
  "experience": [
    {
      "position": "Software Engineer",
      "company": "Tech Solutions Inc.",
      "start_date": "June 2020",
      "end_date": "Present",
      "responsibilities": [
        "Developing and maintaining software applications",
        "Collaborating with cross-functional teams"
      ]
    },
    {
      "position": "Intern",
      "company": "Code Labs",
      "start_date": "May 2019",
      "end_date": "August 2019",
      "responsibilities": [
        "Assisted in software development projects",
        "Conducted code reviews and testing"
      ]
    }
  ],
  "skills": [
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "MySQL",
    "Git"
  ]
}*/


//2.iterating this using for for in for each for of 
const resumeData = {
    "name": "John Doe",
    "address": "123 Main Street, Cityville, State 12345",
    "phone": "555-1234",
    "email": "john.doe@example.com",
    "education": [
      {
        "degree": "Bachelor's in Computer Science",
        "school": "University of Tech",
        "graduation_year": 2020
      }
    ],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "Tech Solutions Inc.",
        "start_date": "June 2020",
        "end_date": "Present",
        "responsibilities": [
          "Developing and maintaining software applications",
          "Collaborating with cross-functional teams"
        ]
      },
      {
        "position": "Intern",
        "company": "Code Labs",
        "start_date": "May 2019",
        "end_date": "August 2019",
        "responsibilities": [
          "Assisted in software development projects",
          "Conducted code reviews and testing"
        ]
      }
    ],
    "skills": [
      "Java",
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "MySQL",
      "Git"
    ]
  };
  
  for (const key in resumeData) {
    console.log(`${key}: ${resumeData[key]}`);
  }
  
  for (const section of ["education", "experience"]) {
    console.log(`${section}:`);
    for (const item of resumeData[section]) {
      if (typeof item === 'object') {
        for (const key in item) {
          console.log(`  ${key}: ${item[key]}`);
        }
      }
    }
  }

  console.log("skills:");
  resumeData.skills.forEach(skill => {
    console.log(`  ${skill}`);
  });

  //3.difference on windows document screen
  /*
  1. **Window:**
   - Represents the browser window or tab.
   - Manages the overall browser environment and settings.
   - Provides methods for opening, closing, and navigating between browser windows or tabs.
   - Allows access to browser-related information such as dimensions, location, and history.
   - Can be used for handling events related to the entire browser window.

2. **Screen:**
   - Represents the user's screen or monitor.
   - Provides information about the screen's dimensions and pixel depth.
   - Allows developers to adjust content based on screen size and resolution.
   - Useful for creating responsive designs that adapt to different devices.
   - Screen properties can be used to optimize layouts for better user experience.

3. **Document:**
   - Represents the HTML document loaded in the browser window.
   - Contains the structure and content of the web page.
   - Provides methods to manipulate and interact with page elements.
   - Allows dynamic updating of content through JavaScript.
   - Serves as a crucial interface for client-side scripting and DOM manipulation.8*/