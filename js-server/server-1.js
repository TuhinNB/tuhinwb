var playerInstance = jwplayer("myElement");
playerInstance.setup({
  playlist: [{
    sources: [{
      file: "https://live.hungama.com/linear/adipoli/playlist.m3u8",
      type: "hls"
    }],
    image: "//content.jwplatform.com/thumbs/HQzagMgW-720.jpg",
    title: "JW Player Support Demo",
    description: "An example video embed."
  }],
  width: auto,
  height: auto,
  mute: false
  
});
