// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults:{
    // playing: false
  },

  play: function() {
    this.trigger('play', this);
  },
  
  dequeue: function(){
    this.trigger('dequeue', this);
  },
 
  ended: function(){
    this.trigger('ended', this);
  },

  remove: function() {
    this.trigger('removed', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  stopPlay: function(){
    this.trigger('stop', this);
  }


});
