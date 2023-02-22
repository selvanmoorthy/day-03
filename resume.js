//1. Create your resume data in JSON format?

var resume = {
    "name" : "selvan moorthy",
    "age" : "21",
    "qualification" : "ECE Diploma",
    "passing year" : "2021",
    "email": "saiselvan984@gmail.com",
    "over all marks" : "87%",
    "techinacal skills ": "basic Knowledgae of comupter",
    "work experience": "FRESHER",
    "Hobbies": "Arts,cricket,football",
}

for (var a in resume){
    console.log(a,resume[a]);
}