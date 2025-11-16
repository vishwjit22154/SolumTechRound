# A. Mystic Waves

## Problem Description
Given a magical energy value `x` and number of waves `n`, calculate the total energy after alternating waves of `x` and `-x`.

## Solution Approach
The pattern is: x, -x, x, -x, x, ...

- If `n` is odd: Total = x (one extra positive value)
- If `n` is even: Total = 0 (all values cancel out)

## How to Run
```bash
python mystic_waves.py
```

## Example
Input:
```
4
1 4
2 5
3 6
4 7
```

Output:
```
0
2
0
4
```

## Time Complexity
O(1) per test case

## Space Complexity
O(1)

