import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{width: "100%", height: `100%` }} />,
    containerElement: <div style={{width: "100%", height: `400px` }} />,
    mapElement: <div style={{ width: "100%", height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 50.244395, lng: 30.793387 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 50.244395, lng: 30.793387 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default class Map extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: false })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: true })
    this.delayedShowMarker()
  }

  render() {
    return (
        <div >
            <MyMapComponent
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
           />    
        </div>
      
    )
  }
}


