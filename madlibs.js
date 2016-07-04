// Game by Lukefest in the face of overwhelming odds and homework


//Guy says: Create 6 arrays, one for nouns, one for verbs, one for adjectives, one for places and one for people

var noun = ("time", "person", "year", "way", "day", "thing", "man", "world", "life", "hand", "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government", "company", "number", "group", "problem", "fact");

var verb = ("be","have","do","say","get","make","go","know","take","see","come","think","look","want","give","use","find","tell","ask","work","seem","feel","try","leave","call");

var adjective = ("other","good","high","old","great","big","American","small","large","national","young","different","black","long","little","important","political","bad","white","real","best","right","social","only","public","sure","low","early","able","human","simple","left","physical","general","environmental","financial","blue","democratic","dark","various","entire","close","legal","religious","cold","final","main","green","nice","huge","popular","traditional","cultural");

var place = ("Barcelona","Milan","Las Vegas","Shanghai","Prague","Miami","Taipei","Pattaya","Guangzhou","Phuket","Rome","Seoul","Dubai","Istanbul","Antalya","Kuala Lumpur","Shenzhen","New York City","Macau","Paris","London","Bangkok","Singapore","Hong Kong");

var person = ("Donald Trump","Hillary Clinton","Barack Obama","Bernie Sanders","David Cameron","Boris Johnson","Ed Miliband","Jeremy Corbyn","Nick Clegg","Micheal Gove");

// Guy says do a story with random - how the hell do you do random!?

var story = ( "Once upon a time there was a " + adjective[Math.floor(Math.random()*adjective.length)] + " " + noun[Math.floor(Math.random()*noun.length)] + ". It was really " + adjective[Math.floor(Math.random()*adjective.length)] + ". It liked to " + verb[Math.floor(Math.random()*verb.length)] + " all day. One day, it went to " + place[Math.floor(Math.random()*place.length)] + " to meet " + person[Math.floor(Math.random()*person.length)] );

// Best I can do...

//   adjective[Math.floor(Math.random()*adjective.length)]
//   noun[Math.floor(Math.random()*noun.length)]
//   verb[Math.floor(Math.random()*verb.length)]
//   place[Math.floor(Math.random()*place.length)]
//   person[Math.floor(Math.random()*person.length)]

console.log (story);
