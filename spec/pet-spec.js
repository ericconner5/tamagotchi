import Pet from './../src/pet';

describe('Pet', function() {

  let kevin;

  beforeEach(function() {
    jasmine.clock().install();
    kevin = new Pet("kevin", "portland");

    kevin.daysPassed();
    kevin.dayToNight();
    kevin.getSleepy();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("should name your pet what you put as the argument", function() {
    const actual = kevin.name;
    const control = "kevin";
    expect(actual).toEqual(control);
  });

  it("should be born with a hunger of 8", function() {
    const actual = kevin.hunger;
    const control = 8;
    expect(actual).toEqual(control);
  });

  it("should have hunger 6 if fed right after birth", function() {
    kevin.feed("bread");
    const actual = kevin.hunger;
    const control = 6;
    expect(actual).toEqual(control);
  });

  it("should make a baby sick to drink coffee", function() {
    kevin.feed("coffee");
    const actual = kevin.hunger;
    const control = 13;
    expect(actual).toEqual(control);
  });

  it("should be day 1 after one minute", function() {
    jasmine.clock().tick(60001);
    const actual = kevin.age;
    const control = 1;
    expect(actual).toEqual(control);
  });

  //the timing here is weird, maybe wrong?
  it("should make the hunger counter increase by 1 after each day", function() {
    jasmine.clock().tick(120001);
    const actual = kevin.hunger;
    const control = 10;
    expect(actual).toEqual(control);
  });

  it("should become night after 30 seconds", function() {
    jasmine.clock().tick(30001);
    const actual = kevin.night;
    const control = true;
    expect(actual).toEqual(control);
  });

  it("should get 1 unit less happy after 40 seconds", function() {
    jasmine.clock().tick(40001);
    const actual = kevin.happiness;
    const control = 4;
    expect(actual).toEqual(control);
  });

  it("should let you turn off the light", function() {
    kevin.lightsOut();
    const actual = kevin.lightOn;
    const control = false;
    expect(actual).toEqual(control);
  });

  it("should maintain kevin's happiness if the lights are off and he's sleepy", function() {
    jasmine.clock().tick(30001);
    kevin.lightsOut();
    jasmine.clock().tick(60001);
    const actual = kevin.happiness;
    const control = 5;
    expect(actual).toEqual(control);
  });

  it("should check the pets local weather for temperature in Kelvins", function() {
    kevin.getKelvin();
    setTimeout(function () {
      const actual = kevin.kelvin;
      const control = 289.68;
      console.log(`kevin is ${kevin}`)
      expect(actual).toEqual(control);

    }, 1000);
  });

});
