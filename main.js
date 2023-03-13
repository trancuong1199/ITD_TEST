const stn = {stn1: '1234', stn2: '5678'};


// Split string and converse to number

function converted(value) {  
    const string1 = value.stn1.split("");
    const string2 = value.stn2.split("");
    let converted1 = [];
    let converted2 = [];

    string1.forEach(function(value) {
        converted1.push(Number(value)) 
    })

    string2.forEach(function(value) {
        converted2.push(Number(value)) 
    })  

    MyBigNumber(converted1, converted2)
}

// take a last number in array

function MyBigNumber(converted1, converted2) {
    let arrSum = [];
    let max_arr1 = converted1.reduce(function(acc, element){
        return (acc > element) ? acc : element
    });

    let max_arr2 = converted2.reduce(function(acc, element){
        return (acc > element) ? acc : element
    });

    
    for(let i = 0; i <= max_arr1; i++) {
        for(let j = 0; j <= max_arr2; j++) {
            if(converted1.length > 0 || converted2.length > 0) {
                const lastNumberArr1 = converted1[converted1.length - 1]
                const lastNumberArr2 = converted2[converted2.length - 1]
                const sum = lastNumberArr1 + lastNumberArr2

                converted1.pop()
                converted2.pop()

                arrSum.push(sum)
            }
        }
    }
    Sum(arrSum)
}

// Find Max Number 

function Sum(arrSums) {
    let arrOfMaxNumbers = [];
    arrSums.map(value => {
        let newArr = [];
        let arrSum = String(value).split("")
        arrSum.forEach(function(value) {
            newArr.push(Number(value)) 
        })

        if(newArr.length > 1) {
            var maxInNumbers = Math.max.apply(Math, newArr);
            arrOfMaxNumbers.push(String(maxInNumbers))
        } else {
            for(let a of newArr) {
                arrOfMaxNumbers.push(String(a))
            }   
        }
    })
    const maxSumNumber = arrOfMaxNumbers.join('')
    console.log(maxSumNumber);

}

converted(stn)