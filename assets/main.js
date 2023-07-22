function CSSPropertySupported(Property, Value) {
	var DummyElement = document.createElement('div');
	return DummyElement.style[Property] != undefined;
}

function MarkCurentPage() {
	var CurrentPage = window.location.pathname.split("/").pop(); 
	var NavBarLinks = document.getElementsByClassName('NavBarTextElement');
	for (var i = 0; i < NavBarLinks.length; ++i) {
		if (NavBarLinks[i].href.split("/").pop() == CurrentPage) {
			NavBarLinks[i].className += " NavBarTextElementCurrent";
		}
	}	
}
			
if (CSSPropertySupported('-webkit-background-clip', 'text')) {
	var HeaderTxt = document.getElementById("HeaderText");
	HeaderTxt.className = HeaderTxt.className.replace(/\bHeaderElementTextStandard\b/,'');
	HeaderTxt.className += " HeaderElementTextGradient";
}

MarkCurentPage();