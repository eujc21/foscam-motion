/* ****************************************************************************/
/*  Server Methods */
/* ****************************************************************************/

Meteor.methods({
  'moveCamera': function(control) {
    var move = "http://192.168.0.13:8001/decoder_control.cgi?command=" + control + "&user=admin&pwd=";
    try {
      HTTP.call("GET", move, function(error, result) {
        if (error) {
          console.log(error);
        }else {
          console.log(result);
        }
      });
    } catch (e) {
      // Got a network error, time-out or HTTP error in the 400 or 500 range.
      return false;
    }
  }
});
