var NowPlayingView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  
  
  initialize: function() {
  
    var context = this;
    this.$el.on('ended', function(){
      this.$el.empty();

    });
  },

  setSong: function(song) {
      this.model = song;
      this.render();      
  },

  render: function() {
    this.$el.empty();
    if(this.model){
      return this.$el.append('<span> Now Playing: ' + this.model.get('artist') + ' ' + this.model.get('title') + '</span>');  
    }
    // return this.$el.append('<span> Now Playing: ' + this.model ? (this.model.get('artist') + ' ' + this.model.get('title')) : '' + '</span>');

    // return this.$el.attr('src', this.model ? this.model.get('url') : '');

  }

});