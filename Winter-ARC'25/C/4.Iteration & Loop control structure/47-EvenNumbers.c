// -------------------------------------------------------------
// 💠 Program Title: Display Even Numbers using For Loop
// 💻 Description: Prints all even numbers from 1 to a user-defined limit
//                 using a for loop and the continue statement.
// -------------------------------------------------------------

#include <stdio.h>

int main()
{
    int num;

    printf("--- Welcome to Even Number Display Program ---\n");
    printf("Enter the maximum number: ");
    scanf("%d", &num);

    printf("\nEven numbers from 1 to %d:\n", num);

    for (int i = 1; i <= num; i++)
    {
        if (i % 2 == 1)
            continue; // Skip odd numbers

        printf("%d ", i);
    }

    printf("\n");

    return 0;
}
