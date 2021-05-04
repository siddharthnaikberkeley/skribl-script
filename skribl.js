var tesh = async function(){
var word = 0;
var name = 0;
var saved = false;

while (true) {
  await new Promise(r => setTimeout(r, 250));
  var messages = document.getElementById("boxMessages")
  if (messages) {
  	if (messages.hasChildNodes()) {
  		var children = messages.children
  		var messages_len = children.length;
  		var last_message = children[messages_len - 1].innerText;
  		var words = [];
  		if (last_message.startsWith("The word was")) {
  			words = last_message.split("The word was ");
  			var words_len = words.length;
  			word = words[words_len - 1]
  			console.log("word is " + word)
  		} else if (last_message.endsWith("is drawing now!")) {
			words = last_message.split(" ");
			name = words[0]; 
			saved = false;
			await new Promise(r => setTimeout(r, 1000));
			console.log("name is " + name)
  		}
  		var overlay = document.getElementById("overlay")
  		var style = getComputedStyle(overlay)
  		if (style.getPropertyValue('opacity') == '1') {
  			if (word != 0 && name != 0 && saved == false) {
  				console.log("saving")
  				var link = document.createElement('a');
  				var file_name = name + '_' + word + '.png'
  				link.download = file_name
  				console.log(file_name)
  				link.href = document.getElementById('canvasGame').toDataURL()
  				link.click();
  				saved = true;
			}
  		}
  	}
  } else {
  		console.log("cant fidn chat, im outie")
  		break;
  	}
  }
}
