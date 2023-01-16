
let planets = []
let last_pressed_key = ""
let should_pause = false

function setup(){
  createCanvas(1000, 1000);
  textFont("helvetica");
  textSize(12);
  let mercury_color = color(211,211,211)
  let venus_color = color(18,100,50)
  let earth_color = color(50,40,255)
  let mars_color = color(255, 30,10)
  let jupiter_color = color(100, 200, 255)
  let saturn_color = color(0, 150, 240)
  let uranus_color = color(20, 200, 120)
  let neptune_color = color(200, 80, 20)
  // Define planet arguments for each
  mercury = new Planet(5, 50, 0.04, mercury_color, "mercury", "3.7m/s2", "88 days", "57,909,227 km", "91,691,000 km")
  venus = new Planet(8, 80, 0.03, venus_color, "venus", "8.87m/s2", "224.7 days", "108,209,475 km", "41,400,000 km")
  earth = new Planet(10, 110, 0.02, earth_color, "earth", "9.807m/s2", "365 days", "149,598,262 km", "0 km")
  mars = new Planet(15, 150, 0.01, mars_color, "mars", "3.721m/s2", "687 days", "227,943,824 km", "78,340,000 km")
  jupiter = new Planet(30, 210, 0.005, jupiter_color, "jupiter", "24.79m/s2", "11.9 years", "778,340,821 km", "628,730,000 km")
  saturn = new Planet(20, 280, 0.003, saturn_color, "saturn", "10.44m/s2", "29.5 years", "1,426,666,422 km", "1,275,000,000 km")
  uranus = new Planet(18, 350, 0.001, uranus_color, "uranus", "8.87m/s2", "84 years", "2,870,658,186 km", "2,723,950,000 km")
  neptune = new Planet(12, 400, 0.0006, neptune_color, "neptune","11.15m/s2", "164.8 years", "4,498,396,441 km", "4,351,400,000 km")
  planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]
  
  
  
}

function draw(){
  background(0)
  push()
  textSize(14)
  textAlign(LEFT)
  fill(255)
  textStyle(BOLD)
  text(" Commands\n", 10, 880)
  textStyle(NORMAL)
  text(" Press SHIFT to play/pause\n Press 'n' for planet's names\n Press 'g' for strength of gravity\n Press 't' for length of orbit in time\n Press 'c' for length of orbit in circumference\n Press 'd' for distance from earth", 10, 900)
  pop()
  
  translate(width/2, height/2)
  push()
  textSize(24)
  textAlign(CENTER)
  fill(255)
  text("Solar system simulation", 0, -450)
  pop()
  
  fill(255,204,0);
  noStroke();
  ellipse(0,0,50,50);
  for (i in planets) {
    planets[i].show_orbit()
    planets[i].show()
    
    // should move the positions in time if pause = false
    if (should_pause == false){
      planets[i].orbit()
    }
    
    planets[i].show_text()
    
    
    
  }
  
}

// function mousePressed(){
//   should_show_text = !should_show_text
// }


function keyPressed(){
  if(keyCode == SHIFT){
    should_pause = !should_pause
  }
  
  
}

function keyTyped(){
  last_pressed_key = key
      

}

class Planet {
  constructor(radius, distance, orbitSpeed, color, name, gravity, length_time, length_circumference, distance_earth) {
    this.radius = radius
    this.angle = random(TWO_PI)
    this.distance = distance
    this.orbitSpeed = orbitSpeed
    this.color = color
    this.name = name
    this.gravity = gravity
    this.length_time = length_time
    this.length_circumference = length_circumference
    this.distance_earth = distance_earth
    
  }
  
  show() {
    push()
    fill(this.color)
    rotate(this.angle)
    translate(this.distance,0)
    ellipse(0,0,this.radius *2) 
    pop()
    
  }
  
  show_orbit(){
    push()
    noFill()
    stroke(255, 80)
    strokeWeight(1)
    ellipse(0,0, this.distance *2)
    pop()
    
  }
  
  
  orbit() {
    this.angle += this.orbitSpeed
    
  }
  
  show_text() {
    if(last_pressed_key == "n" || last_pressed_key == "g" || last_pressed_key == "t" || last_pressed_key == "c" || last_pressed_key == "d"){
      push()
      fill(255)
      let x = this.distance * Math.cos(this.angle)
      let y = this.distance * Math.sin(this.angle)
      translate(x,y)
      // rotate(this.angle)
      // translate(this.distance,0)
      // rotate(-this.angle)
      translate(this.radius + 5, -10)
      if(last_pressed_key === "n"){
        text(this.name, 0,0, 50, 50 )
      }
      else if(last_pressed_key === "g"){
        text(this.gravity, 0,0, 50, 50 )
      }
      else if(last_pressed_key === "t"){
        text(this.length_time, 0, 0, 80, 50 )
      }
      else if(last_pressed_key === "c"){
        text(this.length_circumference, 0, 0, 100, 50 )
      }
      else if(last_pressed_key === "d"){
        text(this.distance_earth, 0, 0, 100, 50)
      }
      pop()
    }
  }


}


  
  
  