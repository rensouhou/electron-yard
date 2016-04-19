/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/core/load-config
 */
import R from 'ramda';
import fs from 'fs';
import path from 'path';
import config from '../config';

const coreConfigPre = JSON.parse(fs.readFileSync(path.join(config.gameConfigFile, 'dockyard.json')));

const vars = {
  '%HOME%': ''
};

const mangleVars = (obj) => Object.keys(coreConfigPre).reduce((o, it) => {
  let _obj = o;
  let _it = obj[it];

  Object.keys(vars).forEach(v => {
    if (it.indexOf(v) !== v)
      _it = _it.replace(v, vars[v]);
  });

  _obj[it] = _it;
  return _obj;
}, {});

const coreConfig = mangleVars(coreConfigPre);
