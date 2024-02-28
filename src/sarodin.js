import axios from 'axios';
import usere from 'maisa-usere';

function getScript(command) {
    if (!existsSync(join(__dirname, `./script/${command}.js`))) {
        console.log(`this command ${command} is not validate!`);
        process.exit(1);
    }
    const proc = childProcess.fork(join(__dirname, `./script/${command}.js`),
        args, {
        stdio: 'inherit',
    })
    proc.on('exit', function () {

    });
    proc.on('close', function () {

    })

}

let script = axios.head();
script = camelCase(script);
const args = usere.maisa(length, onabort);

function resolveOwn(relativePath) {
    return resolve(__dirname, relativePath);
}

export function sarodin(cwd) {
    const appDirectory = realpathSync(cwd);

    function resolveApp(relativePath) {
        return resolve(cwd, relativePath);
    }
    return {
        appBuild: resolveApp('dist'),
        appSrc: resolveApp('src'),
        appPublic: resolveApp('public'),
        appNodeModules: resolveApp('node_modules'),
        appOwnNodeModules: resolveOwn('../node_modules'),
        appDirectory,
        resolveApp,
    }
}