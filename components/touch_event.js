// Courtesy of https://github.com/jerrybendy/react-touch-events
// MIT License

// Copyright (c) 2016 Jerry Bendy

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { Component, Children, createElement, cloneElement } from "react";
import { node, number, func } from 'prop-types';


function touchX(event) {
  if(event.type.indexOf('mouse') !== -1){
    return event.clientX;
  }
  return event.touches[0].clientX;
}

function touchY(event) {
  if(event.type.indexOf('mouse') !== -1){
    return event.clientY;
  }
  return event.touches[0].clientY;
}

class ReactTouchEvents extends Component {
  touchStarted = false;
  touchMoved = false;
  swipeOutBounded = false;
  touchStartTime = 0;
  lastTouchStartTime = 0;
  lastTouchEndTime = 0;

  startX = 0;
  startY = 0;
  currentX = 0;
  currentY = 0;

  el = null;

  setElRef = (element) => {
    this.el = element;
  }

  touchStartEvent = (event) => {
    const isTouchEvent = event.type.indexOf('touch') >= 0;
    const isMouseEvent = event.type.indexOf('mouse') >= 0;

    if (isTouchEvent) {
      this.lastTouchStartTime = event.timeStamp;
    }

    if (isMouseEvent && this.lastTouchStartTime && event.timeStamp - this.lastTouchStartTime < 350) {
      return;
    }

    if (this.touchStarted) {
      return;
    }

    this.addTouchClass();

    this.touchStarted = true;
    this.touchMoved = false;
    this.swipeOutBounded = false;

    this.startX = touchX(event);
    this.startY = touchY(event);
    this.currentX = this.currentY = 0;

    this.touchStartTime = event.timeStamp;
  }

  touchMoveEvent = (event) => {
    this.currentX = touchX(event);
    this.currentY = touchY(event);

    if (!this.touchMoved) {
      var tapTolerance = this.props.tapTolerance;

      this.touchMoved = Math.abs(this.startX - this.currentX) > tapTolerance ||
          Math.abs(this.startY - this.currentY) > tapTolerance;

    } else if (!this.swipeOutBounded) {
      var swipeOutBounded = this.props.swipeTolerance;

      this.swipeOutBounded = Math.abs(this.startX - this.currentX) > swipeOutBounded &&
          Math.abs(this.startY - this.currentY) > swipeOutBounded;
    }
  }

  touchCancelEvent = () => {
    this.removeTouchClass();

    this.touchStarted = this.touchMoved = false;
    this.startX = this.startY = 0;
  }

  touchEndEvent = (event) => {
    const isTouchEvent = event.type.indexOf('touch') >= 0;
    const isMouseEvent = event.type.indexOf('mouse') >= 0;

    if (isTouchEvent) {
      this.lastTouchEndTime = event.timeStamp;
    }

    this.touchStarted = false;

    this.removeTouchClass();

    if (isMouseEvent && this.lastTouchEndTime && event.timeStamp - this.lastTouchEndTime < 350) {
      return;
    }

    if (!this.touchMoved) {
      this.triggerEvent(event, 'tap')

    } else if (!this.swipeOutBounded) {
      const swipeOutBounded = this.props.swipeTolerance;
      let direction;

      if (Math.abs(this.startX - this.currentX) < swipeOutBounded) {
        direction = this.startY > this.currentY ? 'top' : 'bottom';

      } else {
        direction = this.startX > this.currentX ? 'left' : 'right';
      }

      this.triggerEvent(event, 'swipe', direction)
    }
  }

  mouseEnterEvent = () => {
    this.addTouchClass()
  }

  mouseLeaveEvent = () => {
    this.removeTouchClass()
  }

  triggerEvent = (event, eventType, param) => {
    switch (eventType) {
      case 'tap':
        this.props.onTap && typeof this.props.onTap === 'function' && this.props.onTap(event);
        break;

      case 'swipe':
        this.props.onSwipe && typeof this.props.onSwipe === 'function' && this.props.onSwipe(event, param);
    }
  }

  addTouchClass = () => {
    if (this.el) {
      const className = this.props.touchClass;
      className && this.el.classList.add(className);
    }
  }

  removeTouchClass = () => {
    if (this.el) {
      const className = this.props.touchClass;
      className && this.el.classList.remove(className);
    }
  }

  render() {
    const children = this.props.children;
    const element = children ? Children.only(children) : createElement("button", null);

    const props = {
      ref: this.setElRef,

      onTouchStart: this.touchStartEvent,
      onTouchMove: this.touchMoveEvent,
      onTouchCancel: this.touchCancelEvent,
      onTouchEnd: this.touchEndEvent,
    }

    if (!this.props.disableClick) {
      props.onMouseDown = this.touchStartEvent;
      props.onMouseMove = this.touchMoveEvent;
      props.onMouseUp = this.touchEndEvent;
      props.onMouseEnter = this.mouseEnterEvent;
      props.onMouseLeave = this.mouseLeaveEvent;
    }

    return cloneElement(element, props);
  }
}

ReactTouchEvents.defaultProps = {
  disableClick: false,
  tapTolerance: 10,
  swipeTolerance: 30,
  touchClass: '',
};

ReactTouchEvents.propTypes = {
  children: node,
  tapTolerance: number,
  swipeTolerance: number,
  onTap: func,
  onSwipe: func,
};


export default ReactTouchEvents;