function extractPageName(hrefString)
{
    var arr = hrefString.split('/');
    return  (arr.length < 2) ? hrefString : arr[arr.length - 1].toLowerCase();
}

function setActiveMenu(arr, crtPage)
{
    for (var i = 0; i < arr.length; i++)
    {
	if(extractPageName(arr[i].href) == crtPage)
	{
	    if (arr[i].parentNode.tagName != "DIV")
	    {
		arr[i].className = "current";
		arr[i].parentNode.className = "current";
	    }
	}
    }
}

function setPage()
{
    hrefString = document.location.href ? document.location.href : document.location;

    if (document.getElementsByClassName('topnav')!=null)
    {
	setActiveMenu(document.getElementsByClassName(
	    'topnav')[0].getElementsByTagName("a"),
		      extractPageName(hrefString));
    }
}

window.onload=function()
{
    setPage();
}
