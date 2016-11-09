var http = require('http');

// creer un tableau d'insultes
var insultes = [
    "méchant",
    "branquignolle",
    "coco",
    "traitre"
];

// creer une fonction de réponse
var listener = function(request,response) {
    // nombre aléatoire entre 0 et 3
    var i = Math.floor(Math.random() * 4);

    var url = request.url;
    var nom = url.substr(1).toLowerCase();

    if( nom == "clement" ) {
        response.end('Salut beau gosse');
    } else {
        // réponse
        response.end( nom + ' est un ' + insultes[i] );
    }  
};

// on crée le serveur
var server = http.createServer(listener);
// on écoute le port 3000 (localhost:3000)
server.listen(3000);