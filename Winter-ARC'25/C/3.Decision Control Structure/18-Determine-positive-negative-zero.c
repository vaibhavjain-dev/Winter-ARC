// Program to determine if a number is positive, negative, or zero

#include <stdio.h>

int main()
{
    int num;

    printf("-- Program to determine if a number is positive, negative, or zero --\n");

    printf("\nEnter the number: ");
    scanf("%d", &num);

    if (num > 0)
        printf("Positive number!\n");
    else if (num < 0)
        printf("Negative number!\n");
    else
        printf("Zero!\n");

    return 0;
}
