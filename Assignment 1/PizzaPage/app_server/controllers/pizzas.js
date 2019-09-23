const homelist = (req, res) => {
    res.render('pizzas-list',
      {
        title: 'Loc8r - find a place to consume pizza',
        pageHeader: {
          title: 'Loc8r',
          strapLine: 'Find places to eat good pizza near you!'
        },
        sidebar: "Pizza is nutritious, \nPizza is the BEST! \nPizza is delicious, \nThe treasure to our quest!",
        pizzaPlaces: [
          {
            name: 'Labellas',
            address: '1223 hillside road Amarillo TX 79119',
            rating: 4,
            facilities: ['Pizza', 'Fried Food', 'More Pizza'],
            distance: '100m'
          },
          {
            name: 'Dominoes',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
          },
          {
            name: 'Pizza Hut',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
          }
        ]
      }
    );
  };
  
  const pizzaInfo = (req, res) => {
    res.render('pizza-info',
      {
        title: 'LaBellas',
         pageHeader: {
          title: 'Loc8r',
        },
        sidebar: {
          context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
          name: 'LaBellas',
          address: '1223 hillside road Amarillo TX 79119',
          rating: 4,
          facilities: ['Pizza', 'Fried Food', 'More Pizza'],
          coords: {lat: 51.455041, lng: -0.9690884},
          openingTimes: [
            {
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
            },
            {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
            },
            {
              days: 'Sunday',
              closed: true
            }
          ],
          reviews: [
            {
              author: 'Jimi Hendrix',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
            },
            {
              author: 'Phelps Merrell',
              rating: 2,
              timestamp: '16 June 2013',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }
          ]
        }
      }
    );
  };
  
  const pizzaReview = (req, res) => {
    res.render('location-pizza-review-form',
      {
        title: 'Review Starcups on Loc8r' ,
        pageHeader: { title: 'Review Starcups' }
      }
    );
  };
  
  module.exports = {
    homelist,
    pizzaInfo,
    pizzaReview
  };