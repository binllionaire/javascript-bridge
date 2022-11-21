const MissionUtils = require("@woowacourse/mission-utils");
const {BRIDGE_SIZE, SPACE, INPUT_MESSAGE , ERROR_MESSAGE} = require("./util/constants");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (bridgeSize) => {
      this.validateBridgeSize(bridgeSize);
      return bridgeSize;
    });
  },

  logBridgeSizeError(bridgeSize){
    if(!(bridgeSize >= BRIDGE_SIZE.MIN && bridgeSize <= BRIDGE_SIZE.MAX)){
      throw ERROR_MESSAGE.BRIDGE_SIZE;
    }
  },
  
  validateBridgeSize(bridgeSize){
    try{
      this.logBridgeSizeError(bridgeSize) 
    }
    catch(e){
      console.error(e);
      this.readBridgeSize();
    }
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.SPACE_TO_MOVE, (space) => {
      this.validateMoving(space);
      return bridgeSize;
    });
  },


  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
