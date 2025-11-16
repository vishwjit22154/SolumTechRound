# B. CargoCraft Fleet

## Problem Description
Given the total number of propulsion units `n`, determine the minimum and maximum number of crafts possible:
- Type A crafts: 4 propulsion units
- Type B crafts: 6 propulsion units

If no valid combination exists, return -1.

## Solution Approach

### Key Insights:
1. Both craft types use even numbers of units (4 and 6), so odd numbers are impossible
2. To **maximize** crafts: use as many Type A (smaller) crafts as possible
3. To **minimize** crafts: use as many Type B (larger) crafts as possible

### Algorithm:
- If `n` is odd or `n == 2`: impossible (-1)
- **Maximum crafts**: `n // 4`
- **Minimum crafts**: 
  - If `n % 6 == 0`: `n // 6`
  - If `n % 6 == 4`: `n // 6 + 1` (use one Type A for remainder)
  - If `n % 6 == 2`: `(n - 8) // 6 + 2` (use two Type A crafts)

## How to Run
```bash
python cargocraft_fleet.py
```

## Example
Input:
```
4
4
7
24
998244353998244352
```

Output:
```
1 1
-1
4 6
166374058999707392 249561088499561088
```

### Explanation:
- **n=4**: Exactly 1 Type A craft (min=1, max=1)
- **n=7**: Odd number, impossible
- **n=24**: 
  - Min: 4 Type B crafts (6×4=24)
  - Max: 6 Type A crafts (4×6=24)
- **n=998244353998244352**: Large even number follows the same rules

## Time Complexity
O(1) per test case

## Space Complexity
O(1)

