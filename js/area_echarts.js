$(function() {
	map();

	function map() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('map'));
		//数据纯属虚构
		var data = [{
				name: '江苏',
				value: 5.3
			},
			{
				name:'天津',
				value:18809.64
			},
			{
				name: '北京',
				value: 30319.98
			},
			{
				name: '上海',
				value: 32679.87

			},
			{
				name: '重庆',
				value: 20363.19

			},
			{
				name: '河北',
				value: 36010.27
			},
			{
				name: '河南',
				value: 48055.86

			},
			{
				name: '云南',
				value: 17881.12

			},
			{
				name: '辽宁',
				value: 25315.35

			},
			{
				name: '黑龙江',
				value: 16361.62

			},
			{
				name: '湖南',
				value: 36425.78

			},
			{
				name: '安徽',
				value: 30006.82

			},
			{
				name: '山东',
				value: 76469.67

			},
			{
				name: '新疆',
				value: 12199.08

			},
			{
				name: '江苏',
				value: 92595.4

			},
			{
				name: '浙江',
				value: 56197.15

			},
			{
				name: '江西',
				value: 21984.78

			},
			{
				name: '湖北',
				value: 39366.55

			},
			{
				name: '广西',
				value: 20352.51

			},
			{
				name: '甘肃',
				value: 8246.07

			},
			{
				name: '山西',
				value: 16818.11
			},
			{
				name: '内蒙古',
				value: 17289.22

			},
			{
				name: '陕西',
				value: 24438.32

			},
			{
				name: '吉林',
				value: 15074.62

			},
			{
				name: '福建',
				value: 35804.04

			},
			{
				name: '贵州',
				value: 14806.45

			},
			{
				name: '广东',
				value: 97277.77

			},
			{
				name: '青海',
				value: 2865.23

			},
			{
				name: '西藏',
				value: 1477.63

			},
			{
				name: '四川',
				value: 40678.13

			},
			{
				name: '宁夏',
				value: 3705.18

			},
			{
				name: '海南',
				value: 4832.05

			},
			{
				name: '台湾',
				value: 12199.08

			},
			{
				name: '香港',
				value: 12199.08

			},
			{
				name: '澳门',
				value: 12199.08

			}
		];

		var yData = [];
		var barData = [];

		for (var i = 0; i < 10; i++) {
			barData.push(data[i]);
			yData.push(i + data[i].name);
		}

		var option = {
			title: {
				text: '各地区生产总值(亿元)',
				textStyle: {
					align: 'left',
					color: '#fff',
					fontSize: 18,
				},
			
				left: 'left',
			},
			tooltip: {
				show: true,
				formatter: function(params) {
					return params.name + '：' + params.data['value'] + ''
				},
			},
			visualMap: {
				type: 'continuous',
				orient: 'horizontal',
				itemWidth: 10,
				itemHeight: 80,
				text: ['高', '低'],
				showLabel: true,
				seriesIndex: [0],
				min: 0,
				max: 97277.77,
				inRange: {
					color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
				},
				textStyle: {
					color: '#7B93A7'
				},
				bottom: 30,
				left: 'left',
			},
			grid: {
				right: 10,
				top: 135,
				bottom: 100,
				width: '20%'
			},
			geo: {
				 roam: true,
				 zoom:0.5,
				map: 'china',
				left: 'left',
				right: '300',
				layoutSize: '80%',
				label: {
					emphasis: {
						show: false
					}
				},
				itemStyle: {
					emphasis: {
						areaColor: '#fff464'
					}
				}
			},
			series: [{
				name: 'mapSer',
				type: 'map',
				roam: false,
				geoIndex: 0,
				label: {
					show: false,
				},
				data: data
			}]
		};
		
			myChart.setOption(option);
	}

})
