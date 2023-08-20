import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { PieData as data } from '../data/mockData'

export default function PieChart() {
  return (
    <div className='w-5/12 bg-white rounded-lg flex flex-col'>
    <div className='flex flex-row justify-between m-6'>
        <strong className=''>Top Products</strong>
        <span className='text-xs'>May-June 2021 ⌵</span>
    </div> 
  
    <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 30, left: 0 }}
        startAngle={-75}
        sortByValue={true}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ theme: 'grid.line.stroke' }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={12}
        arcLinkLabelsTextOffset={17}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        arcLinkLabelsDiagonalLength={8}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        enableArcLabels={false}
        arcLabel="id"
        arcLabelsRadiusOffset={0}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
      
        transitionMode="pushIn"
        legends={[
            {
                anchor: 'top-right',
                direction: 'column',
                justify: false,
                translateX: -20,
                translateY: 10,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 10,
                symbolSize: 20,
                itemDirection: 'right-to-left'
            }
        ]}
    /></div>
  )
}
