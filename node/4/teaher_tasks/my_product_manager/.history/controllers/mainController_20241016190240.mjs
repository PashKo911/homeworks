class MainController {
  static getMeal(age) {
    let res
    if (age < 7) res = 'Каша'
    else if (age < 18) res = 'Голубці'
    else if (age < 21) res = 'Пиво'
    else res = 'Шовдарь !!!'
    return res
  }

  static mealSelector(req, res) {
    const age = parseInt(req.params['age'])

    res.render('meals', {
      title: 'Що на вечерю!',
      mealTitle: MainController.getMeal(age),
      age,
      wishes: ['ПЕРЕМОГА', 'МИР', 'ЗДОРОВ"Я'],
    })
  }

  static info(req, res) {
    res.render('index', {
      title: 'Express',
      ownerName: 'Ivan',
      age: 12,
    })
  }
}

export default MainController
