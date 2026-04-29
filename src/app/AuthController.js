// Login & Register logic
export function login(email, password){
    if(email === "admin@gmail.com" && password === "password123"){
        return "Login berhasil";
    } else {
        return "Login gagal";
    }
}

export function register(user){
    return "Registrasi berhasil";
}
