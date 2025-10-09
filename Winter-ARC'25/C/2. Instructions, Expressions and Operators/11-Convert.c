// Program: Integer to Float Type Conversion

#include <stdio.h>

int main()
{
    int number;

    printf("Please enter a number: ");
    scanf("%d", &number);

    printf("Num: %d", number);

    float floating = number;
    printf("\nOriginal number is: %d", number);
    printf("\nImplicit Float converted number is: %f", floating);
    printf("\nExplicit Float converted number is: %f\n", (float)number);

    return 0;
}
