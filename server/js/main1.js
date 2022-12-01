var player = new Clappr.Player(
    {
        source: "http://103.127.93.82:8234/gtv_640/tracks-v1a1/mono.m3u8?token=ZrXwqGqN8lN-l0",
        poster: 'http://clappr.io/poster.png',
        parentId: "#player",
        autoPlay: true,
        plugins: [CDNByeClapprPlugin, ResponsiveContainer, LevelSelector],
        levelSelectorConfig: {
            title: 'Quality',
            labels: {
                2: 'High', // 500kbps
                1: 'Med', // 240kbps
                0: 'Low', // 120kbps
            },
            labelCallback: function(playbackLevel, customLabel) {
                return customLabel + playbackLevel.level.height+'p'; // High 720p
            }
        },
        playback: {
            hlsjsConfig: {
                // Other hlsjsConfig options provided by hls.js
                p2pConfig: {
                    logLevel: 'debug',
                    live: true,        // set to true in live mode
                    // Other p2pConfig options provided by CDNBye
                }
            }
        }
    });