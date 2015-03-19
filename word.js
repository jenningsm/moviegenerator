
var adjectives = ['unlawful', 'singular', 'deviant', 'suspicious', 'fatal', 'deadly',
                  'primitive', 'lucid', 'twilight', 'critical'];

var nouns = ['encounter', 'enterprise', 'suspicion', 'horizon', 'discord', 'exchange', 'discourse',
             'inflection', 'influx', 'escape', 'descent', 'repose'];

var subtitles = [];
subtitles.push('Be careful who you trust');
subtitles.push("Things aren't always as they seem");
subtitles.push('Some mistakes you can never leave behind');
subtitles.push('Time is running out');
subtitles.push('Seeds of revelation');
subtitles.push('The stakes are high');
subtitles.push('No price is too high');
subtitles.push('Eve of tragedy');


var randAd = adjectives[Math.floor(Math.random() * adjectives.length)];
var randNoun = nouns[Math.floor(Math.random() * nouns.length)];
var randSub = subtitles[Math.floor(Math.random() * subtitles.length)];

document.getElementById("title").innerHTML = (randAd + ' ' + randNoun).toUpperCase();
document.getElementById("subtitle").innerHTML = randSub.toUpperCase();
