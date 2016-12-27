// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("SendEmail", function(request, response) {

   var Mailgun = require('mailgun');
Mailgun.initialize('sandbox7b44d0face8c4006bb449b2283927aae.mailgun.org', 'key-71bcf8e7eff86e977e742c84f623d864');

Mailgun.sendEmail({
  to: request.params.to,
  from: request.params.from,
  subject: request.params.subject,
  text: request.params.text
}, {
  success: function(httpResponse) {
    console.log(httpResponse);
    response.success("Email sent!");
  },
  error: function(httpResponse) {
    console.error(httpResponse);
    response.error("Uh oh, something went wrong");
  }
});
});
