import React from 'react';
import { Table, Icon } from 'antd';



export default React.createClass({
	
	getInitialState: function() {
    return {columns:[{
					  title: '日期',
					  dataIndex: 'stat_date',
					  sorter: (a, b) => a.stat_date - b.stat_date,
					}, {
					  title: '总PV',
					  dataIndex: 'total_pv',
					   sorter: (a, b) => a.total_pv - b.total_pv,
					  
					}, {
					  title: '总IP',
					  dataIndex: 'total_uv',
					}, {
					  title: '总流水',
					  dataIndex:'total_income'
					},{
					  title: 'IP值',
					  dataIndex:'total_uv_value',
					  render:function(text){
					  	return '¥'+text.toFixed(4)
					  } 
					},{
					  title: 'IP转换',
					  dataIndex:'total_uv_rate',
					  render:function(text){
					  	return (text*1000).toFixed(2)+'%'
					  }
					
					},{
					  title: '苹果pv',
					  dataIndex:'ios_pv',
					  render:function(text,data){
					  	return <a href={data.iosurl}>{text}</a>;
					  }
					},{
					  title: '苹果总流水',
					  dataIndex:'ios_uv'			
					},{
					  title: 'IP值',
					  dataIndex:'ios_income',
					   render:function(text){
					  	return '¥'+text.toFixed(4)
					  } 
					},{
					  title: 'IP转换',
					  dataIndex:'ios_uv_value',
					  render:function(text){
					  	return (text*1000).toFixed(2)+'%'
					  }
					
					},{
					  title: '安卓PV',
					  dataIndex:'android_pv',
					   render:function(text,data){
					  	return <a href={data.androidurl}>{text}</a>;
					  }
					},{
					  title: '安卓IP',
					  dataIndex:'android_uv'
					
					},{
					  title: '安卓总流水',
					  dataIndex:'android_income'		
					},{
					  title: 'IP值',
					  dataIndex:'android_uv_value',
					   render:function(text){
					  	return '¥'+text.toFixed(4)
					  } 
					},{
					  title: 'IP转换',
					  dataIndex:'android_uv_rate',
					  render:function(text){
					  	return (text*1000).toFixed(2)+'%'
					  }
					}],
			data: []
		   }
  },
    myfilter:function(data){
    	let arr=[];
    	for(let i=0;i<data.length;i++){
    		 data[i].iosurl="#/tablesdetail/ios?time="+data[i].stat_date;
    		 data[i].androidurl="#/tablesdetail/android?time="+data[i].stat_date;
    		arr.push(data[i]);
    	}
    	console.log(arr);
    	return arr;
    	
    	
    },	
  componentDidMount: function(event) {
  		 let _this=this;
		 fetch('http://139.129.205.45:10558/api/getPageViewOfEveryDay?username=admin&start_date=&end_date=&_='+new Date().getTime())
		 .then(function(res) {
			    if (res.ok) {
				        res.json().then(function(obj) {
				            // Get the JSON
				            
				            console.log(obj.data);
				            _this.myfilter(obj.data);
				             _this.setState({data:obj.data})
				        })
   					}
						}, function(ex) {
							    console.log(ex)
						})

  },
    

	
	render(){
		return(
			<Table columns={this.state.columns} dataSource={this.state.data} />
		)
	}
})

