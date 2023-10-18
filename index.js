const { Command } = require('commander');
const { name, version } = require('./package.json');
const program = new Command();

const parser = {
  'Shǒu': (s) => func('Shǒu', s),
  'Tián': (s) => func('Tián', s),
  'Shuǐ': (s) => func('Shuǐ', s),
  'Kǒu': (s) => func('Kǒu', s),
  'Niàn': (s) => func('Niàn', s),
  'Bo': (s) => func('Bo', s),
  'Shān': (s) => func('Shān', s),
  'Gē': (s) => func('Gē', s),
  'Rén': (s) => func('Rén', s),
  'Xīn': (s) => func('Xīn', s),
  'Rì': (s) => func('Rì', s),
  'Shī': (s) => func('Shī', s),
  'Mù': (s) => func('Mù', s),
  'Huǒ': (s) => func('Huǒ', s),
  'Tǔ': (s) => func('Tǔ', s),
  'Zhú': (s) => func('Zhú', s),
  'Shí': (s) => func('Shí', s),
  'Dà': (s) => func('Dà', s),
  'Zhōng': (s) => func('Zhōng', s),
  'Nán': (s) => func('Nán', s),
  'Jīn': (s) => func('Jīn', s),
  'Nǚ': (s) => func('Nǚ', s),
  'Yuè': (s) => func('Yuè', s),
  'Gōng': (s) => func('Gōng', s),
  'Yī': (s) => func('Yī', s)
}

program
  .name(name)
  .description('Go on charlie wonka.')
  .version(version);

program.command('parse')
  .description('parse, fucking hell')
  .argument('<string>', 'string to parse')
  .option('-d, --debug', 'debug')
  .action((s, { debug }) => {
    console.log('-----------------------------------------------');
    console.log(`PHRASE: ${s}`);
    console.log('-----------------------------------------------');
    console.log('hey you, been trying to meet you.');
    console.log('-----------------------------------------------');
  });

program.parse();