export function mockPromise(res) {
  return { then: f => f(res) };
}

export function mockDispatch() {
}
