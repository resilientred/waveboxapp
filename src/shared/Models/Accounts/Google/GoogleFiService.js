const GoogleService = require('./GoogleService')

class GoogleFiService extends GoogleService {
  /* **************************************************************************/
  // Class
  /* **************************************************************************/

  static get type () { return GoogleService.SERVICE_TYPES.FI }
  static get humanizedType () { return 'Google Fi' }
  static get humanizedTypeShort () { return 'Fi' }
  static get humanizedLogos () {
    return [
      'images/google/logo_fi_32px.png',
      'images/google/logo_fi_48px.png',
      'images/google/logo_fi_64px.png',
      'images/google/logo_fi_128px.png'
    ]
  }

  /* **************************************************************************/
  // Properties
  /* **************************************************************************/

  get url () { return 'https://fi.google.com' }
}

module.exports = GoogleFiService
