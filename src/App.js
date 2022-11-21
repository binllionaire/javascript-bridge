const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");

class App {
  play() {
    let bridgeSize = InputView.readBridgeSize();
    let bridge = BridgeMaker.makeBridge(bridgeSize,BridgeRandomNumberGenerator.generate());
  }
}
const app = new App();
    app.play();
module.exports = App;
