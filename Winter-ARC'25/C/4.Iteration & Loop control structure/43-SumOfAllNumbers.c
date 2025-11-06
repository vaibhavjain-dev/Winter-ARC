// -------------------------------------------------------------
// 💠 Program Title: Sum of Numbers using Do-While Loop
// 💻 Description: Continuously accepts numbers from the user and
//                 calculates their sum until the user enters 0.
// -------------------------------------------------------------

#include <stdio.h>

int main()
{
    int num, sum = 0;

    do
    {
        printf("Enter a number (0 to stop): ");
        scanf("%d", &num);

        sum += num;
    } while (num != 0);

    printf("\n-- Program Ended --\n");
    printf("Total Sum of Entered Numbers: %d\n", sum);

    return 0;
}
