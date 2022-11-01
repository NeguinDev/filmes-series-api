const axios = require('axios');

module.exports = async function getSeries(req, res) {
	const { nome } = req.query;
	const { data } = await axios(`https://v3.sg.media-imdb.com/suggestion/x/${nome}.json?includeVideos=1`)
		.then((response) => response)
		.catch((error) => error);

	const series = data?.d?.map?.((serie) => {
		return {
			id: serie.id,
			titulo: serie.l,
			ano: serie.y,
			imdb: serie.id,
			imagem: serie.i?.imageUrl,
			atores: serie.s,
			diretor: serie.d,
			genero: serie.q,
			player: 'https://embed.warezcdn.net/serie/'+serie.id,
		};
	});

	if (!series)
		return res.status(404).json({ status: 'NOT_FOUND' });

	return res.status(200).json({
		status: 'OK',
		data: series,
	});
}