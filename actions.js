function search()
	{
		var inp = document.getElementById("searchBox").value;
		inp=inp.toLowerCase();
		if(inp == "about" || inp == "introduction" || inp == "details")
		{
			alert(inp);
			location.href="about.html";
		}
		else if(inp == "contact" || inp == "call" || inp == "email"  || inp == "social media")
		{
			alert(inp);
			window.location="contact.html";
		}
		else if(inp == "home" || inp == "index" || inp == "welcome" )
		{
			alert(inp);
			window.location="index.html";
		}
		else if(inp == "cv" || inp == "resume" || inp == "experience" )
		{
			alert(inp);
			window.location="cv.html";
		}
		else if(inp == "blog" || inp == "articles" || inp == "writting" || inp == "article" )
		{
			alert(inp);
			window.location="blog.html";
		}
		else
		{
			alert("No search result found.");
		}
		return false;
}
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}