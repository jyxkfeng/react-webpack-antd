import React from 'react';

import { Card, Col, Row } from 'antd';

export default React.createClass({
	render(){
		return(
			
			<div style={{ background: '#ECECEC', padding: '30px' }}>
			    <Row>
			      <Col span="8">
			         <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
					    <div className="custom-image">
					      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
					    </div>
					    <div className="custom-card">
					      <h3>Europe Street beat</h3>
					      <p>www.instagram.com</p>
					    </div>
					  </Card>
			      </Col>
			      <Col span="8">
			        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
					    <div className="custom-image">
					      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
					    </div>
					    <div className="custom-card">
					      <h3>Europe Street beat</h3>
					      <p>www.instagram.com</p>
					    </div>
					  </Card>
			      </Col>
			      <Col span="8">
			         <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
						    <div className="custom-image">
						      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
						    </div>
						    <div className="custom-card">
						      <h3>Europe Street beat</h3>
						      <p>www.instagram.com</p>
						    </div>
					</Card>
			      </Col>
			    </Row>
			  </div>
		 
		 
		

		  
  		)
	}
})
