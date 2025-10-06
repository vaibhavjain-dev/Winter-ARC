#include <stdio.h>

int main()
{
    int radius;
    const float PI = 3.14159;

    printf("\n Enter your radius of circle:-");
    scanf("%d", &radius);

    printf("\nThe Circumference of circle is:-\t%f\n", 2 * PI * radius);
    return 0;
}