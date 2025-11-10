// -------------------------------------------------------------
// 💠 Program Title: Prime Number Checker using While Loop
// 💻 Description: Checks whether a given number is prime or not
//                 using a while loop for divisibility testing.
// -------------------------------------------------------------

#include <stdio.h>

int main()
{
    int num;

    printf("--- Prime Number Checker ---\n");
    printf("Enter a number: ");
    scanf("%d", &num);

    int i = 2;

    // Check divisibility
    while (i < num)
    {
        if (num % i == 0)
        {
            printf("\n%d is NOT a prime number.\n", num);
            return 0;
        }
        i++;
    }

    printf("\n%d is a PRIME number.\n", num);
    return 0;
}
