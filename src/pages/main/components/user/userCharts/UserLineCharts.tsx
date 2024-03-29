import { BarChart } from '@mui/x-charts'
import React from 'react'
function UserLineCharts() {
    return (
        <div className='user_charts'>
            <BarChart
            colors={['rgb(36, 153, 239)']}
                series={[
                    { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
                    // { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
                    // { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
                    // { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
                    // { data: [10, 6, 5, 8, 9], label: 'Series C1' },
                ]}
                // width={600}
                height={200}

            />
        </div>
    )
}

export default UserLineCharts