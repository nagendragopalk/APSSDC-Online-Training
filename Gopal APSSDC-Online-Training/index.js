function filesGetting(file,callback) {
	var ajaxCall=new XMLHttpRequest();
	ajaxCall.overrideMimeType("aplication/json");
	ajaxCall.open("GET",file,true);
	ajaxCall.onreadystatechange=function(){
		if(ajaxCall.readyState===4 && ajaxCall.status=="200"){

			callback(ajaxCall.responseText);
		}
	}
	ajaxCall.send(null);
	// body...
}
filesGetting("data.json",function(jsondata){
	var data=JSON.parse(jsondata);
	console.log(data);
	details(data.personaldata);
	details(data.mydata);
})

var body=document.getElementById('root');



var left=document.createElement("div");
left.classList.add("main");
body.appendChild(left);

var right=document.createElement("div");
right.classList.add("main");
body.appendChild(left);



function details(da){
var name=document.createElement("h2");
name.setAttribute("id","name");
name.textContent=da.name;
left.appendChild(name);

var name1=document.createElement("h2");
name1.setAttribute("id","mobile");
name1.textContent=da.mobile;
left.appendChild(name1);

var email=document.createElement("h2");
email.setAttribute("id","email");
email.textContent=da.email;
left.appendChild(email);
 }

function details1(sdc){
	for (i in sdc){
		var ul=document.createElement("ul");
		ul.classList.add("myprofile");
		var li=document.createElement("li");
		li.textContent=sdc[i].name;
		ul.appendChild(li);
		right.appendChild(ul);

		var li=document.createElement("li");
		li.textContent=sdc[i].mobile;
		ul.appendChild(li);
		right.appendChild(ul);

		var li=document.createElement("li");
		li.textContent=sdc[i].email;
		ul.appendChild(li);
		right.appendChild(ul);
	}	
}