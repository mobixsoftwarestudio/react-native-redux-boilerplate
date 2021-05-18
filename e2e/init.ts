/* eslint-disable no-undef */
import detox from 'detox';
import adapter from 'detox/runners/jest/adapter';
const specReporter = require('detox/runners/jest/specReporter');
const config = require('../package.json').detox;
import dotenv from 'dotenv';

//to load the username and password specified in the .env
dotenv.config();

// Set the default timeout
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// This is strictly optional.
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
  await detox.init(config);
  await detox.device.launchApp({ newInstance: true });
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
