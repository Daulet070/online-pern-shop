import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card style={{width: '150', cursor: 'pointer'}} border={"light"}>
                <Image width={100 + '%'} height={150} src={device.img} />
                <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
                    <span>Samsung...</span>
                    <div>
                        <div>{device.rating}</div>
                    </div>
                </div>
                <h3>{device.name}</h3>
            </Card>
        </Col>
    );
};

export default DeviceItem;