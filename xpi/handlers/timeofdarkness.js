// Authors:
//   momorientes <momo@mo2-systems.com>
Components.utils.import('resource://firesheep/util/RailsHelper.js');

register({
  name: 'TimeOfDarkness',
  url: 'https://timeofdarkness.de/',
  domains: [ 'timeofdarkness.de' ],
  sessionCookieNames: [ 'PHPSESSID' ],

  processPacket: function () {
    var cookie = this.firstPacket.cookies['PHPSESSID'];
    var railsSession = RailsHelper.parseSessionCookie(cookie);
    this.sessionId = railsSession.user + railsSession.password_token;
    
  },
});
