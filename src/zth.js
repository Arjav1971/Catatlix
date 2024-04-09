import React, { useState } from 'react';
import { Table, Select } from 'antd';
import searchIcon from "./Assets/leading-iconsearch.svg";
import "./Home.css";
import crossIcon from "./Assets/Iconcross.svg";
import bellIcon from "./Assets/Bellbell.svg";
import messageIcon from "./Assets/Bellmessage.svg";
import settingIcon from "./Assets/Settingssettings1.svg";
import efficiencyGraph from "./Assets/Path 2efficiency-graph.svg";
import marketGraph from "./Assets/Path 2time.svg";
import arrowUpBlack from "./Assets/ArrowarropUpbalck.svg";
import arrowDown from "./Assets/Arrowarrowdown.svg";
import greenDot from "./Assets/Ellipse 60greent-dor.svg";
import redDot from "./Assets/Ellipse 62red-dor.svg";
import pagesViewChart from "./Assets/ChartpageviewsChart.svg";
import uniqueViewChart from "./Assets/Chartunique.svg";
import avgTimeChart from "./Assets/ChartAVG.svg";
import extrancesChart from "./Assets/ChartENTERANCE.svg";
import exitChart from "./Assets/ChartEXIT.svg";
import pageValueChart from "./Assets/ChartPAGEVALUE.svg";
import tableData from './tableData.json';

const { Option } = Select;

const columns = [
    {
      title: <div className="custom-heading-1">Page</div>,
      dataIndex: 'page',
      width: 180,
    },
    {
      title: 
      <div className="custom-heading-2">
        <div className='heading-text'>Pageviews</div>
        <div className='heading-data'>356,928</div>
        <img className="heading-img" src={pagesViewChart} alt="chart"/>
      </div>,
      dataIndex: 'pageViews',
      width: 150,
    //   className: 'age-column', // Add a custom CSS class for this column
    },
    {
      title: 
      <div className="custom-heading-2">
        <div className='heading-text'>Unique pageviews</div>
        <div className='heading-data'>275,588</div>
        <img className="heading-img" src={uniqueViewChart} alt="chart"/>
      </div>,
      dataIndex: 'uniqueViews',
      width: 150,
      
    },
    {
        title: 
        <div className="custom-heading-2">
          <div className='heading-text'>Avg. time on page</div>
          <div className='heading-data'>00:03:51</div>
          <img className="heading-img" src={avgTimeChart} alt="chart"/>
        </div>,
        dataIndex: 'avgTime',
        width: 150,
       
    },
    {
        title: 
        <div className="custom-heading-2">
          <div className='heading-text'>Extrances</div>
          <div className='heading-data'>315,643</div>
          <img className="heading-img" src={extrancesChart} alt="chart"/>
        </div>,
        dataIndex: 'extrances',
        width: 150,
      
    },
    {
        title: 
        <div className="custom-heading-2">
          <div className='heading-text'>% Exit</div>
          <div className='heading-data'>39,84%</div>
          <img className="heading-img" src={exitChart} alt="chart"/>
        </div>,
        dataIndex: 'exit',
        width: 150,
        
    },
    {
        title: 
        <div className="custom-heading-2">
          <div className='heading-text'>Page value</div>
          <div className='heading-data'>$19,983</div>
          <img className="heading-img" src={pageValueChart} alt="chart"/>
        </div>,
        dataIndex: 'pageValue',
        width: 150,
       
      },
  ];

// const data = [];
// // `Edward King ${i}`
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     page: <div className='page-text'>/Defect Arrival Rate</div>,
//     pageViews: <div className='pageViews'><div className='big-number'>872,337</div><div className='percentage-x'>(15.82%)</div></div>,
//     uniqueViews: <div className='pageViews'><div className='big-number'>574,332</div><div className='percentage-x'>(15.33%)</div></div>,
//     avgTime:<div className='avg-time'>00:05:43</div>,
//     extrances:<div className='pageViews'><div className='big-number'>802,873</div><div className='percentage-x'>(15.33%)</div></div>,
//     exit:<div className='avg-time'>25.96%</div>,
//     pageValue:<div className='pageViews'><div className='big-number'>$1,093</div><div className='percentage-y'>(5.11%)</div></div>,
//   });
// }

