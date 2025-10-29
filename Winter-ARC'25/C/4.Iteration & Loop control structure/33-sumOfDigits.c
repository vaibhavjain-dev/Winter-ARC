// Program to calculate the sum of digits of a given number

#include <stdio.h>

int main()
{
    int num;
    printf("-- Sum of Digits Calculator --\n");
    printf("Enter a number: ");
    scanf("%d", &num);

    int sum = 0;
    int copy = num;

    while (num > 0)
    {
        sum += num % 10; // add last digit to sum
        num /= 10;       // remove last digit
    }

    printf("The sum of digits of %d is %d\n", copy, sum);

    return 0;
}
