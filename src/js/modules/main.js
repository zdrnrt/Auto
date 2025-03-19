import { Chart } from 'chart.js/auto';

(function () {
	moduleOpen('./src/html/main.html').then(() => {
		console.log('asdasd');
		window.mainChartDraw();
	});
})();

window.mainOpen = function () {
	moduleOpen('./src/html/main.html').then(() => {
		console.log('asdasd');
		window.mainChartDraw();
	});
};

window.mainChartDraw = () => {
	const lineLabels = [
		'1.2',
		'2.2',
		'3.2',
		'4.2',
		'5.2',
		'6.2',
		'7.2',
		'8.2',
		'9.2',
		'10.2',
		'11.2',
		'12.2',
		'13.2',
		'14.2',
		'15.2',
		'16.2',
		'17.2',
		'18.2',
		'19.2',
		'20.2',
		'21.2',
		'22.2',
		'23.2',
	];
	const LineDatasets = [
		{
			label: 'Olap',
			data: [
				96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96,
				96, 40, 96, 96, 96, 96, 96,
			],
		},
		{
			label: 'АЗ',
			data: [
				98, 98, 80, 98, 98, 98, 98, 70, 98, 98, 98, 98, 98, 98, 98, 98,
				98, 40, 98, 98, 98, 98, 98,
			],
		},
		{
			label: 'Прогноз',
			data: [
				97, 97, 97, 97, 97, 50, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97,
				97, 40, 97, 97, 97, 97, 97,
			],
		},
	];
	const chartLine = document.getElementById('mainChartLine');
	const chartTargets = document.getElementById('mainChartTargets');
	const chartLine2 = document.getElementById('mainChartLine2');
	const chartTargets2 = document.getElementById('mainChartTargets2');
	const speedConfig = {
		type: 'doughnut',
		data: {
			labels: ['Green', 'Grey'],
			datasets: [
				{
					data: [85, 15],
					backgroundColor: ['#69c97a', '#cdd5e1'],
					borderColor: ['#69c97a', '#cdd5e1'],
					needleValue: 78,
					meterValue: 1.07,
					borderWidth: 1,
					cutout: '75%',
					circumference: 180,
					rotation: -90,
				},
			],
		},
		options: {
			aspectRatio: 1,
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	};

	const data = {
		labels: [
			'09.01.2025',
			'10.01.2025',
			'11.01.2025',
			'12.01.2025',
			'13.01.2025',
			'14.01.2025',
			'15.01.2025',
			'16.01.2025',
			'17.01.2025',
			'18.01.2025',
			'19.01.2025',
			'20.01.2025',
			'21.01.2025',
			'22.01.2025',
			'23.01.2025',
			'24.01.2025',
			'25.01.2025',
			'26.01.2025',
			'27.01.2025',
		],
		datasets: [
			{
				label: 'Рег',
				data: [
					7_748_609, 7_430_612, 7_526_057, 7_536_744, 7_519_518,
					7_633_377, 7_532_513, 7_471_367, 7_439_333, 7_635_368,
					7_356_560, 7_600_113, 7_727_610,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Овер ',
				data: [
					1_874_664, 1_857_653, 1_850_670, 1_823_406, 1_879_880,
					1_877_060, 1_822_382, 1_867_842, 1_829_344, 1_847_266,
					1_839_140, 1_868_880, 1_869_583,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Промо',
				data: [
					1_874_664, 1_857_653, 1_850_670, 1_823_406, 1_879_880,
					1_877_060, 1_822_382, 1_867_842, 1_829_344, 1_847_266,
					1_839_140, 1_868_880, 1_869_583,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Вывод',
				data: [
					999_821, 1_238_435, 1_110_402, 972_483, 1_253_253,
					1_126_236, 971_937, 1_245_228, 1_097_607, 985_209,
					1_226_093, 1_121_328, 997_111,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Итого факт',
				data: [
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					12_214_609,
					11_970_317,
					11_730_911,
					11_496_293,
					11_266_367,
					11_041_039,
				],
				stack: 'group',
				order: 0,
			},
			{
				label: 'Итого план',
				data: [
					11_247_981, 11_145_919, 11_104_019, 10_940_435, 11_279_277,
					11_262_359, 10_934_293, 11_207_051, 10_976_065, 11_083_598,
					11_034_841, 11_213_282, 11_217_498, 11_192_498, 11_167_498,
					11_142_498, 11_117_498, 11_092_498, 11_067_498,
				],
				type: 'line',
				order: 0,
			},
		],
	};

	window.mainTargetsChart = new Chart(chartTargets, {
		type: 'bar',
		data: data,
		options: {
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: false,
				},
				decimation: {
					enabled: false,
				},
			},
			scales: {
				x: {
					display: false,
					stacked: true,
				},
				y: {
					stacked: true,
				},
			},
		},
	});

	window.mainTargetsChart2 = new Chart(chartTargets2, {
		type: 'bar',
		data: data,
		options: {
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: false,
				},
				decimation: {
					enabled: false,
				},
			},
			scales: {
				x: {
					display: false,
					stacked: true,
				},
				y: {
					stacked: true,
				},
			},
		},
	});

	window.mainLineChart = new Chart(chartLine, {
		type: 'line',
		data: { labels: lineLabels, datasets: LineDatasets },
	});
	window.mainLineChart2 = new Chart(chartLine2, {
		type: 'line',
		data: { labels: lineLabels, datasets: LineDatasets },
	});
};
