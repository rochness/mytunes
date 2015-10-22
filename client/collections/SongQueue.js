// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  //models = array of songs in the queue
  //song being played in models[0]
  initialize: function() {
    // this.models.on('change playing', function(){
    //   models.shift();
    //   if(models.length > 0){
    //     models[0].play();
    //   }
    // });

    //listen for enqueue event, add to queue
  }

});