class Hero {
  constructor(name,health,mana,defense) {
    this.name = name
    this.health = health
    this.mana = mana
    this.defense = defense
  }
}

class Assassin extends Hero{
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense)
  }

  skill() {
    console.log('Ciat..! Serangan tanpa bayangan..');
  }
}

class Knight extends Hero{
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense)
  }

  skill() {
    console.log('Lemparan Perisai Suci');
  }
}

class Mage extends Hero{
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense)
  }

  skill() {
    console.log('Terimalah serangan sihir ini..');
  }
}

class SummonHero {
  static acak() {
    return Math.ceil(Math.random()*100)
  }

  static panggil() {
    let random = this.acak()
    // let random = 85
    if(random >= 85){
      return new Mage('Mage',1130,603,231)
    }
    if(random >= 51 && random <= 84){
      return new Knight('Knight',3213,126,431)
    }
    if(random <= 50){
      return new Assassin('Assassin',1200,543,431)
    }
  }
}

console.log(SummonHero.panggil())
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//Mage {name: Mage, health: 1130, mana: 603, defense: 231}

SummonHero.panggil().skill()
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//‘Assassin mengeluarkan skill: Ciat..! Serangan tanpa bayangan..’
