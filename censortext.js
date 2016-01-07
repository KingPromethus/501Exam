var censoredWords = ["sad", "bad", "mad"];
var customeCensoredWords = [];
function censor(inStr){
	for (idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx], "****");
	
	}
	for(idx in customeCensoredWords){
		inStr = inStr.replace(customeCensoredWords[idx], "****");

	}
	return inStr;
}

function addCensoredWord(word){
	customeCensoredWords.push(word);
}

function getCensoredWords(){
	return censoredWords.concat(customeCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;