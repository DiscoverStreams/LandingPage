<template>
  <div class="map">
    <!-- style="height: 75vh; width: 50vw;" -->
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[39.5789, -86.4822]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <!-- <l-control-layers /> -->
      <l-marker v-for="(city, i) in cities" :key="i" :lat-lng="city.location" v-on:click="cityPick(i)">
        <l-tooltip>
          {{city.text}}
        </l-tooltip>
        <l-popup>
          {{city.text}}
        </l-popup>
      </l-marker>

    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";


export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
  },
  data() {
    return {
      zoom: 5,
      cities: [
        {
          location: [43.04, -76.15],
          text: 'Syracuse',
          value: 'syracuse'
        },
        {
          location: [40.73, -73.63],
          value: 'gardenCity',
          text: "Garden City"
        },
        {
          location: [37.75, -100.02],
          value: 'dodgeCity',
          text: "Dodge City"
        },
        {
          location: [38.36, -98.76],
          value: 'greatBend',
          text: "Great Bend"
        },
        {
          location: [37.69, -97.33],
          value: 'wichita',
          text: "Wichita"
        },
      ]
    };
  },
  computed: {
    
  },
  methods: {
    cityPick(index) {

      this.$emit('cityPicked', this.cities[index].value);
    }
  },
};
</script>

<style scoped>
.map{
  height: 100%;
  width: 100%;
}
</style>

