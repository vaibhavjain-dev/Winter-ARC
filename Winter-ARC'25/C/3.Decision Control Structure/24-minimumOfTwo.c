// Program to find the minimum of two numbers

#include <stdio.h>

int main()
{
    int num1, num2;

    printf("-- Program to find the minimum of two numbers --\n");

    printf("\nEnter two numbers: ");
    scanf("%d %d", &num1, &num2);

    int minimum = (num1 < num2) ? num1 : num2;

    printf("\nThe minimum of the two numbers is: %d\n", minimum);

    return 0;
}
