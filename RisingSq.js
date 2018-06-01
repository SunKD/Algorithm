function RisingSq(curr, num) {
    if (num === 1) {
        console.log(num)
        return num;
    }

    if (curr === 2) {
        console.log(curr * curr);
        return;
    }

    if (curr <= num && curr % 2 != 0) {
        console.log(curr * curr);
        return RisingSq(curr + 2, num);
    }
    if (num % 2 == 0 && curr % 2 != 0) {
        curr = curr + 1;
    } else if (num % 2 != 0 && curr % 2 != 0) {
        curr = curr - 3;
    }


    if (curr > 2 && curr <= num) {
        console.log(curr * curr);
        return RisingSq(curr - 2, num);
    }
    return RisingSq(curr - 2, num);

}
RisingSq(1, 4);