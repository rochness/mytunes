// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  
    // template: _.template('<div class="movie"> \
    //                       <div class="like"> \
    //                         <button><img src="images/<%- like ? \'up\' : \'down\' %>.jpg"></button> \
    //                       </div> \
    //                       <span class="title"><%- title %></span> \
    //                       <span class="year">(<%- year %>)</span> \
    //                       <div class="rating">Fan rating: <%- rating %> of 10</div> \
    //                     </div>'),


  // el: '<div>  <audio controls autoplay /> </div>',

  initialize: function() {
    this.render();
    var context = this;
    this.$el.on('ended', function(){
      context.model.ended();

    });
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    // this.$el.html(this.template(this.model.attributes));

    // return this.$el;

    // this.$el.empty();
    //empty the span, delete span
    // return this.$el.append('<span>' + this.model.get('artist') + ' ' + this.model.get('title') + '</span>');

    // <span class="title"><%- title %></span> \
    //                       <span class="artist"><%- artist %></span>\
     // src=<%- url %>
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});


  //                     '<div class="movie"> \
  //                         <div class="like"> \
  //                           <button><img src="images/<%- like ? \'up\' : \'down\' %>.jpg"></button> \
  //                         </div> \
  //                         <span class="title"><%- title %></span> \
  //                         <span class="year">(<%- year %>)</span> \
  //                         <div class="rating">Fan rating: <%- rating %> of 10</div> \
  //                       </div>'



  // render: function() {
   
  // }