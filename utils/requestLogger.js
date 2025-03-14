export function generateMessageFromReq(req, target, statusCode, message) {
  const url = target

  const options = {
    date: 'YY.MM.DD HH:mm:ss',
    format: '%date [%thread] [%sessionId] [%user] %level %logger - %msg',
  }
  const thread = '1'
  const level = 'INFO'
  const logger = 'gichuniFrontLogger'
  const userId = ''

  const parse = function (req, responseStatus, format) {
    // Set the request status' log color
    const status = (function () {
      switch (true) {
        case responseStatus >= 500:
          return '\x1B[31m'
        case responseStatus >= 400:
          return '\x1B[33m'
        case responseStatus >= 300:
          return '\x1B[36m'
        case responseStatus >= 200:
          return '\x1B[32m'
      }
    })()

    // For the 3 numbers millisecond format i.e 007 instead of 7, or 077 instead of 77
    const concatDoubleZeroPrefix = function (number) {
      if (number < 100 && number > 9) {
        return '0' + number
      } else if (number < 10) {
        return '00' + number
      } else {
        return number
      }
    }

    const msg =
      '\x1B[35m' +
      req.method.toUpperCase() +
      '\x1B[0m' +
      ' ' +
      decodeURI(url) +
      ' ' +
      status +
      responseStatus +
      ' ' +
      message

    const systemDate = new Date()

    // Example : 06/10/2023 15:56:48
    const stringDate = systemDate.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
    })
    const firstSplit = stringDate.split(' ')
    const splitDate = firstSplit[0].split('/')
    const splitTime = firstSplit[1].split(':')

    const dateDummy =
      splitDate[2] +
      '-' +
      splitDate[1] +
      '-' +
      splitDate[0] +
      ' ' +
      splitTime[0] +
      ':' +
      splitTime[1] +
      ':' +
      splitTime[2] +
      ',' +
      concatDoubleZeroPrefix(systemDate.getMilliseconds())

    format = format.replace(/%date/g, '\x1B[0m' + dateDummy + '\x1B[0m')
    format = format.replace(/%thread/g, '\x1B[0m' + thread + '\x1B[0m')
    format = format.replace(/%sessionId/g, '\x1B[0m' + '' + '\x1B[0m')
    format = format.replace(/%user/g, '\x1B[0m' + userId + '\x1B[0m')
    format = format.replace(/%level/g, '\x1B[0m' + level + '\x1B[0m')
    format = format.replace(/%logger/g, '\x1B[0m' + logger + '\x1B[0m')
    format = format.replace(/%msg/g, '\x1B[0m' + msg + '\x1B[0m')

    return format
  }
  return parse(req, statusCode, options.format)
}
