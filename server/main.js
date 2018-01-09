import { Meteor } from 'meteor/meteor';
import '../imports/api/serverTasks.js';

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = 'smtp://' + 
  '73c42dd9b608c9a27a4cc9ed2a8d87ba' + ':'
  'c6cfe64d11dd7e6968dcfaf142cd4048@' +
  'smtp.gmail.com:465';
});
