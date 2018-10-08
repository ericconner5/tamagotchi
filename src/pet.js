export default class Pet {
  constructor(name) {
    if (name === undefined) {
      console.log('error: no name');
      return;
    } else {
      this.name = name;
      this.hunger = 8;
      this.happiness = 5;
      this.lifecycle = "baby";
      this.age = 0;
      this.night = false;
      this.lightOn = true;
    }
  };

  feed(food) {
    if (food === 'bread') {
      this.hunger -= 2;
    } else if (food === 'apple') {
      this.hunger -= 1;
    } else if (food === 'hotdog') {
      this.hunger -= 4;
    } else if (food === 'coffee') {
      if (this.lifecycle === "baby") {
        this.hunger += 5;
      } else if (this.lifecycle != "baby") {
        this.hunger -= 5;
      } else {
        console.log("this pet has a weird lifecycle");
      }
    } else {
      return "that is not a food";
    }

  };

  dayToNight() {
    setInterval(() => {
      if (this.night === false) {
        this.night = true;
      } else if (this.night === true) {
        this.night = false;
      } else {
        console.log('dayToNight is broken');
      }
    }, 30000);
  };

  daysPassed() {
    setInterval(() => {
      this.age ++;
      this.hunger ++;
    }, 60000);
  };

  getSleepy() {
    setInterval(() => {
      if (this.night === true) {
        setInterval(() => {
          if (this.night === false) {
            return;
          } else {
            if (this.lightOn === true) {
              this.happiness --;
            } else {
              this.happiness = this.happiness;
            }
          }
        }, 9999);
      } else if (this.night === false) {
        return;
      }
    }, 30000);
  };

  lightsOut() {
    this.lightOn = false;
  };

  // cleanUp() {
  //
  // };
  //
  //
  // play() {
  //
  // };
  //
  // age() {
  //
  // };
  //
  // sick() {
  //
  // }
  //
  // die() {
  //
  // }
}
