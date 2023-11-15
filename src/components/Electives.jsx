import React from 'react';

import {Tabs} from "./Tabs";
import {Header} from "./Header";

const Electives = () => {

    return (
        <div>

            <Header name={"Факультативы"} />
            <p>факультативы</p>
            <Tabs schedule={false} electives={true} rating={false} teachers={false} profile={false}/>

        </div>
    );
};

export {Electives};