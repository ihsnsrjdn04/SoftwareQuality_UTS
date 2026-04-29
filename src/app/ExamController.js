export function startExam(token){
    if(token === "CBT2024"){
        return true;
    }
    return false;
}

export function calculateScore(correct, total){
    return Math.round((correct / total) * 100);
}