var movies = [
	{
		id: 1,
		title: 'Ojciec chrzestny',
		desc: 'Opowieść o nowojorskiej rodzinie mafijnej. Starzejący się Don Corleone pragnie przekazać władzę swojemu synowi.',
		poster: 'http://1.fwcdn.pl/po/10/89/1089/7196615.3.jpg'
	},
	{
		id: 2,
		title: 'Interstellar',
		desc: 'Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych. Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.',
		poster: 'http://1.fwcdn.pl/po/56/29/375629/7616512.3.jpg'
	},
	{
		id: 3,
		title: 'Pulp Fiction',
		desc: 'Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii, żonie gangstera, bokserze i parze okradającej ludzi w restauracji.',
		poster: 'http://1.fwcdn.pl/po/10/39/1039/7517880.3.jpg'
	},
	{
		id: 4,
		title: 'To nie jest kraj dla starych ludzi',
		desc: 'Llewelyn Moss znajduje niedaleko granicy z Meksykiem paczkę heroiny, dwa miliony dolarów i wielu zabitych. Zabierając ze sobą gotówkę, nie wie, że jego śladem podąża psychopatyczny morderca.',
		poster: 'http://1.fwcdn.pl/po/92/89/259289/7184354.3.jpg'
	},
	{
		id: 5,
		title: 'Obcy',
		desc: 'Załoga statku kosmicznego Nostromo odbiera tajemniczy sygnał i ląduje na niewielkiej planetoidzie, gdzie jeden z jej członków zostaje zaatakowany przez obcą formę życia.',
		poster: 'http://1.fwcdn.pl/po/09/80/980/7518072.3.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.poster})
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));