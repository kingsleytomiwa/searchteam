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
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

const Example = ({ data }) => {
  // Adding the chart and theme as dependency to the core fusioncharts
  ReactFC.fcRoot(FusionCharts, ChartType, FusionTheme)

  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'bar3d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Repos',
        //Set the chart subcaption
        subCaption: 'In Millions',
        //Set the x-axis name
        xAxisName: 'Country',
        //Set the y-axis name
        yAxisName: 'Repos',
        numberSuffix: 'M',
        //Set the theme for your chart
        theme: 'fusion',
      },
      // Chart Data
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default Example
