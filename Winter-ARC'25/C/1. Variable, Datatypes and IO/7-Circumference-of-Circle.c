#include <stdio.h>

int main()
{
    float pi = 3.14;
    int radius;

    printf("Enter radius of your Circle: ");
    scanf("%d", &radius);

    printf("The circumference of your circle is %f", 2 * pi * radius);

    return 0;
}