xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        const content = document.getElementsByTagName("pre").innerHTML = xmlhttp.responseText;
    }
}

xmlhttp.open("GET", "http://papalavras-server.herokuapp.com/words/random/");
xmlhttp.send();

console.log(content);


