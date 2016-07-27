// https://www.freecodecamp.com/challenges/convert-html-entities

function convertHTML(str) {
  const htmlEntities = [
	{"character": "\&", "entity": "&amp;"},
	{"character": "\<", "entity": "&lt;"},
	{"character": "\>", "entity": "&gt;"},
	{"character": "\"", "entity": "&quot;"},
	{"character": "\'", "entity": "&apos;"},
  ];
    
  htmlEntities.forEach(function(item) {
    str.replace(new RegExp(item["character"]), item["entity"]);
  });
  
  return str;
}
