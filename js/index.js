
function openObject(id, button){
	let object = document.getElementById(id);
	let list = object.classList;
	if(list.contains("hidden-obj")){
		list.remove("hidden-obj");
		button.innerHTML = "Hide";
	}else{
		list.add("hidden-obj");
		button.innerHTML = "See more";
	}
}
