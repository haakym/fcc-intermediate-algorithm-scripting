// https://www.freecodecamp.com/challenges/convert-html-entities

// solution without using replace ...

function convertHTML(str) {
  const htmlEntities = {
		"\&": "&amp;",
		"\<": "&lt;",
		"\>": "&gt;",
		"\"": "&quot;",
		"\'": "&apos;"
  };
    
  return str.split("")
    .map(function(val) {
      return htmlEntities[val] ? htmlEntities[val] : val;
    })
    .join("");
}

// solution using replace (incomplete!)

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
