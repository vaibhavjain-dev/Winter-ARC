// Program: Multiplication of Two Numbers

#include <stdio.h>

int main()
{
    float first, second;

    printf("Enter first number: ");
    scanf("%f", &first);

    printf("Enter second number: ");
    scanf("%f", &second);

    float result = first * second;

    printf("\nResult = %.2f\n", result);

    return 0;
}
