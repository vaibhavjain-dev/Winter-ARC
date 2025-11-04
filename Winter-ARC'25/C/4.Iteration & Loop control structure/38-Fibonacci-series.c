#include <stdio.h>

int main()
{
    int num;
    printf("---Fibonacci Serie---");

    printf("Enter a num:  (upto which series should be printed)");
    scanf("%d", &num);

    printf(" 0");
    if (num > 0)
    {
        printf(" 1");
    }

    int prev = 0, next = 1;

    while (prev + next <= num)
    {
        int temp = prev + next;
        printf(" %d", temp);

        prev = next;
        next = temp;
    }
}
