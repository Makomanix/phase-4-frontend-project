import React from "react";

export default function UserProfile ({user}) {
    const {name, age, country, bio, car} = user

    return (
        <div>
            {age}
            {name}
            {bio}
            {car}
            {country}
        </div>
    )
}