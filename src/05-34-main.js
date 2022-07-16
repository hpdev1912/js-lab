function checkClassifyOfStudent(score) {
    let studentRank; //linh canh => noi de luu tru gia tri tam sau nhieu lan xu li

    if (score > 8) studentRank = 'Excellent';
    else if (score >= 7) studentRank = 'Good';
    else if (score >= 4) studentRank = 'Not Good';
    else studentRank = 'Bad';

    return studentRank;
}

//refactor
function checkClassifyOfStudent(score) {
    //Validate suy nghi xem luc nao can validate
    //suy nghi neu input k hop le se anh huong gi den ham cua minh
    if (score < 0 || score > 10) return 'Invalid Score!';

    //dung if - return de khu if else cho code de doc hon
    //main
    if (score > 8) return 'Excellent';
    if (score >= 7) return 'Good';
    if (score >= 4) return 'Not Good';

    //return
    return 'Bad';
}
