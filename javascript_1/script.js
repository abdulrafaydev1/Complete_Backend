const user = {
    myName: 'rafay',
    address: {
        city: 'karachi',
        accoundNumber: '5257563',
        location: {
            lat: 13.2,
            lng: 77.8
        }
    }
}

// console.log(user.myName)

const { myName } = user['myName']
console.log(myName);
