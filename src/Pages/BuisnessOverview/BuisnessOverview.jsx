import React from 'react'
import HeadingComponent from '../../Compoents/HeadingsCompoent/HeadingCompoent'
import CalloutType01 from '../../Compoents/Calloutes/CalloutsType01'

const BusinessOverview = () => {
  return (
    <div className='wrapper-component-main'>
      <b>Business overview</b>
      <h4 className='big-red-heading'>Recap of the Journey of our Businesses through the year</h4>
      <p className='bold-black-text-lg'>In the year gone by, we have continued to stay focused on growing our business & staying relevant and engaged with our customers. Across businesses we have created propositions using our deep product insights along with our evolving technology stack to drive
      customer engagement.</p>
      <h4 className='red-bold-heading'>Kotak Mahindra Bank Limited</h4>
      <div className='h-[6px] w-[50px] bg-red-500'></div>
      <div className='h-[1px] bg-black w-[200px]'></div>
      <HeadingComponent heading={'Consumer Banking'}/>
      <div className='my-3'>
      <b className='text-normal'>We provide a wide spectrum of propositions to retail customers, small businesses, NRIs, retail institutions, government departments and entities, backed by convenient, innovative and digital-first solutions</b>  
      <h4 className='orange-heading-text mt-5'>Products and services</h4>
    <p className='mb-3'>Savings and Current Accounts, Term Deposits, Home Loans and Loans Against Property, Personal Loans, Consumer Finance, Business Banking, Credit Cards, Priority Banking, Small Business Loans, Private Banking, Rural Housing, Business Loans and FASTags</p>
    <b className='text-normal'>Strengthening our deposits franchise</b>
    <p className='mb-4 mt-2'>We continued to focus on growing the low-cost CASA deposit and building the term deposit book through various propositions.
We launched a ‘Global Service Account’, a current account specially designed to meet the unique banking needs of the Service Export Sector. Relaunched the ‘Kotak Startup Current Account’ with additional features such as preferential trade & forex pricing, specially curated offers among others to help start-ups in their entrepreneurial journey.
<br />
We relaunched ActivMoney, an auto-sweep facility providing flexibility to access funds anytime and offers attractive rates on FD and penalty waiver in case of pre-closure.
We curated propositions for senior citizen customers by offering Term Deposits at higher interest rates and launched Kotak Grand,
a programme in partnership with GetSetUp to offer complimentary membership [GetSetUp is an online community for older adults (55+) aimed at meeting their needs to learn, socialise and participate in activities for individuals and groups]
</p>
<b className='text-normal'>Fortifying credit card propositions through co-branding</b>
<p className='text-red-500 font-medium text-md'>Credit Card**</p>
<p className='mb-4 mt-2'>We launched digital co-brand credit card with Myntra, new co-brand credit card with PVR Inox and UPI on Credit card was launched to provide a seamless credit card lifecycle experience. Strong growth was witnessed in the credit card book (44% YoY) aided by co-brand relationships and collaborations with world renowned artists.
</p>
<b className='text-normal'>Launched K-Force to improve customer experience -</b>
<p className='mb-4 mt-2'>Launched a cutting-edge unified service platform ‘K-Force’ that substantially improved the operational efficiency and customer experience by centralising information and simplifying SLA tracking and measurement across branches, call centres and operations. This resulted in benefits of capturing customer interactions and create service requests seamlessly, reduced the need for manual handling along with complete automation of a few high-volume service requests resulting in superior servicing.</p>
    </div>
    <h4 className='orange-heading-text mt-5'>KPIs</h4>
<div className='flex flex-wrap  gap-6'>
    <div className='w-[60%] md:w-[23%]'>
    <CalloutType01 data={'24%'} desc={'Growth in Deposits'} showTri={true}/>
    </div>
    <div className='w-[60%] md:w-[23%]'>
    <CalloutType01 data={'102%'} desc={'Growth in ActivMoney'} showTri={true}/>

    </div>
    <div className='w-[60%] md:w-[23%]'>
    <CalloutType01 data={'~90%'} desc={'of the Savings Accounts opened through assisted biometric journey'} showTri={false}/>

    </div>
    <div className='w-[60%] md:w-[23%]'>
    <CalloutType01 data={'20%'} desc={'Growth in Consumer Assets'} showTri={true}/>

    </div>
</div>
<span className='text-sm pt-5'>**RBI order of 24th April 2024, directed the Bank to cease and desist issuing fresh credit cards</span>
<HeadingComponent heading={'Commercial Banking'}/>
    
<div className='my-3'>
      <b className='text-normal'>We play a significant role in meeting financial inclusion goals and financing deep into ‘Bharat’.</b>  
      <h4 className='orange-heading-text mt-5'>Products and services</h4>
    <p className='mb-3'>Tractors, Commercial Vehicles and Construction Equipment Loans, Loans to Small and Medium Enterprises in the Agri Value Chain, Logistics and EPC segments, Microfinance Loans to women borrowers under JLG and Gold Loans to Individuals and Small Businesses.</p>
    <b className='text-normal'>Deepening engagement in Bharat</b>
    <p className='mb-4 mt-2'>We witnessed a healthy disbursement growth across businesses, resulting in higher YoY market share in Commercial Vehicle, Construction Equipment, Tractor and MicroCredit businesses. <br />
    We successfully launched Dairy loans for placing funds directly into the hands of farmers based on their milk revenue and crop cycles. Our customers were benefitted by 100% of digital & cashless journeys and E-execution of loan agreements and simple vernacular documentation.
    Focused investments in technology and analytics to improve the ease of doing business and process efficiencies.
    The business undertook various processes and digital initiatives to improve its ability in serving its customers, such as, straight through process (STP) in small CV segment, Chat functionality via WhatsApp for faster redressal of service requests / queries, Salesforce
    based Loan Origination System (LOS) for vehicle businesses, implementation of Central Repossession Auction process for better transparency and control over resale process among others.
</p>
 </div>
    
 <h4 className='orange-heading-text mt-5'>KPIs</h4>
<div className='flex flex-wrap  gap-10'>
    <div className='w-[60%] md:w-[30%]'>
    <CalloutType01 data={'20%'} desc={'Growth in Commercial Banking loan book*'} showTri={true}/>
    </div>
    <div className='w-[60%] md:w-[45%]'>
    <CalloutType01 data={'#1 Tractor financier'} desc={'Among banks in India with market share^ of 11.7% as on 31st March, 2024 spread over 562 districts'} showTri={false}/>

    </div>  
</div>
<HeadingComponent heading={'Wholesale Banking'}/>
<div className='my-3'>
      <b className='text-normal'>Caters to a wide range of corporate customer segments, including large Indian corporates, conglomerates, financial institutions, public sector undertakings, multinational companies, financial sponsors including private equity private equity funds and portfolio investors, new-age companies, small and medium enterprises (SME) and realty businesses.</b>  
      <h4 className='orange-heading-text mt-5'>Products and services</h4>
    <p className='mb-3'>Tractors, Commercial Vehicles and Construction Equipment Loans, Loans to Small and Medium Enterprises in the Agri Value Chain, Logistics and EPC segments, Microfinance Loans to women borrowers under JLG and Gold Loans to Individuals and Small Businesses.</p>
    <b className='text-normal'>Serving our corporate clients holistically</b>
    <p className='mb-4 mt-2'>Focus on garnering a greater share of transaction banking and use of risk-return metrices like Risk-Adjusted Return on Capital (RaRoC) at a transaction level, have ensured that parameters like Return-on- Equity (ROE) have been healthy even in the face of rapidly changing market conditions.
    Another year of growth in advances offered to customers from the SME and priority sectors.
</p>
<b className='text-md font-bold text-red-500'>Mid-Market</b>
<p className='mb-4'>A separate vertical was created to focus on growth in this space which has seen good momentum with twice the number of clients on-boarded this year as compared to the previous year
</p>
<b className='text-md font-bold text-red-500'>SME</b>
<p className='mb-4'>We scaled up our geographic presence by entering nine new locations while deepening our penetration in our existing markets. We employed data analytics to identify potential customers and capture higher share in the value chain of our existing larger customers. Strong risk monitoring and proactive measures helped maintain a pristine quality of the portfolio.</p>
<b className='text-md font-bold text-red-500'>Infrastructure</b>
<p className='mb-4'>We have seen significant growth in our exposure in the infrastructure sector in FY24. Our exposure has been well diversified with various sponsors such as Corporates, Private Equity and Sovereign Wealth Funds and InvITs. We have provided financing support to projects in Roads, Renewable Energy, Telecom, Data Centres, Logistics, Smart Meters, Hospitals and Education.
<br />
Our ability to structure, underwrite and syndicate has helped us to provide comprehensive solutions on larger financing requirements of these projects. We are also focusing on providing cash management and escrow solutions to these projects, thereby improving the Bank’s non- risk income.
<br />
Majority of the book is of high rated sponsors and diversified
across end-sectors. We will continue to pursue the entire gamut of opportunities in the infrastructure sector with the right-sizing of risks and returns. The business undertook various processes and digital initiatives to improve its ability in serving its customers.
Continued focus on non-credit income streams such as current account deposits, foreign exchange and other Transaction Banking products have resulted in healthy ROE
<br />
Growth momentum continues on the asset side as well with robust growth of acceptable credit across customer segments. Book is of high quality leading to low credit costs.

</p>
<b className='text-md font-bold text-red-500'>Kotak fyn</b>
<p>An integrated portal for corporate and business banking customers encompassing collections, payments, trade and account services ramped up well during the year with significant growth seen in adoption We launched new initiatives on the fyn platform such as (EDPMS & IDPMS) which helped in reducing the TAT for processing these transactions by 65% and led to growth of 11X YoY  Multiple technology & digital projects went live across the product and segment spectrum this year </p>
<h4 className='orange-heading-text mt-5'>KPIs</h4>
<div className='flex flex-wrap  gap-10'>
    <div className='w-[60%] md:w-[32%]'>
    <CalloutType01 data={'90%+'} desc={'Infrastructure exposure with borrowers with AA- and above rating.'} showTri={false}/>
    </div>
    <div className='w-[60%] md:w-[28%]'>
    <CalloutType01 data={'18%'} desc={'Growth in fund-based SME advances book'} showTri={true}/>

    </div>  
    <div className='w-[60%] md:w-[28%]'>
    <CalloutType01 data={'19%'} desc={'Growth in New to bank customers in SME business'} showTri={false}/>

    </div>  
</div>
 </div>
    </div>
  )
}

export default BusinessOverview
