// -------------------------------------------------------------
// 💠 Program Title: Sum of Positive Numbers using Do-While Loop
// 💻 Description: Continuously takes user input and adds only
//                 positive numbers. Negative inputs are ignored.
// -------------------------------------------------------------

#include <stdio.h>

int main()
{
    int num, sum = 0;

    printf("--- Welcome to Positive Number Adder ---\n");

    do
    {
        printf("Enter a number (0 to stop): ");
        scanf("%d", &num);

        if (num < 0)
            continue; // Skip negative numbers

        sum += num;

    } while (num != 0);

    printf("\nTotal Sum of Positive Numbers: %d\n", sum);

    return 0;
}
