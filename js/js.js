$(function() {
	echarts5();
	echarts3();
	echarts6();
	echarts8();
	echarts2();
	// map();
	// echarts2();
	// echarts3();
	// echarts4();
	
	// echarts6();
	// echarts7();

	function map() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('map'));
		//数据纯属虚构
		var data = [{
				name: '江苏',
				value: 5.3
			},
			{
				name: '天津',
				value: 18809.64
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
			/* title: {
				text: '各地区生产总值(亿元)',
				textStyle: {
					align: 'left',
					color: '#fff',
					fontSize: 18,
				},
			
				left: 'left',
			}, */
			tooltip: {
				show: true,
				formatter: function(params) {
					return params.name + '：' + params.data['value'] + ''
				},
			},
			visualMap: {
				type: 'continuous',
				//orient: 'horizontal',
				itemWidth: 10,
				itemHeight: 80,
				text: ['高', '低'],
				showLabel: true,
				seriesIndex: [0],
				min: 0,
				max: 97277.77,
				inRange: {
					color: ['rgba(178, 45, 178,0.1)', 'rgba(178, 45, 178,0.4)', 'rgba(178, 45, 178,0.8)',
						'rgba(178, 45, 178,1)'
					]
				},
				textStyle: {
					color: '#7B93A7'
				},
				bottom: 0,
				left: 'left',
			},
			grid: {
				right: 0,
				top: 10,

			},
			geo: {
				roam: false,
				zoom: 1,
				map: 'china',
				left: 'left',
				right: '10',
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

	function echarts2() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('bingtu'));
		var ydata = [{
				name: '批发和零售业',
				value: 77693.75

			},
			{
				name: '交通运输、仓储和邮政业',
				value: 29924.09

			},
			{
				name: '住宿和餐饮业',
				value: 15475.26

			},
			{
				name: '金融业',
				value: 34343.46
			},
			{
				name: '房地产业',
				value: 26418.42

			},
			{
				name: '其他服务业',
				value: 126017.27

			}
		];
		var color = ["rgba(178, 45, 178,0.4)", "rgba(178, 45, 178,0.5)", "rgba(178, 45, 178,0.6)",
			"rgba(178, 45, 178,0.9)", "rgba(178, 45, 178,1)", "rgba(178, 45, 178,1)", '#04387b', '#04387b'
		]
		var xdata = ['批发和零售业', "交通运输、仓储和邮政业", "住宿和餐饮业", "金融业", '房地产业', '其他服务业'];


		var option = {
			title: {
				text: '广东省2006-2018产业数据',
				textStyle: {
					align: 'left',
					color: '#fff',
					fontSize: 18,
				},

				left: 'left',
			},
			color: color,
			legend: {
				orient: "vartical",
				x: "left",
				top: "center",
				left: "70%",
				bottom: "0%",
				data: xdata,
				itemWidth: 8,
				itemHeight: 8,
				itemGap: 16,
				color: "#8693F3",
				textStyle: {
					fontSize: 14,
					color: '#000'
				},
				formatter: function(name) {
					return '' + name
				}
			},
			series: [{
				type: 'pie',
				clockwise: false, //饼图的扇区是否是顺时针排布
				minAngle: 2, //最小的扇区角度（0 ~ 360）
				radius: ["55%", "90%"],
				center: ["50%", "50%"],
				avoidLabelOverlap: false,
				itemStyle: { //图形样式
					normal: {
						borderColor: '#ffffff',
						borderWidth: 2,
					},
				},
				label: {
					normal: {
						show: false,
						position: 'center',
						formatter: '{text|{b}}\n{c} ({d}%)',
						rich: {
							text: {
								color: "#000",
								fontSize: 20,
								align: 'center',
								verticalAlign: 'middle',
								padding: 8
							},
							value: {
								color: "#000",
								fontSize: 20,
								align: 'center',
								verticalAlign: 'middle',
							},
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							color: "#000",
							fontSize: 24,
						}
					}
				},
				data: ydata
			}]
		};
		myChart.setOption(option);
	}

	function echarts3() {
		
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('zhuxingtu'));

		var option = {
			
			title: {
				text: '外商投机企业分布',
				textStyle: {
					align: 'left',
					color: '#fff',
					fontSize: 18,
				},

				left: 'left',
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '2%',
				top: '60px',
				right: '5%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'value',
				axisLine: {
					show: false,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
						width: 1,
						type: "solid"
					},
				},

				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,

					show: true,
					splitNumber: 15,
					textStyle: {
						color: "#000",
						fontSize: '12',
					},
				},
			}],
			yAxis: [{
				type: 'category',
				data: ['广东省','江苏省','上海市','浙江省','北京市','辽宁省','山东省','福建省','天津市','湖北省','四川省','河北省','海南省','江西省','河南省','重庆市','湖南省','安徽省','广西壮族自治区','陕西省','吉林省','山西省','内蒙古自治区','黑龙江省','云南省','贵州市','甘肃省','宁夏回族自治区','新疆维吾尔自治区','青海省','西藏自治区'
				],
				inverse:true,
				axisLabel: {
					show: true,
					rotate: 20,
					textStyle: {
						color: "#000",
						fontSize: '14',
					},
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1	)",
						width: 1,
						type: "solid"
					},
				},
				splitLine: {

					lineStyle: {
						color: "rgba(255,255,255,.1)",
					}
				}
			}],
			series: [{
					type: 'bar',
					data: [8727798,8283078,6351187,3065595,2766176,2538335,2349519,2258609,1895210,859892,848770,748962,710736,703777,695012,651920,634033,625708,474030,473382,442396,401448,360959,317372,310381,143803,100313,97280,87315,52807,16699
					],
					barWidth: '80%', //柱子宽度
					// barGap: 1, //柱子之间间距
					itemStyle: {
						normal: {
							color: '#AE00AE',
							opacity: 2,
							barBorderRadius: 5,
						}
					},
					animationEasing: 'cubicIn',
					animationDuration: function(idx) {
						// 越往后的数据延迟越大
						return idx * 100;
					},

				}

			]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function echarts4() {
		var dom = document.getElementById("zx");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		option = {
			color: ['#ffd0ff', '#ff77ff', '#D200D2','#ae00ae','#750075','#460046'],
			title: {
				text: '2000-2018年广东省三类产业生产总值（单位：亿元）'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['第一产业', '第二产业', '第三产业']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			toolbox: {
				feature: {
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				 data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
			},
			yAxis: {
				type: 'value'
			},
			 series: [{
                name: '第一产业',
                type: 'line',
                step: 'start',
                data: [990.3, 1008.46, 1023.87, 1051.6, 1245.42, 1374.59, 1571.36, 1746.23, 1970.23, 1330.48, 2286.86, 2659.83, 2848.91, 3047.51, 3166.67, 3344.82, 3693.58, 3792.4, 3831.44]
            }, {
                name: '第二产业',
                type: 'line',
                step: 'middle',
                data: [4853.06, 5301.94, 5856.89, 7048.05, 8890.29, 10747.25, 13430.62, 15938.2, 18402.64, 13579.37, 22918.07, 26205.3, 27825.3, 29427.49, 31345.77, 32511.49, 34372.46, 38598.55, 40695.15]
            }, {
                name: '第三产业',
                type: 'line',
                step: 'end',
                data: [3662.67, 4246.07, 4793.64, 5350.28, 5903.75, 9579.44, 10966.57, 12989.28, 15323.59, 11508.23, 20267.9, 23808.46, 26393.71, 29688.97, 33279.80, 36956.24, 41446.01, 47488.28, 52751.18]
            }]
		};;
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}

	}


	function echarts5() {
		var dom = document.getElementById("zxx");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		var posList = [
			'left', 'right', 'top', 'bottom',
			'inside',
			'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
			'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
		];

		app.configParameters = {
			rotate: {
				min: -90,
				max: 90
			},
			align: {
				options: {
					left: 'left',
					center: 'center',
					right: 'right'
				}
			},
			verticalAlign: {
				options: {
					top: 'top',
					middle: 'middle',
					bottom: 'bottom'
				}
			},
			position: {
				options: echarts.util.reduce(posList, function(map, pos) {
					map[pos] = pos;
					return map;
				}, {})
			},
			distance: {
				min: 0,
				max: 100
			}
		};

		app.config = {
			rotate: 90,
			align: 'left',
			verticalAlign: 'middle',
			position: 'insideBottom',
			distance: 15,
			onChange: function() {
				var labelOption = {
					normal: {
						rotate: app.config.rotate,
						align: app.config.align,
						verticalAlign: app.config.verticalAlign,
						position: app.config.position,
						distance: app.config.distance
					}
				};
				myChart.setOption({
					series: [{
						label: labelOption
					}, {
						label: labelOption
					}, {
						label: labelOption
					}, {
						label: labelOption
					}]
				});
			}
		};


		var labelOption = {
      normal: {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: "{name|{a}}",
        fontSize: 16,
        rich: {
          name: {
            textBorderColor: "transparent",
            color: "#ffffff"
          }
        }
      }
    };

		option = {
			color: ['#C07ABB', '#A6A6D2', '#81C0C0', '#FFED97', '#CF9E9E'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				data: ['广东', '江苏', '上海', '浙江', '北京']
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				left: 'right',
				top: 'center',
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar', 'stack', 'tiled']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				axisTick: {
					show: false
				},
				data: ['2014', '2015', '2016', '2017', '2018']
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [{
				name: '广东',
				type: 'bar',
				barGap: 0,
				label: labelOption,
				data: [588846367, 542747830, 470284515, 471332655, 490421387]
			}, {
				name: '江苏',
				type: 'bar',
				label: labelOption,
				data: [349803193, 337297685, 325958399, 376801274, 408210443]
			}, {
				name: '上海',
				type: 'bar',
				label: labelOption,
				data: [310115138, 300702596, 286260912, 317358055, 332613672]
			}, {
				name: '浙江',
				type: 'bar',
				label: labelOption,
				data: [96771663, 84142304, 75285914, 80854880, 86987989]
			}, {
				name: '北京',
				type: 'bar',
				label: labelOption,
				data: [79357856, 65161798, 64379739, 65879775, 72570561]
			}]
		};;
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
	}

	function echarts6() {
		var dom = document.getElementById("tb9");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		option = {
			color: ['#FF00FF'],
		   xAxis: {
			   type: 'category',
			   data: ['1990', '1991', '1992', '1993', '1994', '1995', '1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'],
               axisLabel: {
				interval: 0,
			}
		   },
		   yAxis: {
			   type: 'value'
		   },
		   series: [{
			   data: [1, 4, 11, 19, 20, 4, 11,17,7,3,10,8,4,6,12,2,10,25,14,24,71,46,30,1,24,38,49,98,16],
			   type: 'line'
		   }]
	   };
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
	}
	
	function echarts7() {
		var dom = document.getElementById("zxx233");
		debugger
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
        option = {
            color: ['#930093', '#D200D2', '#FF00FF','#FF77FF','#FFA6FF','#FFD0FF'],
            // color: ['#ffd0ff', '#ff77ff', '#D200D2','#ae00ae','#750075','#460046'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['其他服务业', '批发和零售业', '金融业', '交通运输、仓储和邮政业', '房地产业', '住宿和餐饮业']
            },
            series: [{
                name: '行业',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 126017.27,
                    name: '其他服务业'
                }, {
                    value: 77693.75,
                    name: '批发和零售业'
                }, {
                    value: 34343.5,
                    name: '金融业'
                }, {
                    value: 29924.09,
                    name: '交通运输、仓储和邮政业'
                }, {
                    value: 26418.4,
                    name: '房地产业'
                }, {
                    value: 15475.26,
                    name: '住宿和餐饮业'
                }]
            }]
        };;
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
	}
	function echarts8() {
		var dom = document.getElementById("zxx233");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
	    option = {
			color: ['#ffd0ff', '#ff77ff', '#D200D2'],
			legend: {},
			tooltip: {
				trigger: 'axis',
				showContent: false
			},
			dataset: {
				source: [
					['year','2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
					['第一产业', 990.3, 1008.46, 1023.87, 1051.6, 1245.42, 1374.59, 1571.36, 1746.23, 1970.23, 1330.48, 2286.86, 2659.83, 2848.91, 3047.51, 3166.67, 3344.82, 3693.58, 3792.4, 3831.44],
					['第二产业',4853.06, 5301.94, 5856.89, 7048.05, 8890.29, 10747.25, 13430.62, 15938.2, 18402.64, 13579.37, 22918.07, 26205.3, 27825.3, 29427.49, 31345.77, 32511.49, 34372.46, 38598.55, 40695.15],
					['第三产业', 3662.67, 4246.07, 4793.64, 5350.28, 5903.75, 9579.44, 10966.57, 12989.28, 15323.59, 11508.23, 20267.9, 23808.46, 26393.71, 29688.97, 33279.80, 36956.24, 41446.01, 47488.28, 52751.18],
				]
			},
			xAxis: {type: 'category'},
			yAxis: {gridIndex: 0},
			grid: {top: '55%'},
			series: [
				{type: 'line', smooth: true, seriesLayoutBy: 'row'},
				{type: 'line', smooth: true, seriesLayoutBy: 'row'},
				{type: 'line', smooth: true, seriesLayoutBy: 'row'},
				{type: 'line', smooth: true, seriesLayoutBy: 'row'},
				{
					type: 'pie',
					id: 'pie',
					radius: '30%',
					center: ['50%', '25%'],
					label: {
						formatter: '{b}: {@2012} ({d}%)',
						color:'#000000'
					},
					encode: {
						itemName: 'product',
						value: '2012',
						tooltip: '2012'
					}
				}
			]
		};
	
		myChart.on('updateAxisPointer', function (event) {
			var xAxisInfo = event.axesInfo[0];
			if (xAxisInfo) {
				var dimension = xAxisInfo.value + 1;
				myChart.setOption({
					series: {
						id: 'pie',
						label: {
							formatter: '{b}: {@[' + dimension + ']} ({d}%)'
						},
						encode: {
							value: dimension,
							tooltip: dimension
						}
					}
				});
			}
		});
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
	}

})
