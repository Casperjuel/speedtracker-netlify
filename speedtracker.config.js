const config = {
  profiles: {
    test: {
      name: 'Novasol.de',
      parameters: {
        connectivity: 'Cable',
        location: 'London_EC2:Chrome',
        runs: 3,
        block: "www.google-analytics.com",
        url: 'https://novasol.de'
      },
     /* budgets: [
        {
          metric: 'TTFB',
          max: 1000
        }
      ]*/
    },
    test: {
      name: 'Novasol.dk',
      parameters: {
        connectivity: 'Cable',
        location: 'London_EC2:Chrome',
        runs: 3,
        block: "www.google-analytics.com",
        url: 'https://novasol.dk'
      },
     /* budgets: [
        {
          metric: 'TTFB',
          max: 1000
        }
      ]*/
    },
    test: {
      name: 'House DE',
      parameters: {
        connectivity: 'Cable',
        location: 'London_EC2:Chrome',
        runs: 3,
        block: "www.google-analytics.com",
        url: 'https://www.novasol.de/p/CIC638?adults=2&children=0&pets=0'
      },
     /* budgets: [
        {
          metric: 'TTFB',
          max: 1000
        }
      ]*/
    },
    test: {
      name: 'House DK',
      parameters: {
        connectivity: 'Cable',
        location: 'London_EC2:Chrome',
        runs: 3,
        block: "www.google-analytics.com",
        url: 'https://www.novasol.dk/feriehuse/kroatien/istrien/vodnjan/feriehuse-vodnjan-svkirin-cic638?adults=2&children=0&pets=0'
      },
     /* budgets: [
        {
          metric: 'TTFB',
          max: 1000
        }
      ]*/
    }
  }
}

if (typeof window === 'object') {
  window.__SPEEDTRACKER_CONFIG = config
} else if (typeof module !== 'undefined') {
  module.exports = config
}
