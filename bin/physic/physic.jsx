import Matter from 'matter-js'

export default class Physic {
  constructor() {
      this.Engine = Matter.Engine
      this.World = Matter.World
      this.Bodies = Matter.Bodies
      this.RenderEngine = this.Engine.create()
      this.Engine.run(this.RenderEngine)
      this.RenderEngine.timing.timeScale = 0.8
  }
  addToWorld(element) {
    this.World.add (
      this.RenderEngine.world ,
      element
    )
  }
}
