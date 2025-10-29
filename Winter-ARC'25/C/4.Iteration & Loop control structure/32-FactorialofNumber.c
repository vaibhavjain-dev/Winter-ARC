// Program to calculate the factorial of a given number

#include <stdio.h>

int main()
{
    int num;
    printf("-- Factorial Calculator --\n");
    printf("Enter a number: ");
    scanf("%d", &num);

    int fact = 1;

    for (int i = 2; i <= num; i++)
    {
        fact *= i;
    }

    printf("The factorial of %d is %d\n", num, fact);

    return 0;
}
