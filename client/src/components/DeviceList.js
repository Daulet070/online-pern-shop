import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '..';
import DeviceItem from './DeviceItem';

const DeviceList = observer((props) => {
    const {device} = useContext(Context);

    return (
        <Row className="d-flex pt-3">
            {device.devices.map(device => 
                <DeviceItem key={device.id} device={device} /> 
            )}
        </Row>
    );
});

export default DeviceList;