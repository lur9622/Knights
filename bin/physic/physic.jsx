import Matter from 'matter-js'

export default class Physic {
  constructor() {
      this.Engine = Matter.Engine
      this.World = Matter.World
      this.Bodies = Matter.Bodies
      this.RenderEngine = this.Engine.create()
      this.RenderEngine.world.gravity.y = 0

      this.bindMethods(this);
      let boxA = this.Bodies.rectangle(400, 200, 80, 80)
      this.elements = []
      this.elements.push(boxA);
      this.World.add(this.RenderEngine.world, boxA)
      this.Engine.run(this.RenderEngine)
      //setInterval(this.loop, 17)
  }
  loop(){
    //console.log(this.elements)
  }
  bindMethods(that){
    this.loop = this.loop.bind(that);
  }
  addToWorld(el){
    this.elements.push(el);
    this.World.add (
      this.RenderEngine.world , el
    )
  }
}
