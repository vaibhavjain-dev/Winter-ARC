// Program: Compound Interest Calculator

#include <stdio.h>
#include <math.h> // Include math.h for the pow function

int main()
{
    printf(" --Compound Interest Calculator-- \n");

    int principal, rate, time;

    printf("Enter the Principal: ");
    scanf("%d", &principal);

    printf("Enter the Rate: ");
    scanf("%d", &rate);

    printf("Enter the Time: ");
    scanf("%d", &time);

    // Calculate compound interest using floating-point division
    float Interest = principal * pow((1 + (float)rate / 100), time);

    printf("The Compound Interest is: %.2f\n", Interest);

    return 0;
}
