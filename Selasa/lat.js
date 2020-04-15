function numberSum(num) {
    if(num == 1) {
      return 1;
    }
    else {
      return num + numberSum(num - 1);
    }
  }
  
  console.log(numberSum(10)); // 5 + 4 + 3 + 2 + 1 = 15