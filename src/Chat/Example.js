import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

const Example = (props) => {
    return (
        <>
                    <div>
                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
                    </div>
        </>
    );
}

export default Example;