import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import './style.css'

const pieParams = { height: 180, margin: { right: 5 } };
const colors1 = ['rgb(36, 153, 239)', '#018abd', 'rgb(211, 230, 243)'];
const colors2 = ['#72a5d3', '#b1d3e3', '#153f65'];
const colors3 = ['#dfe7f2', '#8fa4c3', '#586c91'];

function UserPieCharts() {
  return (
    <div className='user_charts'>
      <Stack direction="row" width="100%" textAlign="center" spacing={1} >
        <Box flexGrow={1}>
          <Typography>Default</Typography>
          <PieChart
            colors={colors1}
            series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
            {...pieParams}
          />
        </Box>
        <Box flexGrow={1}>
          <Typography>Palette</Typography>
          <PieChart
            colors={colors2}
            series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
            {...pieParams}
          />
        </Box>
        <Box flexGrow={1}>
          <Typography>Item</Typography>
          <PieChart
            colors={colors3}
            series={[
              { data: [{ value: 10 }, { value: 15 }, { value: 20 }] },
            ]}
            {...pieParams}
          />
        </Box>
      </Stack>
    </div>
  );
}

export default UserPieCharts
