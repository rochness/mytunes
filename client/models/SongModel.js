// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults:{
    playing: false
  },

  isPlaying: function(){
    return this.get('playing');
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playing', true);
    console.log('from SongModel - current song', this);
  },

  stopPlay: function(){
    this.set('playing', false);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  }

});
