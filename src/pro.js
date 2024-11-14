import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export default function ZoomLineChart() {
    <Gauge
      value={75}
      startAngle={-110}
      endAngle={110}
      height={30}
      width={30}
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
          transform: 'translate(0px, 0px)',
        },
      }}
      text={
         ({ value, valueMax }) => `${value} / ${valueMax}`
      }
    />
}
