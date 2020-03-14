function getSiteInfo() {
	//document.getElementById("url").value = "11111";
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		var url = tabs[0].url;
		var title = tabs[0].title;
		document.getElementById("url").value = url;
		document.getElementById("title").value = title;

	});	
}

function goBlog(){
	chrome.tabs.create({url: "http://dev592.cafe24.com/blog"});
}

function goTagList(){
	chrome.tabs.create({url: "http://dev592.cafe24.com/blog/regTag.html"});
}

function doSave(){
	$.ajax({
		url:"http://dev592.cafe24.com/blog/saveUrl.php",
		type:"POST",
		cache:false,
		dataType:"json",
		data: $("#frm").serialize(),
		success: function(data){

		},
		error: function(request, status, error){

		}
	});
}


document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("btnGetUrl").addEventListener('click', getSiteInfo);
	document.getElementById("btnGoBlog").addEventListener('click', goBlog);
	document.getElementById("btnSaveUrl").addEventListener('click', doSave);
	document.getElementById("btnRegTag").addEventListener('click', goTagList);
	getSiteInfo();
});