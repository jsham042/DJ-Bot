const cohere = require('cohere-ai');
cohere.init('{jH6zORXuvnSG9Z8XUTczOMsFqmvGuTBkYdjWKSir}');
(async () => {
  const response = await cohere.generate({
    model: 'large',
    prompt: 'This program will take a list of list of genres and produce a playlist name.\n--\nGenres: Hip Hop, Trap Music, Drake, Travis Scott, Gucci Mane\nPlaylist Names: Rapping and Trapping\n--\nGenres: Electronic Dance Music, House, Chainsmokers, Lane 8\nPlaylist Names: Electro Party\n--\nGenres: Rock n Rock, Blues, Led Zeppelin, Aerosmith, The Beatles, BB King\nPlaylist Names: Feelin Blue\n--\nGenres: Country, Jazz, Garth Brooks, John Coltrain, Lious Armstrong, Buddy Rich\nPlaylist Names:',
    max_tokens: 100,
    temperature: 0.8,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: 'NONE'
  });
  console.log(`Prediction: ${response.body.generations[0].text}`);
  let playlistName = response.body.generations[0].text;
})();


getArt(playListName) {
    return fetch(`https://dev.paint.cohere.ai/txt2img`, {
      
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return '';
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
        preview_url: track.preview_url
      }));
    });
  },

