// Program to Reverse a Number

#include <stdio.h>

int main()
{
    int num, reverse = 0;

    printf("=== Number Reverser ===\n\n");
    printf("Enter a number: ");
    scanf("%d", &num);

    int copy = num;

    while (copy > 0)
    {
        reverse = reverse * 10 + copy % 10;
        copy /= 10;
    }

    printf("\nThe reverse of %d is %d\n", num, reverse);
    return 0;
}
