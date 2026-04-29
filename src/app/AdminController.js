export function addQuestion(question){
    let data = JSON.parse(localStorage.getItem("questions")) || [];
    data.push(question);
    localStorage.setItem("questions", JSON.stringify(data));
    return true;
}

export function deleteUser(email){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.filter(u => u.email !== email);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
}
