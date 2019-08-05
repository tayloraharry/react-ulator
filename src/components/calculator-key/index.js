import React from 'react';
import PointTarget from 'react-point';

class CalculatorKey extends React.Component {
  render() {
    // const PointTarget = React.PointTarget;
    const { onPress, className, ...props } = this.props

    return (
      <PointTarget onPoint={onPress}>
        <button className={`calculator-key ${className}`} {...props} />
      </PointTarget>
    )
  }
}

export default CalculatorKey;