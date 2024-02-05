import React from 'react'
import { ChartsHeader } from '../../components'
import PieChart from '../../components/Charts/PieChart'

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <PieChart height='420px' width='800px' />
      </div>
    </div>
  )
}

export default Pie