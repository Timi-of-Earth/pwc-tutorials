//Array of Numbers
const studentScore = [80, 98, 70, 68, 50];

//Array of strings
const studentNames = ['Oluwakemi', 'James', 'Okiroro', 'Timilehin', 'Oluwafemi'];

//Array of objects
const customerAccountInfo = [
    {
        id: 1,
        accountNumber: "4456434643",
        fullName: "Oluwakemi Ogunjobi",
        address: "26 Obafemi Awolowo road",
        canDebit: true
    },
    {
        id: 2,
        accountNumber: "44687934643",
        fullName: "Oluwakemi Ogunjobi",
        address: "26 Obafemi Awolowo road",
        canDebit: false
    },
    {
        id: 3,
        accountNumber: "4456446783",
        fullName: "Oluwakemi Ogunjobi",
        address: "30 Hamzat Awolowo road",
        canDebit: true
    }
]

const customerId = customerAccountInfo.map(function (customer) {
    return customer.id
});

const customerAccountNum = customerAccountInfo.map(function (customer) {
    return customer.accountNumber
})

const customerFullName = customerAccountInfo.map(function (customer) {
    return customer.fullName
})

const customerAddress = customerAccountInfo.map(function (customer) {
    return customer.address
})

const customerCanDebit = customerAccountInfo.map(function (customer) {
    return customer.canDebit
})
console.log(customerId, customerAccountNum, customerFullName, customerAddress, customerCanDebit)