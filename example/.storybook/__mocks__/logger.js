const logger = {
  error: (msg) => console.warn(msg),
  info: (msg) => console.log('info', msg),
  warn: (msg) => console.warn(msg),
  audit: (msg) => console.log('audit', msg),
}
export default logger
