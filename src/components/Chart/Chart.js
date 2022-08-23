import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

  const dataPointValues = props.dataPoints.map(dataPoint=> dataPoint.value)

  const totalMaximum = Math.max(...dataPointValues)

	const dataPoints = props.dataPoints.map((dataPoint) => (
		<ChartBar
			value={dataPoint.value}
			maxValue={totalMaximum}
			label={dataPoint.label}
			key={dataPoint.label}
		/>
	));

	return <div className="chart">{[...dataPoints]}</div>;
};

export default Chart;
