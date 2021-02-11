const { aql } = require('arangojs');
const db = require('./index.js');
const fs = require('fs');

const firstLastEntries = async(collection) => {
  const connection = db.collection(collection);

  return db.query(aql`
    RETURN [
      (FOR f IN ${connection}
        SORT f._key DESC
        LIMIT 1
        RETURN f._key
      )[0],
      (FOR l IN ${connection}
        SORT l._key ASC
        LIMIT 1
        RETURN l._key
      )[0]
    ]
  `)
}

export const getOneFirstLastEntries = async(collection) => {
  const toEntries = await firstLastEntries(to)
  .then((res) => res.map((r) => r.map((e) => Number(e))));
  const [last, first] = toEntries[0];
}

const getFirstLastEntries = async(to, from) => {
  const toEntries = await firstLastEntries(to)
    .then((res) => res.map((r) => r.map((e) => Number(e))));
  const [toLast, toFirst] = toEntries[0];

  const fromEntries = await firstLastEntries(from)
    .then((res) => res.map((r) => r.map((e) => Number(e))));
  const [fromLast, fromFirst] = fromEntries[0];
  return {toLast, toFirst, fromLast, fromFirst}
}

export const seedGraph = (csv, ratio, to, from) => {
  const writer = fs.createWriteStream(csv);
  writer.write('_to,_from\n', 'utf8');

  getFirstLastEntries(to, from)
  .then(({toFirst, toLast, fromFirst, fromLast}) => {
    let k = toFirst;

    for (i = fromFirst; i <= fromLast && k <= toLast; i++) {
      for (let l = 0; l <= ratio; l++, k++) {
        writer.write(`${to}/${k},${from}/${i}\n`)
      }
    }
  })
}

module.exports = seedGraph;
