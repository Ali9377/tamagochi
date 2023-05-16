const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 3,
    getStatus: function() {
            console.log(`Имя: ${this.name}`)
        if(tamogotchi.meal < 3) {
            console.log('Голод: ' + 'Жрать хочу!' + `(${this.meal})`)
        } else { 
            console.log('Голод: ' + 'Я не голоден' + `(${this.meal})`)
        }
        if(tamogotchi.energy < 3) {
            console.log('Выносливость: ' + 'Спать хочу...' + `(${this.energy})`)
        } else {
            console.log('Выносливость: ' + 'Я ГОТОВ ПРОБЕЖАТЬ МАРАФОН!!!' + `(${this.energy})`)
        }
        if(tamogotchi.mood < 3) {
            console.log('Настроение: ' + 'Скучняк...' + `(${this.mood})`)
        } else {
            console.log('Настроение: ' + 'Весело!' + `(${this.mood})`)
        }
        if(tamogotchi.meal <= 0 || tamogotchi.energy <= 0 || tamogotchi.mood <= 0) {
            console.log('Поздравляю! Ваш питомец умер...')
        }
   },
    setName: function(newName) {
        this.name = newName  
   },
   toEat: function() {
    if(tamogotchi.meal <= 4) {
        this.meal++ 
        this.mood--
    }
        
   },
   toSleep: function() {
    if(tamogotchi.energy <= 4) {
        this.energy++
        this.meal--
    }
   },
   toGame: function() {
    if(tamogotchi.mood <= 4) {
        this.mood++
        this.energy--
    }
   },
  }
  
  tamogotchi.setName('intocode')
  tamogotchi.toEat()
  console.log(tamogotchi.getStatus())
