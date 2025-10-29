// Program to calculate the sum of first N odd numbers

#include <stdio.h>

int main()
{
    int num;

    printf("-- Sum of First N Odd Numbers --\n");
    printf("Enter a number: ");
    scanf("%d", &num);

    int sum = 0;

    for (int i = 1; i <= num; i++)
    {
        sum += 2 * i - 1; // i-th odd number
    }

    printf("The sum of first %d odd numbers is: %d\n", num, sum);

    return 0;
}
