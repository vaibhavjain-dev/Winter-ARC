// Program: Basic Arithmetic Operations

#include <stdio.h>

int main()
{
    int first, second;

    printf("Please enter first number: ");
    scanf("%d", &first);

    printf("Please enter second number: ");
    scanf("%d", &second);

    printf("\nHere are the results of the operations:\n");
    printf("%d + %d = %d\n", first, second, first + second);
    printf("%d - %d = %d\n", first, second, first - second);
    printf("%d * %d = %d\n", first, second, first * second);
    printf("%d / %d = %d\n", first, second, first / second);
    printf("%d %% %d = %d\n", first, second, first % second);

    return 0;
}
