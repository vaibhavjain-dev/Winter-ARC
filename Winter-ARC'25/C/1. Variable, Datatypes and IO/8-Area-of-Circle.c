#include <stdio.h>

int main()
{
    float radius;
    float pi = 3.14;

    printf("Enter radius of your circle:");
    scanf("%f", &radius);

    printf("The area of the circle is: %.2f\n", pi * radius * radius);
    return 0;
}