// STEP 1 - Include Dependencies
// Include react
import React from 'react'

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// Include the fusioncharts library
import FusionCharts from 'fusioncharts'

// Include the chart type
import ChartType from 'fusioncharts/fusioncharts.charts'

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

const Doughnut2d = ({ data }) => {
  // Adding the chart and theme as dependency to the core fusioncharts
  ReactFC.fcRoot(FusionCharts, ChartType, FusionTheme)

  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'doughnut3d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Most Stars Per Language',
        pieRadius: '45%',
        showPercentValues: '0',
        decimals: '0',
        theme: 'candy',
      },
      // Chart Data
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default Doughnut2d
