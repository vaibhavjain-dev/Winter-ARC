// Program: Fahrenheit to Celsius Converter

#include <stdio.h>

int main()
{
    float fahrenheit, celsius;

    printf(" --Fahrenheit to Celsius-- \n");

    printf("Enter temperature in Fahrenheit: ");
    scanf("%f", &fahrenheit);

    celsius = (fahrenheit - 32) * 5.0 / 9.0;

    printf("\n%.2f Fahrenheit is %.2f Celsius\n", fahrenheit, celsius);

    return 0;
}
