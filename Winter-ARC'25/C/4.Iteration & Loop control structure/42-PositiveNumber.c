// -------------------------------------------------------------
// 💠 Program Title: Check Positive Number using Do-While Loop
// 💻 Description: Keeps asking the user for input until a positive number is entered.
// -------------------------------------------------------------

#include <stdio.h>

int main()
{
    int num;

    do
    {
        printf("Enter a positive number: ");
        scanf("%d", &num);

    } while (num <= 0);

    printf("\n-- You have successfully entered a positive number: %d --\n", num);

    return 0;
}
