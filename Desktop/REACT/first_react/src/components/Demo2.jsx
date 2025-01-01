import React from "react";
class Demo2 extends React.Component
{
    render()
    {
        return(
            <div>
                <h2> Good morning </h2>
                <p>{this.props.date}</p>
            </div>
        );
    }

}
export default Demo2;