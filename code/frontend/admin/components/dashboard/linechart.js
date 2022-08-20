import "bootstrap/dist/css/bootstrap.css";
// import Chart from 'chart.js/auto';
import { Bar, line, Scatter, Bubble, Line, PolarArea, Pie } from 'react-chartjs-2';
// import ApexCharts from "apexcharts";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Linechart (props) {

    const options1 = {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: props.xData
        }
      }

      const series = [
        {
          name: props.name1,
          data: props.series1
        },
        {
          name: props.name2,
          data: props.series2
        }
      ]

    return(
        <>
        {/* <Line data={data} options={options} /> */}
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div
              className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">{props.cardTitle}</h6>
              <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {/* <Dropdown options={options} value={'option1'} />                                             */}
                </a>

              </div>
            </div>
            {/* Card Body */}
            <div className="card-body">
              <div className="chart-area">
                {(typeof window !== 'undefined') &&
                  <Chart options={options1} series={series} type="line" height="300" />
                }
              </div>
            </div>
          </div>
        </>
    )
}