import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import styles from './fakes/styles';

configure({ adapter: new Adapter() });

// JSDOM
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'https://localhost:8080'
});

global.document = dom.window.document;
global.window = dom.window;

const win = dom.window;
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
