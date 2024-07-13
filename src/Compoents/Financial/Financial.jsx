import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Financial.css';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const dataSetsProfitLoss = [
  { label: 'Net Interest Income(₹ in Crore)', data: [17570, 19858, 22187, 27740, 33669], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Operating Profit(₹ in Crore)', data: [13842, 16018, 16719, 20086, 25836], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
 { label: 'Net Profit(₹ in Crore)', data: [8593, 9990, 12089, 14925, 18213], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
 { label: 'Basic Earnings Per Share (EPS)(₹)', data: [44.7, 50.5, 60.8, 75.0, 91.5], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
];

const dataSetsOperational = [
  { label: 'Current Account and Savings Account (CASA) Balances (Bank standalone)', data: [147622, 169313, 189134, 191815, 204304], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'CASA(%)', data: [56.2, 60.4, 60.7, 52.8, 45.5], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Deposits (Bank Standalone)(₹ in Crore)', data: [262821, 280100, 311684, 363096, 448954], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Advances(₹ in Crore)', data: [249859, 252170, 304474, 359107, 430352], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
];

const dataSetsBalanceSheet = [
  { label: 'Bank Capital Adequacy Ratio and CET1 (%)', data: [17.9, 17.1], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Capital and Reserves and Surplus(₹ in Crore)', data: [67134, 84836, 97134, 112254, 129892], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Total Assets(₹ in Crore)', data: [443153, 478854, 546498, 620430, 767667], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
];

const dataSetsValuationMetrics = [
  // Add datasets for Valuation Metrics
  { label: 'Book Value Per Share(₹)', data: [348, 426,487,563,653], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Market Capitalisation(₹ in Crore)', data: [247939, 347416, 348080, 344240, 354943], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
];

const dataSetsGroupCompanies = [
  // Add datasets for Group Companies
  { label: 'Total Assets Under Management(₹ in Crore)', data: [225878, 560140], years: ['FY20','FY24'] },
  { label: 'Kotak Securities – Average Daily Volume(ADV)^(₹ in Crore)', data: [9327, 19089], years: ['FY20','FY24'] },
  { label: 'Kotak Life Insurance - Gross Written Premium(₹ in Crore)', data: [10340, 17708], years: ['FY20','FY24'] },
  { label: 'Kotak Mahindra Asset Management– AAUM# - Overall(₹ in Crore)', data: [173394, 346589], years: ['FY20','FY24'] },
];

const Financial = () => {
  const [activeTab, setActiveTab] = useState('profitLoss');

  // Define colors to be used
  const tabColors = {
    profitLoss: ['rgba(235,235,236,1)', 'rgba(205,207,208,1)', 'rgba(159,161,164,1)', 'rgba(128,130,133,1)', 'rgba(73,124,182,1)'],
    operational: ['rgba(235,235,236,1)', 'rgba(205,207,208,1)', 'rgba(159,161,164,1)', 'rgba(128,130,133,1)', 'rgba(83,183,232,1)'],
    balanceSheet: ['rgba(235,235,236,1)', 'rgba(205,207,208,1)', 'rgba(159,161,164,1)', 'rgba(128,130,133,1)', 'rgba(45,99,158,1)'],
    valuationMetrics: ['rgba(235,235,236,1)', 'rgba(205,207,208,1)', 'rgba(159,161,164,1)', 'rgba(128,130,133,1)', 'rgba(243,112,50,1)'],
    groupCompanies: ['rgba(128,130,133,1)', 'rgba(0,57,116,1)']
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderCharts = (dataSets, colors) => {
    return dataSets.map((dataset, index) => {
      const data = {
        labels: dataset.years,
        datasets: [
          {
            label: dataset.label,
            backgroundColor: dataset.data.map((_, i) => colors[i % colors.length]),
            borderColor: 'rgba(88,89,91,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(88,89,91,1)',
            hoverBorderColor: 'rgba(88,89,91,1)',
            borderRadius: 10, // Add rounded corners to bars
            data: dataset.data,
            barThickness: 18, // Adjust bar thickness for spacing
          },
        ],
      };

      const options = {
        indexAxis: 'y', // Make bars horizontal
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.raw;
              },
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: 'black',
            font: {
              weight: 'bold',
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              display: false, // Hide the x-axis labels
            },
            grid: {
              display: false, // Remove x-axis grid lines
            },
          },
          y: {
            grid: {
              display: false, // Remove y-axis grid lines
            },
          },
        },
        layout: {
          padding: {
            top: 40,
            bottom: 35,
            left: 10,
            right: 38,
          },
        },
        maintainAspectRatio: false,
      };

      return (
        <div key={index} style={{ padding: '8px', height: '380px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>{dataset.label}</h4>
          <div style={{ flexGrow: 1, width: '80%' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className='container-margin'>
      <h2 className='text-center text-2xl font-bold text-[#34434D] py-8'>Financial Highlights</h2>
      <div className='tabs'>
        <button className={`tab ${activeTab === 'profitLoss' ? 'active' : ''}`} onClick={() => handleTabClick('profitLoss')}>
          Profit & Loss
        </button>
        <button className={`tab ${activeTab === 'operational' ? 'active' : ''}`} onClick={() => handleTabClick('operational')}>
          Operational
        </button>
        <button className={`tab ${activeTab === 'balanceSheet' ? 'active' : ''}`} onClick={() => handleTabClick('balanceSheet')}>
          Balance Sheet
        </button>
        <button className={`tab ${activeTab === 'valuationMetrics' ? 'active' : ''}`} onClick={() => handleTabClick('valuationMetrics')}>
          Valuation Metrics
        </button>
        <button className={`tab ${activeTab === 'groupCompanies' ? 'active' : ''}`} onClick={() => handleTabClick('groupCompanies')}>
          Group Companies
        </button>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        style={{ width: '70%' }} // Adjust the width as needed
      >
        {renderCharts(
          activeTab === 'profitLoss'
            ? dataSetsProfitLoss
            : activeTab === 'operational'
            ? dataSetsOperational
            : activeTab === 'balanceSheet'
            ? dataSetsBalanceSheet
            : activeTab === 'valuationMetrics'
            ? dataSetsValuationMetrics
            : dataSetsGroupCompanies,
          tabColors[activeTab]
        )}
      </Carousel>
    </div>
  );
};

export default Financial;
