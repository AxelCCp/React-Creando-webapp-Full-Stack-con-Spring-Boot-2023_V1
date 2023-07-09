const user = {
    username: 'erika',
    email: 'correo@gmail.com',
    age: 20,
    ranking: 9
}


const detail = (user) => {
    const {username, email} = user;
    console.log(`el detalle del usuario ${username} con correo ${email}`);
}

detail(user)


const detail2 = ({username, email}) => {
    console.log(`el detalle del usuario ${username} con correo ${email}`);
}

detail2(user)