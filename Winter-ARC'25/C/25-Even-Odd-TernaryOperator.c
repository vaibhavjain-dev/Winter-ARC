// Program to determine if a number is even or odd using the ternary operator

#include <stdio.h>

int main()
{
    int number;

    printf("-- Program to determine if a number is even or odd using the ternary operator --\n");

    printf("\nEnter a number: ");
    scanf("%d", &number);

    (number % 2 == 0) ? printf("%d is an even number.\n", number)
                      : printf("%d is an odd number.\n", number);

    return 0;
}
