const axios = require('axios')

const apiURL = ['https://interactiveviz.ku.edu/DiscoverWater/Hamilton_WaterUseIrrigateation_AnnualSummary.json',
                'https://interactiveviz.ku.edu/DiscoverWater/Hamilton_GW_WinterAvg.json',
                'https://interactiveviz.ku.edu/DiscoverWater/7138000_Syracuse_Qmo.json'
               ]

const fetchData = async (i) => {
  try {
    const { data } = await axios.get(apiURL[i]); 
    let modifiedData = []
    data.forEach((array, i) => {
      array = [array[0], array[2]]
      modifiedData[i] = array
    });
    // modifiedData = data.map(array => {
    //   console.log("array", array);
    //   array = [array[0], array[2]]
    //   console.log("modified array", array);
    //   console.log("modified data", modifiedData);

    // })
    // console.log("data", data);
    return modifiedData;
  } catch (error) {
    console.error(error);
  }
}

module.exports = fetchData