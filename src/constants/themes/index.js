import { mode } from 'constants/appConstants';

if (mode) {
    module.exports = require(`./${mode}`);
} else {
    module.exports = require('./service');
}