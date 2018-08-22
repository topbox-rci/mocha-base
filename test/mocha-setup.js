import { jsdom } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import styles from './fakes/styles';

configure({ adapter: new Adapter() });

// JSDOM
const doc = jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(win).forEach((k) => {
    if (!{}.hasOwnProperty.call(win, k)) return;
    if (k in global) return;

    global[k] = window[k];
});

global.navigator = {
    userAgent: 'node.js'
};

// STYLES
function css(module) {
    const fake = module;

    fake.exports = styles;

    return fake;
}

require.extensions['.scss'] = css;
