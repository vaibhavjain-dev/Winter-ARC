// Program to find the absolute value of a number

#include <stdio.h>

int main()
{
    int number;

    printf("-- Program to find the absolute value of a number --\n");

    printf("\nEnter a number: ");
    scanf("%d", &number);

    printf("\nThe absolute value of %d is %d.\n", number, (number >= 0) ? number : -number);

    return 0;
}
