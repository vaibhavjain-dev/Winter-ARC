// Program to determine if a number is even or odd

#include <stdio.h>

int main()
{
    int num;

    printf("-- Program to determine if a number is even or odd --\n");

    printf("\nEnter a number: ");
    scanf("%d", &num);

    if (num % 2 == 0)
        printf("%d is an EVEN number.\n", num);
    else
        printf("%d is an ODD number.\n", num);

    return 0;
}
