import React from 'react';
import {Tabs} from "./Tabs";
import {Header} from "./Header";

const Teachers = () => {
    return (
        <div>

            <Header name={"Преподы"} />
            <p>преподы</p>
            <Tabs schedule={false} electives={false} rating={false} teachers={true} profile={false}/>

        </div>
    );
};

export {Teachers};