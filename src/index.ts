class InternalError extends Error {}

throw new InternalError(
  'Foobar. %o',
  new Object({}),
)

