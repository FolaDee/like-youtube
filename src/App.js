import React, {Component} from 'react';

import './App.css';
import {MainSection} from "./components/MainSection";
import {Suggestion} from "./components/Suggestion";



class App extends Component {
  dataFromBackend = {
    images: [
      {
        id: 1,
        name: 'Computer',
        url: 'https://i.picsum.photos/id/0/5616/3744.jpg',
        user: 'Foladee',
        description: 'The ideal workstation',
        views: '500 views',
        selected: false
      },
      {
        id: 2,
        name: 'Blindfold',
        url: 'https://i.picsum.photos/id/1014/6016/4000.jpg',
        user: 'Cupid',
        description: 'One blindfolded lady',
        views: '2000 views',
        selected: true
      },
      {
        id: 3,
        name: 'Strawberry',
        url: 'https://i.picsum.photos/id/1080/6858/4574.jpg',
        user: 'ok_fruit',
        description: 'A lot of Strawberries',
        views: '20 views',
        selected: false
      }
    ]
  };
  state = {
    images: this.dataFromBackend.images,
    selectedImage: this.dataFromBackend.images.find((image) => {
      return image.selected === true;
    }),
    suggestedImages: this.dataFromBackend.images.filter((image) => {
      return image.selected === false;
    })
  };

  //updating the state
  selectNewImage = (id) => {
    this.setState({
      selectedImage: this.state.images.find((image) => image.id === id),
      suggestedImages: this.state.images.filter((image) => image.id !== id)
    });
  };

  deleteSelectedImage = () => {
    this.setState({
      images: this.state.suggestedImages,
      selectedImage: this.state.suggestedImages[0],
      suggestedImages: this.state.suggestedImages.splice(1)
    })
  };

  render () {
    return (
        <div className="App">
          <div className="container">
            <React.Fragment>
              <MainSection image={this.state.selectedImage} deleteSection={this.deleteSelectedImage}/>
              <Suggestion images={this.state.suggestedImages} selectNewImage={this.selectNewImage}/>
            </React.Fragment>

          </div>

        </div>
    );
  }


}




export default App;

//React state and how it reflects on the app
//flutter
//New React
//react hooks
//a weather app with a drop down of cities (determined by me, static)
//every time a city is clicked, it should load in the main section, ie the weather forecast for that day
//display: degrees in celsius, sun/rain/cloudy logo,
//amount of degrees,humidity, current weather of the city, if raining, show rain, if cloudy, show cloudy