// $("#main").append("Dixon Bordiano");

// var awesomeThoughts = "I am Dixon Bordiano and I am AWESOME!";

// var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

// $("#main").append(funThoughts);



// var email = "dixon.bordiano@fakeemail.com";

// var newEmail = email.replace("fakeemail","gmail");

var formattedName = HTMLheaderName.replace("%data%", "Dixon Bordiano");
var formattedRole = HTMLheaderRole.replace("%data%", "UX Designer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = 
["Interaction Design", "Usability Testing", "Experience Mapping", "User Research"];

var bio = {
	"name" : "Dixon Bordiano",
	"role" : "UX Designer",
	"skills" : skills,
	"bioPic" : "images/dixon.jpg",
	"welcomeMessage" : "Welcome to my Resume Site!"
};

$("#header").append("<br />");
$("#header").append(bio.welcomeMessage);
$("#skills").append(bio.skills[0]).append("<br />");
$("#skills").append(bio.skills[1]).append("<br />");
$("#skills").append(bio.skills[2]).append("<br />");
$("#skills").append(bio.skills[3]).append("<br />");

var education = {
	"schools" : [
		{
		"name": "University of Minnesota",
		"degree" : "Bachelor of Arts",
		"major" : "Art",
		"graduationDate" : 2010
		}
	]
}

var work = {
	"employers" : [
		{
		"companyName": "Digital River",
		"role" : "UX Designer",
		"description" : "Participated in conducting user reseach and designing interactions for enterprise ecommerce applications.",
		"startDate" : "June 2014",
		"endDate" : "March 2015"
		},

{
		"companyName": "Digital River",
		"role" : "QA Engineer",
		"description" : "Participated in designing and executing manual and automated test cases.",
		"startDate" : "May 2011",
		"endDate" : "June 2014"
		}
	]
}

var projects = {
	"projects" : [
		{
		"projectName": "sproutPOS",
		"role" : "UX Designer",
		"description" : "Conducted Heuristic Review and developed wireframes for mobile POS iOS and Android applications",
		},

{
		"projectName": "sproutPOS",
		"role" : "UX Designer",
		"description" : "Conducted Heuristic Review and developed wireframes for mobile POS iPAD, iOS, and Android applications.",
		}

	]
}

