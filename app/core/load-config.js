/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/core/load-config
 */
import fs from 'fs';
import path from 'path';
import config from '../config';
import homedir from 'homedir';

const coreConfigPre = JSON.parse(fs.readFileSync(path.join(config.gameConfigFile, 'dockyard.json')));

const vars = {
  '%HOME%': homedir(),
  '%APPROOT%': path.resolve('../..')
};

const mangleVars = (obj, replaceDict) => Object.keys(coreConfigPre).reduce((o, it) => {
  const _obj = o;
  let _it = obj[it];

  Object.keys(replaceDict).forEach(v => {
    if (it.indexOf(v) !== v) _it = _it.replace(v, replaceDict[v]);
  });

  _obj[it] = _it;
  return _obj;
}, {});

const coreConfig = mangleVars(coreConfigPre, vars);

console.log('coreConfig =>', coreConfig);

export default coreConfig;
