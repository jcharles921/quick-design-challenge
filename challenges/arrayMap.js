// To solve this without breaking time complexity O(n), I had to use a hash map.
// Through research, I found out that I could use a hash map to store the sum of the array and the number of times it has occurred.
// The key logic is to check if the difference between the current sum and the target sum is in the hash map.
// If it is, then we add the value of the difference to the count.
// If it is not, then we add the current sum to the hash map.
// The hash map (Map), which I had never used before this challenge, helps a lot because you can track the index of the array more easily.

var subarraySum = function (nums, k) {
    let cumulativeSumMap = new Map();
    // Initialize the cumulative sum
    let cumulativeSum = 0;
    // Initialize the count of subarrays
    let count = 0;
  
    // Add the initial cumulative sum of 0 to the map with count 1
    cumulativeSumMap.set(0, 1);
  
    // Iterate through the array
    for (let num of nums) {
      // Update the cumulative sum
      cumulativeSum += num;
  
      // Check if (cumulativeSum - k) exists in the map
      if (cumulativeSumMap.has(cumulativeSum - k)) {
        // If it exists, add the count of (cumulativeSum - k) to the total count
        count += cumulativeSumMap.get(cumulativeSum - k);
      }
  
      // Add or update the cumulative sum in the map
      if (cumulativeSumMap.has(cumulativeSum)) {
        cumulativeSumMap.set(
          cumulativeSum,
          cumulativeSumMap.get(cumulativeSum) + 1
        );
      } else {
        cumulativeSumMap.set(cumulativeSum, 1);
      }
    }
  
    // Return the total count of subarrays that sum up to k
    return count;
  };
  
  const nums = [1, 1, 1];
  const k = 2;
  console.log(subarraySum(nums, k));
  