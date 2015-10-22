// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.set('songQueue', this.get('songQueue').add(song));
      //if no current song is being played
        //play the first song in the songQueue which is song
     
      // if((this.get('songQueue')).length === 1){
      //   (this.get('songQueue')).playFirst();
      // }
      
    }, this);

    //listener for 

    // //if currentSong's playing attribute = false
    params.library.on('change:playing', function(){
      if(this.get('currentSong').isPlaying() === false){
      var newSongQueue = (this.get('songQueue')).remove(this.get('currentSong'));
       this.set('songQueue', newSongQueue);
       this.get('songQueue').playFirst(); 
      }
    }, this);
  }

});
