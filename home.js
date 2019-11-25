$(document).ready(function()
{
  var myCmd = require(['./cmd.js']);
  var name = myCmd.name;
  $('.hello').append(name);
  console.log(name);
});