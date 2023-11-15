import React from 'react';
import {Tabs} from "./Tabs";
import {Header} from "./Header";

const Schedule = () => {

    return (
        <div>

            <Header name={"Расписание"} />
            <p>расписание</p>
            <Tabs schedule={true} electives={false} rating={false} teachers={false} profile={false}/>

        </div>
    );
};

export {Schedule};