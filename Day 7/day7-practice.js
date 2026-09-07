function getUser() {
    return Promise.resolve({
        id: 22,
        name: "Suraj"
    });
}

getUser()
    .then((user) => {
        console.log(user);
    });

    function getOrders(userId) {
    return Promise.resolve(["Laptop", "Mouse"]);
}

getOrders(42)
    .then((orders) => {
        console.log(orders);
    })