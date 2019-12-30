const conversation = require('alexa-conversation');
const app = require('../lambda/custom/index.js');
const opts = {
    name: 'Test Conversation',
    appId: 'amzn1.ask.skill.xxxxx',
    app: app
};

conversation(opts)
    .userSays('LaunchRequest')
    .plainResponse
    .shouldEqual('Welcome back', 'This is the reprompt')
        .end();