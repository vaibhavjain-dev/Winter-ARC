// Program: Simple Interest Calculator

#include <stdio.h>

int main()
{
    printf(" --Simple Interest Calculator-- \n");

    float principal, rate, time;

    printf("Enter the Principal: ");
    scanf("%f", &principal);

    printf("Enter the Rate: ");
    scanf("%f", &rate);

    printf("Enter the Time: ");
    scanf("%f", &time);

    float Interest = (principal * rate * time) / 100.0;
    printf("The Simple Interest is: %.2f\n", Interest);

    return 0;
}
