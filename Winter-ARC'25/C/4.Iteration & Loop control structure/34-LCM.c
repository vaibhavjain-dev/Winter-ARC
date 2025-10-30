// Least Common Multiplier

#include <stdio.h>

int main()
{
    int first, second;
    printf("--Program to find LCM of 2 numbers--\n");
    printf("Enter 2 numbers:\n");
    scanf("%d %d", &first, &second);

    int min = (first > second) ? first : second; // start from larger number
    int max = first * second;                    // upper limit (product of both)

    for (int i = min; i <= max; i++)
    {
        if (i % first == 0 && i % second == 0)
        {
            printf("LCM of %d and %d is %d\n", first, second, i);
            break; // stop after finding the first (smallest) common multiple
        }
    }

    return 0;
}
