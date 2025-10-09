// Program: Simple Interest Calculator

#include <stdio.h>

int main()
{
    printf(" --Simple Interest Calculator-- \n");

    int principal, rate, time;

    printf("Enter the Principal: ");
    scanf("%d", &principal);

    printf("Enter the Rate: ");
    scanf("%d", &rate);

    printf("Enter the Time: ");
    scanf("%d", &time);

    float Interest = (principal * rate * time) / 100.0;
    printf("The Simple Interest is: %.2f\n", Interest);

    return 0;
}
