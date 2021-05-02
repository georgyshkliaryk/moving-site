import React from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

export default class ScrollUp extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
        style={{backgroundColor: 'rgba(64, 79, 214, 0.7)', borderRadius: '10px'}}>
        </ScrollUpButton>
      </div>
    );
  }
}
