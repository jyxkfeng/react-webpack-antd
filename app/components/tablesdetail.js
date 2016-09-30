import React from 'react';
import { Table, Icon } from 'antd';


export default React.createClass({
	
	getInitialState: function() {
    return {columns:[{
					  title: '渠道id',
					  dataIndex: 'channel_id',
					  sorter: (a, b) => a.stat_date - b.stat_date,
					}, {
					  title: '前一天pv',
					  dataIndex: 'the_day_before_pv',
					   sorter: (a, b) => a.total_pv - b.total_pv,
					  
					}, {
					  title: '当天pv',
					  dataIndex: 'the_day_pv',
					}, {
					  title: 'pv下降比',
					  dataIndex:'the_day_pv_gap'
					},{
					  title: '前一天ip',
					  dataIndex:'the_day_before_ip',
					  render:function(text){
					  	return '¥'+text.toFixed(4)
					  } 
					},{
					  title: '当天ip',
					  dataIndex:'the_day_ip',
					  render:function(text){
					  	return (text*1000).toFixed(2)+'%'
					  }
					
					},{
					  title: 'ip下降比',
					  dataIndex:'the_day_ip_gap'			
					},{
					  title: '前一天支付',
					  dataIndex:'the_day_before_paid'			
					},{
					  title: '当天支付',
					  dataIndex:'the_day_paid',
					   render:function(text){
					  	return '¥'+text.toFixed(4)
					  } 
					},{
					  title: '转换下降比',
					  dataIndex:'the_day_paid_gap',
					  render:function(text){
					  	return (text*1000).toFixed(2)+'%'
					  }
					
					},{
					  title: '操作',
					  	
					  }
					],
			data: [],
			ipdownvalue:-30
		   }
  },

  componentDidMount: function(event) {
  	
  		 let _this=this;
  		 console.log( _this.props.routeParams);
  		 console.log(_this.props.location.query);
  		 var name="admin";
		 fetch('http://139.129.205.45:10558/api/getInfluxData?platform='+this.props.routeParams.sb+'&date='+_this.props.location.query.time+'&user='+name)
		 .then(function(res) {
			    if (res.ok) {
				        res.json().then(function(obj) {
				            // Get the JSON
				            
				            console.log(obj.data);
				             _this.setState({data:obj.rows})
				        })
   					}
						}, function(ex) {
							    console.log(ex)
						})

  },
   handleKeyup: function(e) {
   	var keycode = window.event?e.keyCode:e.which;
				if(keycode==13){
	               console.log('回车了！');
	               console.log(this.event)
	             }
   
  },
	
	
	render(){
		return(
			<div>
			<div className="menusbox clearfix">
				<div className="fl">
						<span className="tt" >ip下降比小于</span>
					</div>
				<div className="fl">
						<input type="text" name="" id=""     onKeyUp={this.handleKeyup} />
					</div>
			<div className="fl">
						<span className="tt">将高亮背景</span>
					</div>	
			</div>		
			<Table columns={this.state.columns} dataSource={this.state.data}  /></div>
		)
	}
})
