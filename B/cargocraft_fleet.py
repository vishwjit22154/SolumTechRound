"""
B. CargoCraft Fleet

We need to check if n can be represented as 4a + 6b where a, b >= 0

Key insight:
- Any even number >= 4 can be represented (except 2)
- Odd numbers cannot be represented (4 and 6 are both even)
"""

def solve_cargocraft(n):
    """
    Find the minimum and maximum number of crafts for n propulsion units.
    
    Args:
        n: Total number of propulsion units
    
    Returns:
        Tuple (min_crafts, max_crafts) or (-1, -1) if impossible
    """
    # Odd numbers or n < 4 are impossible
    if n % 2 == 1: 
        return -1, -1
    
    if n == 2:  # Special case: too small
        return -1, -1
    
    
    
    # Maximum crafts: use as many Type A (4 units) as possible
    max_crafts = n // 4
    
    # Minimum crafts: use as many Type B (6 units) as possible
    # Strategy: Start with n // 6, then adjust if there's a remainder
    min_crafts = n // 6
    remainder = n % 6
    
    if remainder == 0:
        # Perfect division by 6
        min_crafts = n // 6
    elif remainder == 2:
        # remainder 2: can't use just 6s and 4s to make 2
        # But we can use (n - 8) // 6 Type B crafts and 2 Type A crafts
        # Because 8 = 4 + 4, so remainder 2 means we need 6 + 2 = 8 units from Type A
        # Actually, if n % 6 == 2, we can write n = 6k + 2
        # We need to check if we can make 2 from 4s -> No
        # But we can make 8 from 4s (2 Type A)
        # So n = 6(k-1) + 6 + 2 = 6(k-1) + 8
        if n >= 8:
            min_crafts = (n - 8) // 6 + 2
        else:
            return -1, -1
    elif remainder == 4:
        # remainder 4: can use one Type A craft
        min_crafts = n // 6 + 1
    
    return min_crafts, max_crafts


def main():
    t = int(input())  # Number of test cases
    
    if not (1 <= t <= 1000):
        print("Error: t must be between 1 and 1000.")
        return
    
    for _ in range(t):
        n = int(input())
        
        if not (1 <= n <= 10**18):
            print("Error: n must be between 1 and 10^18.")
            return
        
        min_crafts, max_crafts = solve_cargocraft(n)
        
        if min_crafts == -1:
            print(-1)
        else:
            print(min_crafts, max_crafts)


if __name__ == "__main__":
    main()

