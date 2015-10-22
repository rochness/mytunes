// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  //models = array of songs in the queue
  //song being played in models[0]
  initialize: function() {
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('dequeue', function(){
      this.remove(this.at(0));
    });

    this.on('ended', function(){
      this.at(0).dequeue();
      if(this.length !== 0){
        this.playFirst();
      }
    });

    this.on('removed', function(song) {
      this.remove(song);
    });

   
  
  }, 

  playFirst: function(){
    this.at(0).play();
  }

  // add: function(song){
  //   if(song === {
  //     artist: 'data',
  //     url: '/test/testsong.mp3',
  //     title:'test song'
  //   }){ debugger;}

  //   this.models.push(song);
  //   if(this.models.length === 1){
  //     this.playFirst();
  //   }
  //}

});