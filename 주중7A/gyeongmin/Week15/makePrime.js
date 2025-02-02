function solution(nums) {
    var answer = 0;
    
    function checkPrime(target) {
    for (let i = 3; i <= Math.sqrt(target); i+=2) {
        if (target % i === 0) return false;
    }
    return true;
    }    
    //nums의 배열을 돌면서 3개의 합을 담고있는 배열을 만들어준다
    for(let i = 0; i < nums.length-2; i++){
        for(let j = i+1; j < nums.length-1; j++){
            for(let k = j+1; k < nums.length; k++){
                let sum = nums[i] + nums[j] + nums[k];
                if(sum % 2 !== 0 && checkPrime(sum)) answer++
            }
        }
    }
    return answer;
}
