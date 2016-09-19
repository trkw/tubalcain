import React from "react"
const isBrowser = typeof window !== "undefined"
const p5 = isBrowser ? require("p5/lib/p5.min") : undefined

const sketch = function(p) {
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = function() {
    p.background(55, 110)
    p.noStroke()
    p.fill(255)
    p.ellipse(p.mouseX, p.mouseY, 80, 80)
  }
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }
}

export default class Cover extends React.Component {
  componentDidMount() {
    new p5(sketch)
  }

  render() {
    return <div />
  }
}