const Home = () => {
  const [pageSize, setPageSize] = useState(50);
  const [selectedDuration, setSelectedDuration] = useState('Month');

  const handlePageSizeChange = value => {
    setPageSize(value);
  };
  const handleDurationClick = duration => {
    setSelectedDuration(prevDuration => (prevDuration === duration ? null : duration));
  };
  
  return (
    <div>
      <div className='header'>
        <div className="search-container">
          <div className="search-text">Search</div>
          <input type="text" className="form-control" placeholder="Search by profile, setting, artifact etc..."  aria-label="Search by Campaign name" aria-describedby="basic-addon2"/>
          <img src={searchIcon} className="search-icon" alt="Search" />
          <img src={crossIcon} className="cross-icon" alt="Cross" />
        </div>
        <div className='help-icons'>
          <div className='icon-box'>
            <img src={bellIcon} alt='bell' className='box-img'/>
          </div>
          <div className='icon-box'>
            <img src={messageIcon} alt='message' className='box-img'/>
          </div>
          <div className='icon-box'>
            <img src={settingIcon} alt='settings' className='box-img'/>
          </div>
          <div className="user-photo">
            <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="User" className="user-photo-img" />
          </div>
        </div>
      </div>
      <div className='option-block'>
        <button className='create-button'>
          + Create Report
        </button>
        <button className='share-button'>
          Share this dashboard
        </button>
        <button className='duration-button'>
          Select Duration
        </button>
        <button className='duration-button'>
          Compare with Duration
        </button>
      </div>
      <div className='graphics-block'>
        {/* Your existing JSX code */}
        <div className='efficiency'>
          <div className='box-heading'>
            EFFICIENCY
          </div>
          <div className='sub-heading'>
            Lorem Ipsum
          </div>
          <div className='numeric'>
            1.1921 <img className="arrow" src={arrowDown} alt="down"/>
          </div>
          <div className='percentage'>
            +0.0015 (+0.13%)
          </div>
          <div className='usd'>
            0.00 USD
          </div>
        </div>
        <div className='time-to-market'>
          <div className='box-heading'>
            TIME TO MARKET
          </div>
          <div className='sub-heading' style={{color:'#FFEEB2'}}>
            Lorem Ipsum
          </div>
          <div className='numeric'>
             327,176 <img className="arrow" src={arrowDown} style={{ transform: 'rotateX(180deg)' }} alt="down"/>
          </div>
          <div className='percentage'>
            -97,914.00 (-23.03%)
          </div>
          <div className='usd' style={{color:'#FFEEB2'}}>
            131,040,723,108 JPY
          </div>
        </div>
        <div className='debt'>
          <div className='box-heading' style={{color:'#262D33'}}>
            TECH DEBT
          </div>
          <div className='sub-heading' style={{color:'#939699'}}>
            Lorem Ipsum
          </div>
          <div className='numeric' style={{color:'#262D33'}}>
             327,176 <img className="arrow" src={arrowUpBlack} alt="down"/>
          </div>
          <div className='percentage' style={{color:'#262D33'}}>
            -97,914.00 (-23.03%)
          </div>
          <div className='usd' style={{color:'#939699'}}>
            131,040,723,108 JPY
          </div>
        </div>
        <div className='predictability'>
          <div className='box-heading'>
            PREDICTABILITY
          </div>
          <div className='sub-heading' style={{color:'#FFC4C9'}}>
            Lorem Ipsum
          </div>
          <div className='numeric'>
             0.00313010 <img className="arrow" src={arrowDown} alt="down"/>
          </div>
          <div className='percentage'>
            -0.00050430 (-13.88%)
          </div>
          <div className='usd' style={{color:'#FFC4C9'}}>
            1,566 BTC
          </div>
        </div>
      </div>
      <div className='status'>
      <div className='status-box'>
        <div className='dot-div'>
          <img className="dot" src={greenDot} alt="dot"/>
        </div>
        <div className='status-heading'>
          On Time
        </div>
        <div className='status-data'>
          <div className='data'>
            <div className='data-head'>
              Completed Iterations
            </div>
            <div className='data-value'>
              7
            </div>
          </div>
          <div className='data'>
            <div className='data-head'>
              Total Iterations
            </div>
            <div className='data-value'>
              9
            </div>
          </div>
          <div className='data'>
            <div className='data-head'>
              % Iterations Done
            </div>
            <div className='data-value'>
              77.8%
            </div>
          </div>
        </div>
      </div>
      <div className='status-box'>
        <div className='dot-div'>
          <img className="dot" src={greenDot} alt="dot"/>
        </div>
        <div className='status-heading'>
          On Time
        </div>
        <div className='status-data'>
          <div className='data'>
            <div className='data-head'>
              Completed Iterations
            </div>
            <div className='data-value'>
              7
            </div>
          </div>
          <div className='data'>
            <div className='data-head'>
              Total Iterations
            </div>
            <div className='data-value'>
              9
            </div>
          </div>
          <div className='data'>
            <div className='data-head'>
              % Iterations Done
            </div>
            <div className='data-value'>
              77.8%
            </div>
          </div>
        </div>
      </div>
      <div className='status-box'>
        <div className='dot-div'>
          <img className="dot" src={redDot} alt="dot"/>
        </div>
        <div className='status-heading'>
          On Velocity
        </div>
        <div className='status-data'>
          <div className='data'>
            <div className='data-head'>
              Average Velocity
            </div>
            <div className='data-value'>
              428.6
            </div>
          </div>
          <div className='data'>
            <div className='data-head'>
              Required Velocity
            </div>
            <div className='data-value'>
              615.0
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="table-block">
        <div className='table-head'>
            <div >
              <Select className="pagenation" defaultValue="PAGEVIEWS" onChange={handlePageSizeChange}>
                  <Option value="10">10 per page</Option>
                  <Option value="20">20 per page</Option>
                  <Option value="50">50 per page</Option>
                  <Option value="100">100 per page</Option>
              </Select>

            </div>
            <div className='button-block'>
                <div className='duration-container'>
                    <div className={`span-content ${selectedDuration === 'Today' ? 'selected' : ''}`} onClick={() => handleDurationClick('Today')}>
                          Today
                    </div>
                    <div className="divider"></div>
                    <div className={`span-content ${selectedDuration === 'Yesterday' ? 'selected' : ''}`} onClick={() => handleDurationClick('Yesterday')}>
                          Yesterday
                    </div>
                    <div className="divider"></div>
                    <div className={`span-content ${selectedDuration === 'Week' ? 'selected' : ''}`} onClick={() => handleDurationClick('Week')}>
                         Week
                    </div>
                    <div className="divider"></div>
                    <div className={`span-content ${selectedDuration === 'Month' ? 'selected' : ''}`} onClick={() => handleDurationClick('Month')}>
                         Month
                    </div>
                    <div className="divider"></div>
                    <div className={`span-content ${selectedDuration === 'Quarter' ? 'selected' : ''}`} onClick={() => handleDurationClick('Quarter')}>
                         Quarter
                    </div>
                    <div className="divider"></div>
                    <div className={`span-content ${selectedDuration === 'Year' ? 'selected' : ''}`} onClick={() => handleDurationClick('Year')}>
                         Year
                    </div>
                </div>
                
                <Select className="period" defaultValue="Select period">
                    <Option value="10">10 per page</Option>
                    <Option value="20">20 per page</Option>
                    <Option value="50">50 per page</Option>
                    <Option value="100">100 per page</Option>
                </Select>
            
            <div>
      

            </div>


            </div>

        </div>
        <Table
          columns={columns}
          dataSource={tableData.map(item => ({
            ...item,
            page: <div className='page-text'>{item.page}</div>,
            pageViews: <div className='pageViews'><div className='big-number'>{item.pageViews}</div><div className='percentage-x'>({item.pageViewsPercentage})</div></div>,
            uniqueViews: <div className='pageViews'><div className='big-number'>{item.uniqueViews}</div><div className='percentage-x'>({item.uniqueViewsPercentage})</div></div>,
            avgTime:<div className='avg-time'>{item.avgTime}</div>,
            extrances:<div className='pageViews'><div className='big-number'>{item.extrances}</div><div className='percentage-x'>({item.extrancesPercentage})</div></div>,
            exit:<div className='avg-time'>{item.exit}</div>,
            pageValue:<div className='pageViews'><div className='big-number'>{item.pageValue}</div><div className='percentage-y'>({item.pageValuePercentage})</div></div>,
          }))}
          pagination={{
            pageSize: pageSize,
          }}
          scroll={{
            y: 240,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
