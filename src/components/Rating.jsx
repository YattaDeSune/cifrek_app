import React from 'react';
import {Tabs} from "./Tabs";
import {Header} from "./Header";

const Rating = () => {
    return (
        <div>

            <Header name={"Рейтинг"} />
            <p>рейтинг</p>
            <Tabs schedule={false} electives={false} rating={true} teachers={false} profile={false}/>

        </div>
    );
};

export {Rating};