const { Command } = require('commander');
const { name, version } = require('./package.json');
const program = new Command();

program
  .name(name)
  .description('Go on charlie wonka.')
  .version(version);

program.command('parse')
  .description('Parse a string into cangjie keyboard input letters')
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