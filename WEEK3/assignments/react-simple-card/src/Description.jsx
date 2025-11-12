import React, { Component } from "react";



class Description extends Component {
    render (){
        return ( 
                    <p className="text-gray-600">
                    {this.props.text}
                    </p>

        );

    }
}

export default Description;