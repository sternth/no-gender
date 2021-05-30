let onMessageCb = () => {}
let localGetCb = () => {}

// eslint-disable-next-line no-undef
global.chrome = {
  runtime: {
    onMessage: {
      addListener: jest.fn().mockImplementation(cb => {
        onMessageCb = cb
      }),
    },
    sendMessage: jest.fn(),
  },
  storage: {
    local: {
      get: jest.fn().mockImplementation(() => localGetCb()),
    },
  },
  __test__: {
    runtime: {
      onMessage: {
        addListenerCb: jest.fn().mockImplementation((message) => onMessageCb(message)),
      },
    },
  },
}
