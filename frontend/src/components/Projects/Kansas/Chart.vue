
<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent ({
  name: 'LineChart',
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  data: () => {
    labelsX = [null], //x
    datasetsY = { //y
      label: 'average ft3/s',
      backgroundColor: '#fffff',
      data: [null]
    }
  },
  mounted () {
    this.fillData()
    this.renderChart(this.chartdata)
  },
  methods: {
    fillData: function() {
      this.chartdata.forEach((array, i) => {
        this.labelsX[i] = array[0]
        this.datasetsY.data[i] = array[1]
      });
    }
  }

})
</script>