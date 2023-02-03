"use strict";

const endpoint = 'https://goodreads-server-express--dotdash.repl.co/search/book';
fetch(endpoint)
.then(response => response.json())
.then(data => console.log(data));