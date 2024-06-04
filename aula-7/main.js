/* const promise1 = new Promise ();
const promise2 = new Promise ();
const promise3 = new Promise ();

Promise.all([promise1, promise2, promise3]).then((result) =>
    console.log(result)
); */

const user = new Promise ((resolve) => resolve ({ name: "Vitor"}) );
const cart = new Promise ((resolve, reject) => reject("erro!") );
const vouchers = new Promise ((resolve) => resolve ({ vouchers: ["promo10"]}) );

Promise.all([user, cart, vouchers])
    .then((result) => console.log(result))
    .catch((result) => console.log(result)
);

/* Promise.race([user, cart, vouchers])
    .then((result) => console.log(result))
    .catch((result) => console.log(result)); 
*/


async function f() {
    return 1;
};
//
const loadUser = async () => {
    console.log("Iniciar");
    const userLogged = await user;
    console.log(userLogged);
};

const loadUser2 = async () => {
    console.log("Iniciar");
    user
        .then((userLogged) => console.log(userLogged))
        .catch((error) => console.log(error));
};
