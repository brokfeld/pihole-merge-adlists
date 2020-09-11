const fs = require(`fs`).promises;
const axios = require(`axios`);
const lists = require(`${__dirname}/lists.js`);
const whitelist = require(`${__dirname}/whitelist.js`);

(async () => {
  let domainsText = ``;
  let domainsArray = [];

  for (let i = 0; i < lists.length; i++) {
    let counter = 0;
    const list = lists[i];
    console.log(list);
    const content = await axios.get(list);
    const lines = content.data.split(`\n`);

    for (let j = 0; j < lines.length; j++) {
      let line = lines[j].trim();
      if (!line.startsWith(`#`)) {
        if (line !== ``) {

          if(line.includes(` `)){
            line = line.split(` `)[1];
          }

          domainsArray.push(line);
          counter++;
        }
      }
    }
    console.log(`  ${counter} domains`);
  }

  const domainsSet = new Set(domainsArray);
  delete domainsArray;

  for (let i = 0; i < whitelist.length; i++) {
    const entry = whitelist[i];
    domainsSet.delete(entry);
  }

  let counter = 0;
  domainsSet.forEach((v) => {
    counter++;
    domainsText += `${v}\n`;
  });

  console.log(`\nBuild build/adlist.txt ...`);
  await fs.writeFile(`${__dirname}/../build/adlist.txt`, domainsText, { encoding: `utf8` });
  console.log(`  Input ${domainsArray.length} domains -> Output ${counter} domains`);
})();

