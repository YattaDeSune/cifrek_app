import React from 'react';
import {Tabs} from "./Tabs";
import {Header} from "./Header";

const Profile = () => {
    return (
        <div>

            <Header name={"Профиль"} />
            <p>профиль</p>
            <Tabs schedule={false} electives={false} rating={false} teachers={false} profile={true}/>

        </div>
    );
};

export {Profile};