function header() {
	document.write("<section id='langbar'>");
	document.write("<span>Languages:<img src='../img/Usa.png' width='16' height='16' onClick='switchEn()'/><img src='../img/China.png' width='16' height='16' onClick='switchZh()'/></span>");
	document.write("</section>");
	document.write("<header>")
	document.write("<h1>Logo + name etc</h1>")
	document.write("</header>")
}

function navbarEn() {
	document.write("<nav id='navbar'>")
	document.write("<ul>")
	document.write("<a href='home.html'><li>Home</li></a>")
	document.write("<a href='eb5.html'><li>EB-5</li></a>")
	document.write("<a href='faq.html'><li>FAQ</li></a>")
	document.write("<a href='program.html'><li>Our Program</li></a>")
	document.write("<a href='about.html'><li>About Us</li></a>")
	document.write("</ul>")
	document.write("</nav>")
}

function navbarZh() {
	document.write("<nav id='navbar'>")
	document.write("<ul>")
	document.write("<a href='home.html'><li>主页</li></a>")
	document.write("<a href='eb5.html'><li>EB-5</li></a>")
	document.write("<a href='faq.html'><li>FAQ</li></a>")
	document.write("<a href='program.html'><li>Our Program</li></a>")
	document.write("<a href='about.html'><li>关于我们</li></a>")
	document.write("</ul>")
	document.write("</nav>")
}

function footer() {
	document.write("<footer>")
	document.write("<p>&copy; The Name</p>")
	document.write("</footer>")
}

function switchEn() {
	var dest = window.location.href;
	dest = dest.replace("/zh","/en");
	window.location = dest;
}

function switchZh() {
	var dest = window.location.href;
	dest = dest.replace("/en","/zh");
	window.location = dest;
}

function activePage() {
	var links = $("#navbar ul a");
	for (i = 0; i < links.length; i++) {
		if (document.location.href.indexOf(links[i].href) >= 0) {
			$(links[i]).attr("class", "active");
		}
	}
}