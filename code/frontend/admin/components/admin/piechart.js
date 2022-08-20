// import Chart from 'chart.js/auto';
import { Bar, line, Scatter, Bubble, Line, PolarArea, Pie } from 'react-chartjs-2';
import "bootstrap/dist/css/bootstrap.css";
// import ApexCharts from 'apexcharts';
import dynamic from 'next/dynamic';
import { FaEllipsisH } from 'react-icons/fa';
import { useState } from 'react';
import { Dropdown, Button, Menu, Space, message } from 'antd';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Piechart (props) {

    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
      };

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
      };

    const menu = (
        <Menu onClick={handleMenuClick} items={[
            {
                label: 'Option 1',
                key: '1'
            },
            {
                label: 'Option 2',
                key: '2'
            }
        ]}
        />
    );

    // function changeVisible(e){
    //     document.getElementsByTagName('Dropdown.Button').vi
    // }

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
                        {/* <a href="#" id="dropdownMenuLink" role="button" title='Popover Header' onClick={e => { setToggleBtn(); }}
                            data-toggle="popover" data-content='Some content'>
                            <FaEllipsisH />
                        </a>
                        <Dropdown.Button onClick={handleButtonClick} overlay={menu} trigger="hover" autoFocus={true} 
                        destroyPopupOnHide={true} placement="bottomRight" >
                            <FaEllipsisH />
                        </Dropdown.Button> */}
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