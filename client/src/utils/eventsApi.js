

const makeEventArray = fetch('https://history.muffinlabs.com/date')
  .then(res => res.json())
  .then(data => {
    //let dataEventArray = data.data.Events;
    return data.data.Events;
  });

    // Tutorial on getting random items from an array on tutorialspoint.com
//    const randomEvent = (arr, num = 1) => {
//      const eventArray = [];
//      for (let i = 0; i < num;) {
//        const random = Math.floor(Math.random() * arr.length);
//        if (eventArray.indexOf(arr[random]) !== -1) {
//          continue;
//        };
//        eventArray.push(arr[random]);
//        i++;
//      };
//      return eventArray;
//    };
//    const todaysEvents = randomEvent(dataEventArray, 10)
//    console.log(todaysEvents);
//
//    //  console.log(todaysEvents);
//    const todaysEvents2 = todaysEvents.sort(function (a, b) {
//      return a.year - b.year;
//
//    })
//    console.log(todaysEvents2);
//    return todaysEvents2;
//  })

module.exports = makeEventArray;
