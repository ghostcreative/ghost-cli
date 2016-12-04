'use strict';

const exec = require('child_process').exec;
const nodeGit = require('nodegit');
const dockerHubApi = require('docker-hub-api');

const handleDockerBuild = (image, name, platform) => {
    const dockerHubImagePath = `ghostcreative/${name}-${image}`;
    const dockerCmd = `docker build -f Dockerfile.${image} -t ghostcreative/${name}-${image}:latest .`;

};

const handleGulpBuild = () => {

};

module.exports = (program) => {

    program.command('build')
    .version('0.0.0')
    .option('-I --image', 'docker image to build')
    .option('-N --name', 'name of project/client')
    .option('-P --platform', 'platform to build docker|gulp')
    .description('build application --platform')
    .action((image, name, platform) => {
        if (platform == 'docker') handleDockerBuild(image, name, platform);
        else if (platform == 'gulp') handleGulpBuild();

        const gulpCmd = ``;
        exec(`NODE_ENV=${env} sequelize db:migrate`, (error, stdout, stderr) => {
            if (error) console.error(error);
            else if (stderr) console.error(stderr);
            else console.info(stdout);
        })
    });

};
