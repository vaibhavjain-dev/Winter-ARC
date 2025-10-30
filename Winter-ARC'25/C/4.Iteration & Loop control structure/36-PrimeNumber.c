#include <stdio.h>

int main()
{
    int num, isPrime = 1;
    int i = 2;
    printf("--Find Given number is prime or not\n");
    printf("\nEnter a Num:- ");
    scanf("%d", &num);

    if (num <= 1)
        isPrime = 0;

    for (i = 2; i * i <= num; i++) // optimized loop condition
    {
        if (num % i == 0)
        {
            isPrime = 0;
            break;
        }
    }

    if (isPrime)
        printf("\n %d is prime\n", num);
    else
        printf("\n %d is Not prime\n", num);

    return 0;
}
