import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { linedata as data} from '../data/mockData'



export default function TransactionsChart() {
    return (
        <div className='flex flex-col h-64 w-11/12 bg-white rounded-lg'>
            <div className='pl-10 pt-3 flex flex-col'><strong className=''>Activities</strong>May-June 2021 ⌵</div>
            <ResponsiveLine
                data={data}
                margin={{ top: 30, right: 40, bottom: 30, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: '0',
                    max: '500',
                    stacked: true,
                    reverse: false
                }}
                
                curve="cardinal"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    
                    tickPadding: 0,
                    tickRotation: 0,
                    
                    
                }}
                axisLeft={{
                    tickValues:5,
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                   
                    
                    
                }}
                enableGridX={false}
                // colors={{ scheme: 'nivo' }}
                enablePoints={false}
                pointSize={7}
                pointColor={{ theme: 'background' }}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                areaBaselineValue={10}
                areaOpacity={0}
                useMesh={true}
                legends={[
                    {
                        anchor: 'top-right',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
            

        </div>
    )
}
