const alexaTest = require('alexa-skill-test-framework');

alexaTest.initialize(
    require('../lambda/custom/index.js'),
    "amzn1.ask.skill.00000000-0000-0000-0000-000000000000",
    "amzn1.ask.account.VOID");

describe("Hello World Skill", function () {
    describe("HelloWorldIntent", function () {
        alexaTest.test([
            {
                request: alexaTest.getIntentRequest("HelloWorldIntent"),
                says: "技術書典とは技術書の同人誌の祭典です。年に2回開催されますが、今年は豪華に3回も開催されます。ぜひ会場までおこしください！",
                shouldEndSession: true
            }
        ]);
    });

});