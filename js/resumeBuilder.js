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
	"bioPic" : "<IMG src=images/dixon.jpg class='biopic' />",
	"welcomeMessage" : "Welcome to my Resume Site!"
};

$("#header").append(bio.welcomeMessage);
$("#header").append(bio.bioPic);



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
	"jobs" : [
		{
		"employer": "Digital River",
		"title" : "UX Designer",
		"description" : "Participated in conducting user reseach and designing interactions for enterprise ecommerce applications.",
		"startDate" : "June 2014",
		"endDate" : "March 2015"
		},

{
		"employer": "Digital River",
		"title" : "QA Engineer",
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

projects.display = function() {
	for (project in projects.project) {
		$("#projects").append(HTMLprojectsStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects[project].projectName);
		$(".project-entry:last").append(formattedTitle);
		
	
		
	}

	

}

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

}

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';



var displayWork = function() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].startDate + ' - ' + work.jobs[job].endDate);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

	}
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
}
);

displayWork();


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
