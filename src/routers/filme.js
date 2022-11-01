const axios = require('axios');

module.exports = async function getFilmes(req, res) {
	const { nome } = req.query;
	const { data } = await axios(`https://v3.sg.media-imdb.com/suggestion/x/${nome}.json?includeVideos=1`)
		.then((response) => response)
		.catch((error) => error);

	const filmes = data?.d?.map?.((filme) => {
		return {
			id: filme.id,
			titulo: filme.l,
			ano: filme.y,
			imdb: filme.id,
			imagem: filme.i?.imageUrl,
			atores: filme.s,
			diretor: filme.d,
			genero: filme.q,
			player: 'https://embed.warezcdn.net/filme/'+filme.id,
		};
	});

	if (!filmes)
		return res.status(404).json({ status: 'NOT_FOUND' });

	return res.status(200).json({
		status: 'OK',
		data: filmes,
	});
}