const expect = require('chai').expect;
const testFunc = (event) => `ようこそ。${event}のためのテストスキルです。`;

// describe("LaunchHanlder", () => {
//     it("should be OK", () => {
//         const result = testFunc("技術書典8");

//         expect(result).to.be.a("string");
//         expect(result).to.equal('ようこそ。技術書典8のためのテストスキルです。');
//     })
// });

const launchHandler = require("../lambda/custom/index.js");
describe("LaunchHanlder for Alexa skill", () => {
    it("should be OK", () => {
        const handlerInput = {
            requestEnvelope: {
                request: {
                    type: 'LaunchRequest'
                }
            }
        };

        const result = launchHandler.canHandle(handlerInput);
        expect(result).to.equal(true);
    })
});	
