const {login} = require('/Users/shiva/Documents/PlaywrightArtilleryLoadTest/tests/pages/loginPage.js');

// artillery run artillery.yml
async function artilleryTest(page){
    await login(page);
}

module.exports = {artilleryTest};