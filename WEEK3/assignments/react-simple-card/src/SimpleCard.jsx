
import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";

class SimpleCard extends Component {
  render() {
    const { title, description, imageUrl } = this.props;

    return (
      <div className="max-w-xl w-full border border-gray-300 rounded-md overflow-hidden shadow-sm bg-white">
        <div className="flex">
      
          <div className="flex-shrink-0 p-3 bg-yellow-50">
            <Image src={imageUrl} alt={title} />
          </div>

        
          <div className="flex-1 p-4">
            <Title text={title} />
            <Description text={description} />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleCard;
