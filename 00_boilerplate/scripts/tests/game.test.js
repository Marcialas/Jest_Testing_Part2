/**
 * @jest-environment jsdom
 */

const { default: test } = require('node:test');
const { describe } = require('yargs');
const { game } = require('../game');

beforeAll (() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
});

describe('game object containes correct keys', () => {
    test('score key exists', () => {
        expect('score' in game).toBe(true);
    });
});

