import React from "react";
import ScrollUpButton from "react-scroll-up-button";

export default class ScrollUp extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
        style={{backgroundColor: 'rgba(244, 67, 54, 0.7)', borderRadius: '10px'}}>
        </ScrollUpButton>
      </div>
    );
  }
}
