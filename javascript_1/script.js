const user = {
    name: 'rafay',
    address: {
        city: 'karachi',
        accoundNumber: '5257563',
        location: {
            lat: 13.2,
            lng: 77.8
        }
    }
}

const { city , accoundNumber } = user.address

console.log(accoundNumber)