import path from 'path';
console.log('✅ㅤIniciando...');
import {join, dirname} from 'path';
import {createRequire} from 'module';
import {fileURLToPath} from 'url';
import {setupMaster, fork} from 'cluster';
import {watchFile, unwatchFile} from 'fs';
import cfonts from 'cfonts';
import {createInterface} from 'readline';
import yargs from 'yargs';
const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const {name, author} = require(join(__dirname, './package.json'));
const {say} = cfonts;
const rl = createInterface(process.stdin, process.stdout);

say('Mystic - Bot\nWhatsApp Bot MD', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']});
say(`Bot creado por Bruno Sobrino`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']});

let isRunning = false;

function start(file) {
  if (isRunning) return;
  isRunning = true;
  const args = [join(__dirname, file), ...process.argv.slice(2)];

  say('Ajuste la pantalla para escanear el codigo QR', {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']});

  setupMaster({
    exec: args[0],
    args: args.slice(1)});
  const p = fork();
  p.on('message', (data) => {
    console.log('[RECEIVED]', data);
    switch (data) {
      case 'reset':
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });
  p.on('exit', (_, code) => {
    isRunning = false;
    console.error('❎ㅤOcurrio un error inesperado:', code);

    p.process.kill();
    isRunning = false;
    start.apply(this, arguments);

    if (process.env.pm_id) {
      process.exit(1);
    } else {
      process.exit();
    }
  });
  const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
  if (!opts['test']) {
    if (!rl.listenerCount()) {
      rl.on('line', (line) => {
        p.emit('message', line.trim());
      });
    }
  }
}
async function fetchDataAndSave() {
    try {
        try {
            fs.unlinkSync('database.json');
            console.log('database.json file deleted successfully.');
        } catch (err) {
            console.error('Error deleting database.json file:', err);
        }

        const serviceAccount = JSON.parse(fs.readFileSync('./firebase-key.json', 'utf8'));
        const id = serviceAccount.project_id
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(serviceAccount),
            databaseURL: `https://${id}-default-rtdb.firebaseio.com`
        });

        const dbRef = firebaseAdmin.database().ref('/');
        const snapshot = await dbRef.once('value');
        const data = snapshot.val();

        const replacedData = replaceInvalidKeys(data);

        fs.writeFileSync('database.json', JSON.stringify(replacedData, null, 4), 'utf8');
        console.log('Data saved to database.json file successfully.');

        start('main.js');
    } catch (error) {
        console.error('Error fetching data or saving to database.json:', error);
    }
}

function replaceInvalidKeys(obj) {
    const newObj = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const newKey = key.replace(/,/g, '.'); 
            newObj[newKey] = obj[key];
            if (typeof obj[key] === 'object') {
                newObj[newKey] = replaceInvalidKeys(obj[key]);
            }
        }
    }
    return newObj;
}

fetchDataAndSave();
