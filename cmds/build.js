'use strict';

const exec = require('child_process').exec;
const nodeGit = require('nodegit');
const dockerHubApi = require('docker-hub-api');

const handleDockerBuild = (image, name, platform) => {
    const dockerCmd = `docker build -f Dockerfile.${image} -t ghostcreative/${name}-${image}:latest .`;
    runExec(dockerCmd);
};

const handleGulpBuild = (gulpfile) => {
    const gulpCmd = `gulp --gulpfile ${gulpfile}`;
    runExec(gulpCmd);
};

const runExec = (cmd) => {
    exec(cmd, (error, stdout, stderr) => {
        if (error) console.error(error);
        else if (stderr) console.error(stderr);
        else console.info(stdout);
    })
};

module.exports = (program) => {

    program.command('build')
    .version('0.0.0')
    .option('-G --gulpfile', 'gulpfile to build')
    .option('-I --image', 'docker image to build')
    .option('-N --name', 'name of project/client')
    .option('-P --platform', 'platform to build docker|gulp')
    .description('build application --platform')
    .action((gulpfile, image, name, platform) => {
        if (platform == 'docker') handleDockerBuild(image, name, platform);
        else if (platform == 'gulp') handleGulpBuild(gulpfile);
        else console.error('Unknown build platform.');
    });

};
