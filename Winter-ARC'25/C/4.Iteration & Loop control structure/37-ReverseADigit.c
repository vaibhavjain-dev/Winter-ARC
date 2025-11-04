#include <stdio.h>

// Title: C Program to Reverse a Number (with step-by-step output)

int main()
{
    int num;
    printf("--- Program to Reverse a Number ---\n");

    printf("\nEnter a number: ");
    scanf("%d", &num);

    int reverse = 0;
    int copy = num; // Save original number

    while (num > 0)
    {
        int digit = num % 10;             // Get last digit
        reverse = (reverse * 10) + digit; // Add it to reverse
        num = num / 10;                   // Remove last digit

        printf("\nAfter extracting digit %d, reverse is now: %d", digit, reverse);
    }

    printf("\n\nThe Reverse of %d is %d\n", copy, reverse);
    return 0;
}
