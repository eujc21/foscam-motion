/* ****************************************************************************/
/* Home: Event Handlers */
/* ****************************************************************************/
Template.Home.events({
  'mousedown .direction': function(event) {
    Meteor.call('moveCamera', $(event.currentTarget).data().tag);
  },
  'mouseup .direction': function(event) {
    var next;
    if ($(event.currentTarget).data().tag === 0) {
      next = 1;
    }
    if ($(event.currentTarget).data().tag === 2) {
      next = 3;
    }
    if ($(event.currentTarget).data().tag === 6) {
      next = 5;
    }
    if ($(event.currentTarget).data().tag === 4) {
      next = 7;
    }
    Meteor.call('moveCamera', next);
  },
  'click .connectToWIFI': function() {
    var _ap = {
      ssid: '',
      password: ''
    };
    Meteor.call( "connectToAP", _ap, function(err, response) {
      console.log( response );
    });
  },
  'click .scanIt': function() {
    Meteor.call("scanForWiFi", function(err, response) {
      console.log(response);
    });
  },
  'click .captureImage': function() {
    var c = document.getElementById("testing");
    var ctx = c.getContext("2d");
    var img = document.getElementById("foscam");
    ctx.drawImage(img, 0, 0);
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var buf = new ArrayBuffer(imageData.data.length);
    var buf8 = new Uint8ClampedArray(buf);
    var data = new Uint32Array(buf);
    ctx.putImageData(imageData, 0, 0);
    console.log(data);
  }
});

/* ****************************************************************************/
/* Home: Helpers */
/* ****************************************************************************/
Template.Home.helpers({
  videoSrc: function() {
    return 'ipaddress/videostream.cgi?user=admin&pwd=';
  }
});

/* ****************************************************************************/
/* Home: Lifecycle Hooks */
/* ****************************************************************************/
Template.Home.onCreated(function() {
});

Template.Home.onRendered(function() {

});

Template.Home.onDestroyed(function() {
});
