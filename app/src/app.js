import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js';

class Layout extends React.Component {
  constructor() {
    super();
    google.maps.event.addDomListener(window, 'load', this.makeAutocompleteInputs);
  }

  render() {
    return(
      
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <SearchBar/>
            </div>
          </div>
        </div>
      );
  }

  makeAutocompleteInputs() {
      new google.maps.places.Autocomplete(document.getElementById('Origin'), {});
      new google.maps.places.Autocomplete(document.getElementById('Destination'), {});

      var hashValue = window.location.hash;
      var elements = hashValue.split(';');
      
      if (elements.length == 2) {
          document.getElementById('Origin').value = elements[0].slice(1);
          document.getElementById('Destination').value = elements[1];
      }
  }
}

const App = document.getElementById('app');
ReactDOM.render(<Layout/>, App);