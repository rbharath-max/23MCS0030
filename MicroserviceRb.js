const https = require('https');
const windowSize = 10; 
const timeout = 500; 

functionisPrime(num) {
  
  return Math.random() < 0.5; 
}

function isEven(num) {

  return num % 2 === 0;
}

async function fetchNumber(type) {
  let url;
  switch (type) {
    case 'p':
      const windowSize = 10; 
      const timeout = 500; 
      
      functionisPrime(num) {
    
        return Math.random() < 0.5;
      }
      
      function isEven(num) {
        
        return num % 2 === 0;
      }
      
      async function fetchNumber(type) {
        let url;
        switch (type) {
          case 'p':
            url = 'http://20.244.56.144/test/primes'; 
            break;
          case 'f':
            url = 'http:20.244.56.144/test/fibo'; 
            break;
          case 'e':
            url = 'http://20.244.56.144/test/even'; 
            break;
          case 'r':
            url = 'http://20.244.56.144/test/rand'; 
            break;
          default:
            return null;
        }
      
        return new Promise((resolve, reject) => {
          const req = https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
              data += chunk;
            });
            res.on('end', () => {
              try {
                const number = JSON.parse(data);
                resolve(number);
              } catch (err) {
                reject(err);
              }
            });
          });
      
          req.on('timeout', () => {
            reject(new Error('Request timed out'));
          });
          req.setTimeout(timeout);
      
          req.on('error', (err) => {
            reject(err);
          });
        });
      }
      
      function calculateAverage(numbers) {
        if (numbers.length === 0) {
          return null;
        }
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
      }
      
      let window = []; 
      
      const express = require('express');
      const app = express();
      
      app.get('/numbers/:numberid', async (req, res) => {
        const numberId = req.params.numberid;
        const type = numberId[0];
      
        if (!['p', 'f', 'e', 'r'].includes(type)) {
          return res.status(400).send('Invalid number ID format');
        }
      
        let newNumber;
        try {
          newNumber = await fetchNumber(type);
        } catch (err) {
          console.error('Error fetching number:', err);
          return res.status(500).send('Error fetching number');
        }
      
        if (window.includes(newNumber)) {
          return res.json({
            windowPrevState: window.slice(),
            windowCurrState: window.slice(),
            numbers: window.slice(),
            avg: calculateAverage(window),
          });
        }
      
        window.push(newNumber);
        if (window.length > windowSize) {
          window.shift();
        }
      
        res.json({
          windowPrevState: window.slice(0, window.length - 1),
          windowCurrState: window.slice(),
          numbers: window.slice(),
          avg: calculateAverage(window.slice(-windowSize)),
        });
      });
      
      app.listen(3000, () => console.log('Server listening on port 3000'));
      
      break;
    case 'f':
      url = 'http:20.244.56.144/test/fibo'; 
      break;
    case 'e':
      url = 'http://20.244.56.144/test/even'; 
      break;
    case 'r':
      url = 'http://20.244.56.144/test/rand'; 
      break;
    default:
      return null;
  }

  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const number = JSON.parse(data);
          resolve(number);
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on('timeout', () => {
      reject(new Error('Request timed out'));
    });
    req.setTimeout(timeout);

    req.on('error', (err) => {
      reject(err);
    });
  });
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

let window = []; 

const express = require('express');
const app = express();

app.get('/numbers/:numberid', async (req, res) => {
  const numberId = req.params.numberid;
  const type = numberId[0];

  if (!['p', 'f', 'e', 'r'].includes(type)) {
    return res.status(400).send('Invalid number ID format');
  }

  let newNumber;
  try {
    newNumber = await fetchNumber(type);
  } catch (err) {
    console.error('Error fetching number:', err);
    return res.status(500).send('Error fetching number');
  }

  if (window.includes(newNumber)) {
    return res.json({
      windowPrevState: window.slice(),
      windowCurrState: window.slice(),
      numbers: window.slice(),
      avg: calculateAverage(window),
    });
  }

  window.push(newNumber);
  if (window.length > windowSize) {
    window.shift();
  }

  res.json({
    windowPrevState: window.slice(0, window.length - 1),
    windowCurrState: window.slice(),
    numbers: window.slice(),
    avg: calculateAverage(window.slice(-windowSize)),
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
