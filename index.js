const card = document.querySelector('.card');
const social = document.querySelectorAll('.social-icons > li');
const glow = document.querySelector('#glow');
const newMessage = document.querySelector('.new-message');

card.addEventListener('click', function () {
  if (!card.classList.contains('open')) {
    throwConfetti();
  }
  card.classList.toggle('open');
  glow.classList.toggle('animated-border-box-glow');
});

social.forEach(function (icon) {
  icon.addEventListener('click', function () {
    card.classList.toggle('open');
    glow.classList.toggle('animated-border-box-glow');
  });
});

newMessage.addEventListener('click', function () {
  glow.classList.toggle('animated-border-box-glow');
  card.classList.toggle('open');
});

Parse.initialize(
  'kWIFzd8Jk4aqP0M29eRiyGIAg9ddUZOa0SWM0clb',
  'OS3r0UHwP43mWIW6a6aHpCmoQaYwjjGRZhZNYIdi'
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';

// Create a new User
async function createParseUser() {
  // Creates a new Parse "User" object, which is created by default in your Parse app
  let user = new Parse.User();
  // Set the input values to the new "User" object
  user.set('username', document.getElementById('username').value);
  user.set('email', document.getElementById('email').value);
  user.set('password', document.getElementById('password').value);
  try {
    // Call the save method, which returns the saved object if successful
    user = await user.save();
    if (user !== null) {
      // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
      alert(`New object created with success! ObjectId: ${user.id}, ${user.get('username')}`);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

// Add on click listener to call the create parse user function
document.getElementById('createButton').addEventListener('click', async function () {
  createParseUser();
});

function throwConfetti() {
  tsParticles.load('tsparticles', {
    // particles: {
    //   color: { value: ['#ff0000', '#00ff00', '#0000ff'] },
    //   shapes: ['circle', 'square', 'triangle'],
    //   count: 100
    // },
    modes: {
      emitters: {
        direction: 'none',
        spawnColor: {
          value: '#ff0000',
          animation: {
            h: {
              enable: true,
              offset: {
                min: -1.4,
                max: 1.4
              },
              speed: 0.1,
              sync: false
            },
            l: {
              enable: true,
              offset: {
                min: 20,
                max: 80
              },
              speed: 0,
              sync: false
            }
          }
        },
        life: {
          count: 1,
          duration: 0.1,
          delay: 0.6
        },
        rate: {
          delay: 0.1,
          quantity: 100
        },
        size: {
          width: 0,
          height: 0
        }
      }
    },
    particles: {
      number: {
        value: 75
      },
      color: {
        value: '#f00'
      },
      shape: {
        type: ['circle', 'square', 'polygon'],
        options: {
          polygon: {
            sides: 6
          }
        }
      },
      opacity: {
        value: { min: 0, max: 1 },
        animation: {
          enable: true,
          speed: 1,
          startValue: 'max',
          destroy: 'min'
        }
      },
      size: {
        value: { min: 3, max: 7 }
      },
      life: {
        duration: {
          sync: true,
          value: 7
        },
        count: 1
      },
      move: {
        enable: true,
        gravity: {
          enable: true
        },
        drift: {
          min: -2,
          max: 2
        },
        speed: { min: 10, max: 30 },
        decay: 0.1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'destroy',
          top: 'none'
        }
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        direction: 'random',
        move: true,
        animation: {
          enable: true,
          speed: 60
        }
      },
      tilt: {
        direction: 'random',
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360
        },
        animation: {
          enable: true,
          speed: 60
        }
      },
      roll: {
        darken: {
          enable: true,
          value: 25
        },
        enable: true,
        speed: {
          min: 15,
          max: 25
        }
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15
        }
      }
    },
    detectRetina: true,
    preset: 'confetti'
  });
}
