import React from 'react'
import { ChartsHeader } from '../../components'
import BarChart from '../../components/Charts/BarChart'

const Bar = () => {
  
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <BarChart height='420px' width='800px' />
      </div>
    </div>
  )
}

export default Bar