// import Chart from 'chart.js/auto';
import { Bar, line, Scatter, Bubble, Line, PolarArea, Pie } from 'react-chartjs-2';
import "bootstrap/dist/css/bootstrap.css";
// import ApexCharts from 'apexcharts';
import dynamic from 'next/dynamic';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { FaEllipsisH } from 'react-icons/fa';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Piechart (props) {

    const chartOptions = {
        labels: props.names
    }
    const series = props.series;

    return(
        <>
            {/* <Pie data={data} options={options} /> */}
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{props.cardTitle}</h6>
                    <div className="dropdown no-arrow">
                        <a href="#" id="dropdownMenuLink" title='Popover Header' onClick={e => { setToggleBtn(true); }}
                            data-toggle="popover" data-content='Some content'>
                            <FaEllipsisH />
                        </a>

                    </div>
                </div>
                {/* Card Body */}
                <div className="card-body">
                    <div className="chart-pie pt-2 pb-2 ">
                        {(typeof window !== 'undefined') &&
                            <Chart options={chartOptions} series={series} type="pie" width="360" />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}