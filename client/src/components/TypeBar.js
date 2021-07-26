import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Context } from '..';

const TypeBar = observer((props) => {
    const {device} = useContext(Context);
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroupItem 
                    key={type.id}
                    style={{cursor: 'pointer'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                >
                    {type.name}
                </ListGroupItem>
                )}
        </ListGroup>
    );
})

export default TypeBar;