import React, { useEffect, useState } from 'react'
import CanvasJSReact from '../assets/canvasjs.react'
import axios from 'axios'


const Interactions = () => {
  const [data, setData] = useState({})
  const [display, setDisplay] = useState(false)

  const getData = async() => {
    const data = await axios.get('https://substantiveresearch.pythonanywhere.com/')
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])


  const sectorids = data?.data?.map(p => p.sector_id)
  const Healthcare = Math.round(sectorids?.filter((item) => item === '1').length / sectorids?.length * 100)
  const RealEstate = Math.round(sectorids?.filter((item) => item === '2').length / sectorids?.length * 100)
  const Materials = Math.round(sectorids?.filter((item) => item === '3').length / sectorids?.length * 100)
  const CommunicationServices = Math.round(sectorids?.filter((item) => item === '4').length / sectorids?.length * 100)
  const ConsumerDiscretionary = Math.round(sectorids?.filter((item) => item === '5').length / sectorids?.length * 100)
  const Industrials = Math.round(sectorids?.filter((item) => item === '6').length / sectorids?.length * 100)
  const ConsumerStaples = Math.round(sectorids?.filter((item) => item === '7').length / sectorids?.length * 100)
  const Financials = Math.round(sectorids?.filter((item) => item === '8').length / sectorids?.length * 100)
  const InformationTechnology = Math.round(sectorids?.filter((item) => item === '9').length / sectorids?.length * 100)
  const Energy = Math.round(sectorids?.filter((item) => item === '10').length / sectorids?.length * 100)
  const Utilities = Math.round(sectorids?.filter((item) => item === '11').length / sectorids?.length * 100)

  var CanvasJSChart = CanvasJSReact.CanvasJSChart

  const options = {
    animationEnabled: true,
    theme: 'light2',
    title:{
      text: 'Client Interactions In Sectors'
    },
    axisX: {
      title: 'Sector',
      reversed: true,
    },
    axisY: {
      title: 'Percentage of Activity',
      includeZero: true,
      minimum: 0,
      maximum: 100
    },
    data: [{
      type: 'bar',
      dataPoints: [
        { y:  Healthcare, label: 'Healthcare' },
        { y:  RealEstate, label: 'Real Estate' },
        { y:  Materials, label: 'Materials' },
        { y:  CommunicationServices, label: 'Communication Services' },
        { y:  ConsumerDiscretionary, label: 'Consumer Discretionary' },
        { y:  Industrials, label: 'Industrials' },
        { y:  ConsumerStaples, label: 'Consumer Staples' },
        { y:  Financials, label: 'Financials' },
        { y:  InformationTechnology, label: 'Information Technology' },
        { y:  Energy, label: 'Energy' },
        { y:  Utilities, label: 'Utilities' }

      ]
    }]
  }


  return (
    <div className="flex">
      <div className="m-auto min-w-full">
        {display ? <div className="relative overflow-x-auto px-10 py-20">
          <h1 className="text-center py-4 text-2xl text-red-900">Raw Data</h1>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Sector ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map(d => <tr key={d.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"><td className="px-6 py-4">{d.sector_id}</td><td className="px-6 py-4">{d.name}</td><td className="px-6 py-4">{d.date}</td></tr>)}
            </tbody>
          </table>
          <br />
          <CanvasJSChart options = {options}  data-cy="chart" />
          <p className="text-center py-2"><button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={() => setDisplay(!display)}>Hide Data</button></p> </div> : <p className="text-center"><button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-2xl rounded-lg shadow-2xl text-2xl px-10 py-10 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={() => setDisplay(!display)}>Show Data</button></p>}

      </div>
    </div>
  )
}

export default Interactions