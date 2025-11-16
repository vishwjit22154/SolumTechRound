"""
A. Mystic Waves

Constraints:
- 1 ≤ t ≤ 100 (number of test cases)
- 1 ≤ x, n ≤ 10 (values for each test case)
"""


def solve_mystic_waves(x, n):
    """Return net energy for one test case.

    The alternating pattern (x, -x, x, -x, ...) cancels itself when n is even.
    If n is odd, one extra +x remains.
    """
    return x if n % 2 == 1 else 0


def main():
    # Read number of test cases.
    t = int(input())

    # Validate t is within constraints
    if not (1 <= t <= 100):
        print("Error: Number of test cases must be between 1 and 100")
        return

    for _ in range(t):
        # Read the parameters for the current test case.
        x, n = map(int, input().split())

        # Validate x and n are within constraints
        if not (1 <= x <= 10):
            print(f"Error: x must be between 1 and 10, got {x}")
            return

        if not (1 <= n <= 10):
            print(f"Error: n must be between 1 and 10, got {n}")
            return

        # Compute and print the total energy for this test case.
        result = solve_mystic_waves(x, n)
        print(result)


if __name__ == "__main__":
    main()
