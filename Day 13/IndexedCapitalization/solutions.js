let capitalize = (s,arr) => s.split``.map((l,i) => arr.includes(i) ? l.toUpperCase() : l).join``;
