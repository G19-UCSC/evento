// import Chart from 'chart.js/auto';
import { Bar, line, Scatter, Bubble, Line, PolarArea, Pie } from 'react-chartjs-2';
import "bootstrap/dist/css/bootstrap.css";
// import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Piechart () {

    const data = {
        labels: ["Direct", "Referral", "Social"],
        datasets: [{
        data: [55, 30, 15],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    }

    const options = {
        maintainAspectRatio: false,
        tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        },
        legend: {
        display: false
        },
        cutoutPercentage: 80,
    }

    const options1 = {}
    const series = [44, 55, 41, 17, 15];
    const labels = ['A', 'B', 'C', 'D', 'E'];

    return(
        <>
        {/* <Pie data={data} options={options} /> */}
        {(typeof window !== 'undefined') && 
        <Chart options={options1} series={series} type="donut" width="300" />
        }
        </>
    )
}