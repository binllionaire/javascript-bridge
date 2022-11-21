  const BRIDGE_SIZE = {
    MIN : 3,
    MAX : 20
  }
  const SPACE = {
    UP : 'U',
    DOWN : 'D'
  }
  const INPUT_MESSAGE = {
    BRIDGE_SIZE : '다리의 길이를 입력해주세요.\n',
    SPACE_TO_MOVE : '이동할 칸을 선택해주세요. (위: U, 아래: D)\n'
  }
  const ERROR_MESSAGE = {
    BRIDGE_SIZE : '다리길이는 3 이상 20 이하의 숫자여야 합니다',
    SPACE_TO_MOVE : '위는 U, 아래는 D 를 입력해야 합니다.'
  }
  module.exports = {
    BRIDGE_SIZE,
    SPACE,
    INPUT_MESSAGE,
    ERROR_MESSAGE
  }