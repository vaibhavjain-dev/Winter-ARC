// Program to find the greatest of three numbers

#include <stdio.h>

int main()
{
    int num1, num2, num3;

    printf("-- Program to find the greatest of three numbers --\n");

    printf("\nEnter three numbers: ");
    scanf("%d %d %d", &num1, &num2, &num3);

    if (num1 > num2 && num1 > num3)
        printf("\n%d is the greatest number.\n", num1);
    else if (num2 > num3)
        printf("\n%d is the greatest number.\n", num2);
    else
        printf("\n%d is the greatest number.\n", num3);

    return 0;
}
