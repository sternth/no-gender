let onMessageCb = () => {}

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
  __test__: {
    runtime: {
      onMessage: {
        addListenerCb: (message) => onMessageCb(message),
      },
    },
  },
}
