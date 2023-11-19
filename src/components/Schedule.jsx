import React from 'react';
import {Tabs} from "./Tabs";
import {Header} from "./Header";
import {ScheduleBody} from "./ScheduleBody";

const Schedule = () => {

    return (
        <div>

            <Header name={"Расписание"} />
            <ScheduleBody />
            <Tabs schedule={true} electives={false} rating={false} teachers={false} profile={false}/>

        </div>
    );
};

export {Schedule};