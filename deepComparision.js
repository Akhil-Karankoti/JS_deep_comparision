function deepComparision(A, B) {
    if (typeof A === 'object' && typeof B === 'object') {
        let A_isArray = Array.isArray(A);
        let B_isArray = Array.isArray(B);
        let A_keys = Object.keys(A);
        let B_keys = Object.keys(B);
        let len = A_keys.length;

        // If one property is array and other is object -> return false
        if ((A_isArray && !B_isArray) || (!A_isArray && B_isArray)) {
            return false;
        }

        // If both keys are of not same length then they wont be equal
        if (A_keys.length !== B_keys.length) {
            return false;
        }

        // Check if both A and B has same keys or not
        for(let keyA of A_keys){
            if(!B_keys.includes(keyA)){
                return false;
            }
        }

        let visitedArray = [];
        let i, j;

        // Initialize visited array with falsy values
        for (i = 0; i < len; i++) {
            visitedArray.push(false);
        }

        // Recursively compare objects
        for (i = 0; i < len; i++) {
            let isEqual = false;
            for (j = 0; j < len; j++) {
                if (!visitedArray[j]) {
                    isEqual = A_isArray ? deepComparision(A[i], B[j]) : deepComparision(A[A_keys[i]], B[B_keys[j]]);
                    if (isEqual) {
                        visitedArray[j] = 1;
                        break;
                    }
                }
            }
            if (!isEqual) {
                return false
            }
        }
        return true;
    }
    else {
        return A === B;     // compares function instances too...
    }
}

/**Test Arrays below */
// let A = [1,2,3];
// let B = [1,2,3];
// let c = {
//     "a": "b",
//     "c": "d"
// }
// let d = {
//     "a": "b",
//     "c": "d"
// }
// let e = {
//     "a": {
//         "a": "b",
//         "c": "d"
//     },
//     "c": ["d"]
// }
// let f = {
//     "a": {
//         "a": "c",
//         "c": "a"
//     },
//     "c": ["d"]
// }

// let a = [
//     {
//     "a": {
//         "a": "b",
//         "c": "d"
//     },
//     "c": ["d"]
// },
// {
//     "a": {
//         "a": "c",
//         "c": "a"
//     },
//     "c": ["d"]
// }]
