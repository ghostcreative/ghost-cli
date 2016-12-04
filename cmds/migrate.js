'use strict';

const exec = require('child_process').exec;

module.exports = (program) => {

    program.command('migrate')
    .version('0.0.0')
    .option('-E --env', 'migration environment')
    .description('run sequelize migration to specified --env')
    .action(env => exec(`NODE_ENV=${env} sequelize db:migrate`, (error, stdout, stderr) => {
        if (error) console.error(error);
        else if (stderr) console.error(stderr);
        else console.info(stdout);
    }));

};
