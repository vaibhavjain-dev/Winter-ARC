// Program to print the multiplication table of a given number

#include <stdio.h>

int main()
{
    int num;

    printf("-- Multiplication Table Generator --\n");
    printf("Enter a number: ");
    scanf("%d", &num);

    printf("\nMultiplication table of %d:\n", num);

    for (int i = 1; i <= 10; i++)
    {
        printf("%d x %d = %d\n", num, i, num * i);
    }

    return 0;
}
