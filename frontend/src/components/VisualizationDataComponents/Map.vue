<template>
<div class="MapContainer">
      <div id="map"> </div>
      <div id="console">
        <div class='session'>
            <h class="LegendTitle"> Percentile Historical Streamflow</h>
            <div class='legend-scale'>
                <ul class='legend-labels'>
                    <!-- <li><span style='background:#822121;'></span></br>No Flow</li> -->
                    <li>
                        <span style='background:#c10b0b;'></span><br>&lt; 10%</li>
                    <li>
                        <span style='background:#f7b709;'></span><br>10-25%</li>
                    <li>
                        <span style='background:#70c11f;'></span><br>25-75%</li>
                    <li>
                        <span style='background:#08c6db;'></span><br>75-90%</li>
                    <li>
                        <span style='background:#007ad6;'></span><br>&gt; 90%</li>
                    <li>
                        <span style='background:#090b86;'></span><br>Extreme<br>Flow</li>
                </ul>
            </div>
            <div class='session' id='sliderbar'>
                <h class="Date">Date: October
                    <label id='active-year'>1950</label>
                </h>
                <input id='slider' class='row' type='range' min='0' max='66' step='1' value='0'/>
            </div>
        </div>
    </div> 
    </div>
    <pre id="link"></pre> 
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  name: "Map",
  mounted() {
      mapboxgl.accessToken = 'pk.eyJ1IjoibWlzdHlwb3J0ZXJrdSIsImEiOiJjajIyNG9oOGswMDViMndwaDQ3a2ZxY2NwIn0.Y4Paexki1dR1TqcKoQQO5w';
      const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mistyporterku/cj5sm9pmk3r3u2qp6jgm00sgz',
      center: [-99.377, 38.578],
      zoom: 3,
    });
    map.on("load", () => {
        // Here we want to load a layer
        map.loadImage(
          'src/assets/MapFiles/MapIcon.jpg',
          (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage('Icon', image)

        map.addControl(new mapboxgl.NavigationControl());

        map.addSource('California', {
            type: 'geojson',
            data: 'src/assets/MapFiles/180102CA_siteinfo_1962-2021.geojson'
        });

        map.addSource('Michigan', {
            type: 'geojson',
            data: 'src/assets/MapFiles/040500MI_siteinfo_1962-2021.geojson'
        });

        map.addSource('Kansas', {
            type: 'geojson',
            data: 'src/assets/MapFiles/110300KS_siteinfo_1962-2021.geojson'
        });
        
        map.addLayer({
          'id': 'Cal-Gauge-Stations',
          'type': 'circle',
          'source': 'California',
          'paint': {
            'circle-radius': 5,
            'circle-color': 'white'
            },
            });

        map.addLayer({
          'id': 'Michigan-Gauge-Stations',
          'type': 'circle',
          'source': 'Michigan',
          'paint': {
            'circle-radius': 5,
            'circle-color': 'white'
            },
            });

        map.addLayer({
          'id': 'Kansas-Gauge-Stations',
          'type': 'symbol',
          'source': 'Kansas',
          'layout': {
            'icon-image': 'Icon',
            'icon-size': 0.03
            },
            });
          }
        );
        });
  },
}
</script>

<style scoped>



#map{
  position: relative;
  width: 40vw; 
  height: 390px;
  left: 10;
  float: left; 
  margin-left: auto; 
  margin-right: auto;
}

#console {
  position: absolute;
  width: 285px;
  padding: 10px 10px;
  background-color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, Sans-serif;
  }
  
  
.LegendTitle {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 5px;
  }
  
.Date {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 5px;
    }
  
.session {
  margin-bottom: 10px;
  }
  
.session .legend-scale ul {
  margin: 0;
  padding: 0;
  float: left;
  list-style: none;
  }
      
.session .legend-scale ul li {
  display: block;
  float: left;
  width: 45px;
  margin-top: 3px;
  margin-bottom: 6px;
  text-align: center;
  font-size: 10px;
  list-style: none;
  }
  
.session ul.legend-labels li span {
  display: block;
  float: left;
  height: 15px;
  width: 45px;
  }
        
.row {
  height: 12px;
  width: 100%;
  }
      



</style>

