import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
})

test('I can add x to upper left square', async () => {

    let button = await (await driver).findElement(By.id('cell-0'));
    await button.click();
    
})

test('I can add x to lower right square', async () => {

    let button = await (await driver).findElement(By.id('cell-8'));
    await button.click();
    
});

test('Game adds an O', async () => {

    let button = await (await driver).findElement(By.id('board'));
    await button.click();
    
});