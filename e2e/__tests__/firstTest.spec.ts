import { by, device, element, expect } from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('login-btn')).tap();
    await expect(
      element(by.text(`Main Screen!\nYou're Logged!`)),
    ).toBeVisible();
  });
});
