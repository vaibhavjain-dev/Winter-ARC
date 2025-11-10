// -------------------------------------------------------------
// 💠 Program Title: Square Calculator using Infinite While Loop
// 💻 Description: Continuously calculates and displays the square
//                 of user-entered numbers until -1 is entered.
// -------------------------------------------------------------

#include <stdio.h>

int main()
{
    int num;

    printf("--- Welcome to the World of Squares ---\n");
    printf("Enter -1 to exit the program.\n");

    while (1)
    {
        printf("\nEnter a number: ");
        scanf("%d", &num);

        if (num == -1)
            break; // Exit condition

        printf("The square of %d is %d\n", num, num * num);
    }

    printf("\nProgram terminated. Thank you!\n");

    return 0;
}
