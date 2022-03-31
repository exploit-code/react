const defaultState = {
  chats: [
    { id: 1, status: 'status', name: 'Alex', avatar: '/img/avatar/1.jpeg', message: 'description' },
    { id: 2, status: 'status', name: 'Max', avatar: '/img/avatar/1.jpeg', message: 'description' },
    { id: 3, status: 'status', name: 'Din', avatar: '/img/avatar/1.jpeg', message: 'description' },
    { id: 4, status: 'status', name: 'Sam', avatar: '/img/avatar/1.jpeg', message: 'description' },
    { id: 5, status: 'status', name: 'Ben', avatar: '/img/avatar/1.jpeg', message: 'description' },
  ],
  chatMessages: {
    1: [
      'this tutorial is exactly what i need and always searched for, finally after years of googling MVC there is a solid tutorial, thank you.',
      'It is such an awesome series, you will learn many things on the way. This series will start your intermediate phase from beginners. ',
      'The code quality is awesome. From last year I did a couple of MVC frameworks but none is comparable to this series.'
    ],
    2: [
      'This is excellent! Programming is a hands-on experience. By building your own mini MVC framework you get to grasp how larger frameworks',
      'Thanks a lot for this very good video !'
    ],
    3: [
      'This is superb. Fast paced & does exactly what it says on the tin. Thank you very much for creating and sharing this for free, it is absolutely invaluable and you are very generous!',
    ],
    4: [
      'Please can you do a tutorial on how to host this on cPanel: I\'m having issues hosting it',
      'I just learned python and now i want to become an expert. This channel helped alot.',
      'Thank you so much for this tutorial it is really awesome.'
    ],
    5: [
      'If possible could you answer this question?',
      'How did you learn all of this, is it over the years or is there some kind of documentation that you used.'
    ]
  },
  profile: {
    name: 'John',
    age: 23,
    online: true
  },
  news: [],
  newsAddError: false

}

export default defaultState