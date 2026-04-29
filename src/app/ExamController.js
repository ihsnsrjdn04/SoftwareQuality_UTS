// Logic ujian CBT
export function startExam(token){
    if(token === "CBT2024"){
        return "Ujian dimulai";
    } else {
        return "Token salah";
    }
}

export function calculateScore(correct, total){
    return (correct / total) * 100;
}
