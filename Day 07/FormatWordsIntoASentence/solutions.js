function formatWords(words){
 if(!words) return '';
  words = words.filter(x => x !== '');
  let normal = words.slice(0,-1).join(', ').trim();
  let last = words.slice(-1);
  return normal.length  ? `${normal} and ${last}` : last;
}
