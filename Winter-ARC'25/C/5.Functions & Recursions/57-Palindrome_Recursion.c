// -------------------------------------------------------------
// 💠 Program Title: Find Palindrome of a Number (Iterative Method)
// 💻 Description: Reverses a number using a while loop and checks
//                 if it is a palindrome.
// -------------------------------------------------------------

#include <stdio.h>

int main()
{
    printf("--- Palindrome Checker (Iterative) ---\n");

    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    int copy = num;
    int reverse = 0;

    while (copy > 0)
    {
        int digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = copy / 10;
    }

    if (num == reverse)
        printf("\n%d is a Palindrome number.\n", num);
    else
        printf("\n%d is NOT a Palindrome number.\n", num);

    return 0;
}
