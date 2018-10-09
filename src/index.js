import './styles.css';
import 'bootstrap';
import $ from 'jquery';
import Pet from './../src/pet';

setInterval(function () {
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=pizza&rating=r`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      console.log(response.data.images.original.url);
      const url = response.data.url;
      $('#gif-zone').html(`<img src="${url}" alt="an R-rated siiick gif">`);
    },
    error: function() {
      alert('you suuuck')
    }
  });
}, 5000);
