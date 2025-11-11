// -------------------------------------------------------------
// 💠 Program Title: Calculate Average of Five Numbers using Function
// 💻 Description: Demonstrates how to pass multiple float arguments
//                 to a user-defined function and return their average.
// -------------------------------------------------------------

#include <stdio.h>

// Function definition
float get_Average(float a, float b, float c, float d, float e)
{
    float avg = (a + b + c + d + e) / 5.0;
    return avg;
}

int main()
{
    float a, b, c, d, e;

    printf("--- Average Calculation using Function ---\n");
    printf("Enter 5 numbers: ");
    scanf("%f %f %f %f %f", &a, &b, &c, &d, &e);

    float average = get_Average(a, b, c, d, e);

    printf("\nThe average of the 5 numbers is: %.2f\n", average);

    return 0;
}
