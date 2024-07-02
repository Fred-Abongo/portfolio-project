// eslint-disable-next-line no-unused-vars
import * as d3 from 'd3';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios library

function DataVisualization() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data and set up D3 visualization
    axios.get('http://localhost:8000/api/datasets/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (data.length) {
      // Clear previous visualization
      d3.select("#data-visualization").selectAll("*").remove();

      // D3 visualization code here
      const svg = d3.select("#data-visualization")
                    .append("svg")
                    .attr("width", 600)
                    .attr("height", 400);

      svg.selectAll("circle")
         .data(data)
         .enter()
         .append("circle")
         .attr("cx", (d, i) => i * 50 + 25)
         .attr("cy", 200)
         .attr("r", d => d.value)
         .attr("fill", "blue");
    }
  }, [data]);

  return (
    <div id="data-visualization">
      {/* D3.js visualization will be rendered here */}
    </div>
  );
}

export default DataVisualization;